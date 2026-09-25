// Customer reviews stored in Cloud Firestore (collection "reviews").
// Reviews are published immediately; unwanted ones can be deleted from the Firebase console.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore, collection, addDoc, getDocs, query, orderBy, limit, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyANp2GWOfrzzKBZGVUnY_AJ8viIrBJpuM0",
  authDomain: "smellingclean-5b950.firebaseapp.com",
  projectId: "smellingclean-5b950",
  storageBucket: "smellingclean-5b950.firebasestorage.app",
  messagingSenderId: "677232104425",
  appId: "1:677232104425:web:1aa0e6a6ead73aef71b178"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const reviewsRef = collection(db, "reviews");

const $ = (id) => document.getElementById(id);
const list = $("reviewsList");
const loading = $("reviewsLoading");
const empty = $("reviewsEmpty");
const errorBox = $("reviewsError");
const summary = $("reviewsSummary");
const form = $("reviewForm");

let reviews = [];

const STAR = '<svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-star-solid"/></svg>';
function starsHTML(n) {
  let h = "";
  for (let i = 1; i <= 5; i++) h += STAR.replace("<svg", '<svg class="' + (i <= n ? "on" : "off") + '"');
  return h;
}

function formatDate(ts) {
  if (!ts || typeof ts.toDate !== "function") return "";
  const lang = document.documentElement.lang === "es" ? "es-US" : "en-US";
  return ts.toDate().toLocaleDateString(lang, { year: "numeric", month: "short", day: "numeric" });
}

function serviceLabel(value) {
  const opt = form ? [...form.elements.rservice.options].find((o) => o.value === value) : null;
  return opt ? opt.textContent : value;
}

function render() {
  list.querySelectorAll(".review-card").forEach((el) => el.remove());
  loading.hidden = true;
  empty.hidden = reviews.length > 0;
  summary.hidden = reviews.length === 0;
  if (!reviews.length) return;

  const avg = reviews.reduce((s, r) => s + r.rating, 0) / reviews.length;
  $("rsScore").textContent = avg.toFixed(1);
  $("rsStars").innerHTML = starsHTML(Math.round(avg));
  $("rsCount").textContent = reviews.length;
  $("rsWordOne").hidden = reviews.length !== 1;
  $("rsWordMany").hidden = reviews.length === 1;

  reviews.forEach((r) => {
    const card = document.createElement("article");
    card.className = "review-card";

    const top = document.createElement("div");
    top.className = "review-top";
    const meta = document.createElement("div");
    meta.className = "review-meta";
    const avatar = document.createElement("span");
    avatar.className = "rv-avatar";
    avatar.textContent = (r.name.trim()[0] || "?").toUpperCase();
    const who = document.createElement("div");
    const name = document.createElement("strong");
    name.textContent = r.name;
    const date = document.createElement("small");
    date.textContent = formatDate(r.createdAt);
    who.append(name, date);
    meta.append(avatar, who);
    const stars = document.createElement("span");
    stars.className = "rv-stars";
    stars.setAttribute("aria-label", r.rating + " / 5");
    stars.innerHTML = starsHTML(r.rating);
    top.append(meta, stars);

    const text = document.createElement("p");
    text.textContent = r.text;

    card.append(top, text);
    if (r.service) {
      const tag = document.createElement("span");
      tag.className = "rv-service";
      tag.textContent = serviceLabel(r.service);
      card.append(tag);
    }
    list.append(card);
  });
}

function isValid(r) {
  return r && typeof r.name === "string" && typeof r.text === "string" &&
    Number.isInteger(r.rating) && r.rating >= 1 && r.rating <= 5;
}

async function loadReviews() {
  try {
    const snap = await getDocs(query(reviewsRef, orderBy("createdAt", "desc"), limit(50)));
    reviews = snap.docs.map((d) => d.data()).filter(isValid);
    errorBox.hidden = true;
    render();
  } catch (e) {
    console.error("Could not load reviews", e);
    loading.hidden = true;
    errorBox.hidden = false;
  }
}

if (form) {
  const submit = $("reviewSubmit");
  const err = $("reviewError");
  const sendErr = $("reviewSendError");
  const ok = $("reviewSuccess");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    ok.hidden = true;
    sendErr.hidden = true;
    if (form.elements.website.value) return; // bot trap

    const name = form.elements.rname.value.trim();
    const text = form.elements.rtext.value.trim();
    const rating = parseInt(form.querySelector('input[name="rating"]:checked')?.value || "5", 10);
    const service = form.elements.rservice.value;

    const nameOk = name.length >= 2 && name.length <= 60;
    const textOk = text.length >= 10 && text.length <= 800;
    form.elements.rname.classList.toggle("invalid", !nameOk);
    form.elements.rtext.classList.toggle("invalid", !textOk);
    err.hidden = nameOk && textOk;
    if (!nameOk || !textOk) return;

    submit.disabled = true;
    try {
      await addDoc(reviewsRef, { name, text, rating, service, createdAt: serverTimestamp() });
      form.reset();
      ok.hidden = false;
      await loadReviews();
    } catch (ex) {
      console.error("Could not send review", ex);
      sendErr.hidden = false;
    } finally {
      submit.disabled = false;
    }
  });

  form.addEventListener("input", (e) => {
    if (e.target.classList.contains("invalid")) e.target.classList.remove("invalid");
  });
}

// Re-render dates and service names when the language changes
new MutationObserver(() => { if (reviews.length) render(); })
  .observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });

loadReviews();
