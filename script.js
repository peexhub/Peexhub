(() => {
  const body = document.body;
  const switcher = document.querySelector(".language-switch");
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  let language = "en";

  function setLanguage(next) {
    language = next;
    const rtl = language === "fa";
    body.dir = rtl ? "rtl" : "ltr";
    document.documentElement.lang = rtl ? "fa" : "en";
    document.title = rtl
      ? "PeexHub — ایده‌ها را به واقعیت تبدیل می‌کنیم"
      : "PeexHub — Turning Ideas into Reality";
    document.querySelectorAll("[data-en][data-fa]").forEach((element) => {
      element.innerHTML = element.dataset[rtl ? "fa" : "en"];
    });
    if (switcher) switcher.textContent = rtl ? "EN / فا" : "فا / EN";
  }

  switcher?.addEventListener("click", () => setLanguage(language === "en" ? "fa" : "en"));

  menuButton?.addEventListener("click", () => {
    const opened = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(opened));
    menuButton.setAttribute("aria-label", opened ? "Close menu" : "Open menu");
  });

  nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton?.setAttribute("aria-expanded", "false");
    });
  });

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const form = document.querySelector(".contact-form");
  form?.addEventListener("submit", (event) => {
    const submit = form.querySelector('button[type="submit"]');
    if (submit) {
      submit.disabled = true;
      submit.style.opacity = ".75";
      const label = submit.querySelector("span");
      if (label) label.textContent = language === "fa" ? "در حال ارسال..." : "Sending...";
    }
  });
})();