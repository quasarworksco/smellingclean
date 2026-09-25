(function () {
  "use strict";

  var doc = document.documentElement;
  var body = document.body;
  var PHONE = "18138087772";

  /* ---------------- i18n (EN default / ES) ---------------- */
  var ES = {
    brandTag: "Servicios Profesionales de Limpieza",
    navHome: "Inicio", navServices: "Servicios", navPortfolio: "Portafolio", navContact: "Contacto",
    ctaQuote: "Cotización gratis", ctaQuoteLong: "Solicitar cotización gratis", ctaWhatsapp: "Escríbenos por WhatsApp",
    heroEyebrow: "Servicios de Limpieza Residencial y Comercial",
    heroTitle: "Espacios que se sienten nuevos y <em>huelen a limpio.</em>",
    hbCall: "Llama o escribe", hbArea: "Zona de servicio", hbAreaV: "Área de Tampa, FL", hbSched: "Horarios", hbSchedV: "Única vez o recurrente",
    heroSub: "Limpieza profesional para hogares y negocios, hecha con cuidado, detalle y un acabado que se ve — y se huele — desde que entras.",
    mq1: "Limpieza Estándar", mq2: "Limpieza Profunda", mq3: "Mudanzas", mq4: "Limpieza Comercial", mq5: "Limpieza de Airbnb", mq6: "Post-Construcción",
    aboutOwner: "Negocio local · Área de Tampa",
    aboutKicker: "Nosotros",
    aboutTitle: "La limpieza es nuestro oficio. <em>Tu tranquilidad</em> es la meta.",
    aboutLead: "Smelling Clean es una empresa local de limpieza en el Área de Tampa, Florida. Cuidamos hogares y espacios comerciales con una promesa sencilla: dejar cada lugar impecable, fresco y listo para disfrutar.",
    f1t: "Atención al detalle", f1d: "Zócalos, manijas, esquinas e interruptores: los detalles hacen la diferencia.",
    f2t: "A tu horario", f2d: "Visitas únicas, semanales, quincenales o mensuales que se adaptan a tu rutina.",
    f3t: "Trato personal", f3d: "Hablas directamente con nosotros. Comunicación clara desde la cotización hasta la revisión final.",
    f4t: "Productos incluidos", f4d: "Llevamos nuestros propios productos y equipo, y nos adaptamos a tus preferencias si deseas que usemos productos específicos.",
    svcKicker: "Nuestros servicios",
    svcTitle: "Soluciones de limpieza para <em>cada espacio</em>",
    svcLead: "Desde tu sala hasta tu oficina, ofrecemos servicios pensados en lo que realmente necesitas.",
    popular: "Más solicitado", svcBook: "Solicitar este servicio",
    s1t: "Limpieza Estándar", s1d: "Limpieza de rutina de toda tu casa, para que cada espacio luzca fresco, ordenado y listo para disfrutar.",
    s1a: "Toda tu casa, espacio por espacio", s1b: "Visitas semanales, quincenales o mensuales", s1c: "Resultados consistentes en cada visita",
    s2t: "Limpieza Profunda", s2d: "Una renovación de arriba a abajo que llega donde la limpieza de rutina no alcanza.",
    s2a: "Zócalos y marcos de puertas", s2b: "Suciedad acumulada y sarro", s2c: "Interior de electrodomésticos (a solicitud)",
    s3t: "Limpieza Comercial", s3d: "Oficinas, tiendas y espacios de trabajo que causan una gran impresión.",
    s3a: "Oficinas y recepción", s3b: "Baños y áreas de descanso", s3c: "Horarios fuera de oficina",
    s4t: "Limpieza de Mudanza (Entrada y Salida)", s4d: "Entrega las llaves o instálate en tu nuevo hogar con cada rincón listo.",
    s4a: "Gabinetes y clósets", s4b: "Electrodomésticos por dentro y por fuera", s4c: "Listo para inspección",
    s5t: "Limpieza Post-Construcción", s5d: "Eliminamos polvo y residuos tras remodelaciones para que disfrutes el resultado.",
    s5a: "Eliminación de polvo fino", s5b: "Ventanas y accesorios", s5c: "Repaso final de detalles",
    s6t: "Limpieza de Airbnb", s6d: "Limpiezas rápidas y confiables entre reservas para que cada huésped llegue a un espacio impecable.",
    s6a: "Limpieza entre huéspedes", s6b: "Camas y ropa de cama", s6c: "Reposición de básicos",
    clKicker: "Qué incluye", clTitle: "Nuestra lista, espacio por espacio",
    tabKitchen: "Cocina", tabBath: "Baños", tabBed: "Habitaciones", tabLiving: "Áreas comunes",
    k1: "Encimeras y salpicaderos limpios y desinfectados", k2: "Fregadero y grifo pulidos", k3: "Estufa y exterior de electrodomésticos", k4: "Frentes y manijas de gabinetes", k5: "Microondas por dentro y por fuera", k6: "Pisos aspirados y trapeados",
    b1: "Inodoro limpio y desinfectado", b2: "Ducha, bañera y azulejos tallados", b3: "Espejos y vidrios sin marcas", b4: "Lavabo y accesorios brillantes", b5: "Papeleras vaciadas", b6: "Pisos lavados",
    r1: "Camas tendidas (cambio de sábanas a solicitud)", r2: "Muebles y repisas sin polvo", r3: "Espejos y vidrios limpios", r4: "Interruptores y manijas desinfectados", r5: "Ventiladores de techo sin polvo", r6: "Alfombras aspiradas, pisos trapeados",
    l1: "Superficies y decoración sin polvo", l2: "Tapicería aspirada", l3: "Zócalos limpios", l4: "Puertas de vidrio y pantallas limpias", l5: "Cojines acomodados", l6: "Pisos aspirados y trapeados",
    prKicker: "Cómo funciona", prTitle: "Un espacio limpio en <em>cuatro pasos</em>",
    p1t: "Contáctanos", p1d: "Llámanos, envíanos un mensaje de texto o llena el formulario. Respondemos rápido.",
    p2t: "Recibe tu cotización", p2d: "Cuéntanos sobre tu espacio y te enviamos un presupuesto claro y sin compromiso.",
    p3t: "Elige la fecha", p3d: "Escoge el día y la frecuencia que mejor te funcionen.",
    p4t: "Disfruta la frescura", p4d: "Llega a un espacio impecable que de verdad huele a limpio.",
    pfKicker: "Portafolio", pfTitle: "Resultados que <em>hablan por sí solos</em>",
    pfLead: "Hogares reales, limpiados por nuestro equipo. Cada espacio terminado con cuidado, orden y ese aroma fresco a limpio.",
    g1t: "Baño renovado", g1c: "Baños", g2t: "Sala y cocina abierta", g2c: "Áreas comunes", g3t: "Cuidado de alfombras", g3c: "Pisos",
    g4t: "Habitación", g4c: "Habitaciones", g5t: "Sala y cocina", g5c: "Áreas comunes",
    baKicker: "Los detalles", baTitle: "Se nota la diferencia",
    baText: "Líneas de aspirado parejas, superficies pulidas y cada rincón cuidado. Cada trabajo termina con una revisión final para que no se escape nada.",
    dt1: "Pisos aspirados y trapeados de borde a borde", dt2: "Superficies sin polvo y limpias", dt3: "Revisión final en cada visita",
    shotTag: "Aspirado impecable", baIg: "Más en Instagram",
    arKicker: "Zona de servicio", arTitle: "Con orgullo servimos al <em>Área de Tampa</em> y comunidades cercanas",
    pillTampa: "Área de Tampa", cLocationV: "Área de Tampa, Florida", footLoc: "Área de Tampa, FL",
    arLead: "¿No sabes si llegamos a tu zona? Escríbenos y con gusto te confirmamos.",
    faqKicker: "Preguntas frecuentes", faqTitle: "¿Preguntas? <em>Tenemos respuestas.</em>",
    faqLead: "Si no encuentras lo que buscas, contáctanos. Con gusto te ayudamos.", faqCall: "Llámanos",
    q1: "¿Necesito estar en casa durante la limpieza?", a1: "No necesariamente. Muchos clientes nos dan instrucciones de acceso. Coordinamos los detalles contigo con anticipación.",
    q2: "¿Llevan sus propios productos?", a2: "Sí, llegamos con nuestros productos y equipo de limpieza. Si prefieres productos específicos, solo avísanos.",
    q3: "¿Cómo se calcula el precio?", a3: "Depende del tamaño del espacio, el tipo de servicio y la frecuencia. Contáctanos para una cotización personalizada.",
    q4: "¿Limpian oficinas y negocios?", a4: "Sí. Ofrecemos limpieza comercial y podemos trabajar según el horario de tu negocio.",
    q5: "¿Cómo reservo?", a5: "Llámanos o escríbenos al (813) 808-7772, contáctanos por WhatsApp o usa el formulario de esta página.",
    ctKicker: "Contacto", ctTitle: "Hagamos que tu espacio <em>brille</em>",
    ctLead: "Cuéntanos qué necesitas y te responderemos con una cotización personalizada.",
    mapOpen: "Abrir en Google Maps",
    cPhone: "Teléfono", cEmail: "Correo", cLocation: "Ubicación",
    formTitle: "Solicita tu cotización gratis", formSub: "Sin compromiso · Cotización gratis",
    lName: "Nombre completo", lPhone: "Teléfono", lEmail: "Correo", lService: "Servicio", lMsg: "Cuéntanos sobre tu espacio",
    phName: "Tu nombre", phEmail: "tu@correo.com", phMsg: "Tamaño, número de habitaciones, fecha preferida...",
    optOther: "Otro",
    formError: "Por favor ingresa tu nombre y teléfono.",
    sendWa: "Enviar por WhatsApp", sendSms: "Enviar por SMS",
    footAbout: "Limpieza residencial y comercial en el Área de Tampa, Florida. Espacios frescos e impecables, en cada visita.",
    footNav: "Navegación", rights: "Todos los derechos reservados.", backTop: "Volver arriba",
    fab: "¿Necesitas cotización?"
  };

  var i18nEls = document.querySelectorAll("[data-i18n]");
  var phEls = document.querySelectorAll("[data-i18n-ph]");
  var original = new Map();
  var originalPh = new Map();
  i18nEls.forEach(function (el) { original.set(el, el.innerHTML); });
  phEls.forEach(function (el) { originalPh.set(el, el.getAttribute("placeholder")); });

  var lang = "en";
  var langLabel = document.getElementById("langLabel");

  function setLang(next) {
    lang = next;
    i18nEls.forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      el.innerHTML = next === "es" && ES[key] ? ES[key] : original.get(el);
    });
    phEls.forEach(function (el) {
      var key = el.getAttribute("data-i18n-ph");
      el.setAttribute("placeholder", next === "es" && ES[key] ? ES[key] : originalPh.get(el));
    });
    doc.setAttribute("lang", next);
    if (langLabel) langLabel.textContent = next === "es" ? "EN" : "ES";
    try { localStorage.setItem("sc-lang", next); } catch (e) {}
  }

  var saved = null;
  try { saved = localStorage.getItem("sc-lang"); } catch (e) {}
  if (saved === "es" || (!saved && /^es\b/i.test(navigator.language || ""))) setLang("es");

  var langToggle = document.getElementById("langToggle");
  if (langToggle) langToggle.addEventListener("click", function () { setLang(lang === "es" ? "en" : "es"); });

  /* ---------------- Mobile menu ---------------- */
  var menuToggle = document.getElementById("menuToggle");
  var nav = document.getElementById("nav");
  function closeMenu() {
    body.classList.remove("menu-open");
    if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
  }
  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      var open = body.classList.toggle("menu-open");
      menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  if (nav) nav.addEventListener("click", function (e) { if (e.target.closest("a")) closeMenu(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });
  document.addEventListener("click", function (e) {
    if (body.classList.contains("menu-open") && !e.target.closest("#nav") && !e.target.closest("#menuToggle")) closeMenu();
  });
  window.addEventListener("resize", function () { if (window.innerWidth > 980) closeMenu(); });

  /* ---------------- Scroll: header, progress, FAB ---------------- */
  var header = document.getElementById("header");
  var progress = document.querySelector(".scroll-progress");
  var fab = document.querySelector(".fab-wa");
  var ticking = false;
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    if (header) header.classList.toggle("scrolled", y > 20);
    if (progress) progress.style.transform = "scaleX(" + (max > 0 ? Math.min(y / max, 1) : 0) + ")";
    if (fab) fab.classList.toggle("show", y > 500);
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { window.requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });
  onScroll();

  /* ---------------- Active nav link ---------------- */
  var navLinks = document.querySelectorAll(".nav-link");
  var sectionMap = { inicio: "inicio", nosotros: "inicio", servicios: "servicios", proceso: "servicios", portafolio: "portafolio", zona: "portafolio", faq: "contacto", contacto: "contacto" };
  if ("IntersectionObserver" in window) {
    var secObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var target = sectionMap[entry.target.id];
        navLinks.forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + target); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(sectionMap).forEach(function (id) {
      var s = document.getElementById(id);
      if (s) secObserver.observe(s);
    });
  }

  /* ---------------- Reveal on scroll ---------------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var revObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var siblings = el.parentElement ? Array.prototype.filter.call(el.parentElement.children, function (c) { return c.classList.contains("reveal"); }) : [];
          var idx = Math.max(0, siblings.indexOf(el));
          el.style.transitionDelay = Math.min(idx * 80, 400) + "ms";
          el.classList.add("in");
          revObserver.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { revObserver.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------------- Checklist tabs ---------------- */
  var tabs = document.querySelectorAll(".tab");
  var panels = document.querySelectorAll(".tab-panel");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var name = tab.getAttribute("data-tab");
      tabs.forEach(function (t) {
        var on = t === tab;
        t.classList.toggle("active", on);
        t.setAttribute("aria-selected", on ? "true" : "false");
      });
      panels.forEach(function (p) { p.classList.toggle("active", p.getAttribute("data-panel") === name); });
    });
  });

  /* ---------------- Service links preselect form ---------------- */
  var serviceSelect = document.getElementById("serviceSelect");
  document.querySelectorAll("[data-service]").forEach(function (link) {
    link.addEventListener("click", function () {
      if (serviceSelect) serviceSelect.value = link.getAttribute("data-service");
    });
  });

  /* ---------------- Contact form -> WhatsApp / Email ---------------- */
  var form = document.getElementById("contactForm");
  var formError = document.getElementById("formError");
  if (form) {
    var sendMode = "whatsapp";
    form.querySelectorAll("[data-send]").forEach(function (b) {
      b.addEventListener("click", function () { sendMode = b.getAttribute("data-send"); });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.elements.name;
      var phone = form.elements.phone;
      var valid = true;
      [name, phone].forEach(function (f) {
        var ok = f.value.trim().length > 1;
        f.classList.toggle("invalid", !ok);
        if (!ok) valid = false;
      });
      if (formError) formError.hidden = valid;
      if (!valid) { (name.value.trim() ? phone : name).focus(); return; }

      var sel = form.elements.service;
      var serviceLabel = sel.options[sel.selectedIndex].text;
      var es = lang === "es";
      var lines = [
        es ? "Hola Smelling Clean, me gustaría solicitar una cotización." : "Hi Smelling Clean, I'd like to request a quote.",
        "",
        (es ? "Nombre: " : "Name: ") + name.value.trim(),
        (es ? "Teléfono: " : "Phone: ") + phone.value.trim()
      ];
      if (form.elements.email.value.trim()) lines.push((es ? "Correo: " : "Email: ") + form.elements.email.value.trim());
      lines.push((es ? "Servicio: " : "Service: ") + serviceLabel);
      if (form.elements.message.value.trim()) lines.push("", form.elements.message.value.trim());
      var text = lines.join("\n");

      if (sendMode === "sms") {
        // "?&body=" works on both iOS and Android messaging apps
        window.location.href = "sms:+" + PHONE + "?&body=" + encodeURIComponent(text);
      } else {
        window.open("https://wa.me/" + PHONE + "?text=" + encodeURIComponent(text), "_blank", "noopener");
      }
    });

    form.addEventListener("input", function (e) {
      if (e.target.classList.contains("invalid") && e.target.value.trim().length > 1) {
        e.target.classList.remove("invalid");
        if (formError && !form.querySelector(".invalid")) formError.hidden = true;
      }
    });
  }

  /* ---------------- Year ---------------- */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
