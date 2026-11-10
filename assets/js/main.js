/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- CLOSE MOBILE MENU ON LINK CLICK ----- */
document.querySelectorAll(".nav-menu a").forEach(function (link) {
  link.addEventListener("click", function () {
    var menuBtn = document.getElementById("myNavMenu");
    if (menuBtn.className.indexOf("responsive") !== -1) {
      menuBtn.className = "nav-menu";
    }
  });
});

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/* ----- LIGHTWEIGHT TYPING EFFECT ----- */
const typedText = document.querySelector(".typedText");
const phrases = ["QA Engineer", "Flutter Developer", "DevOps Enthusiast", "Gamer", "Problem Solver"];
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (typedText) {
  if (prefersReducedMotion) {
    typedText.textContent = phrases[0];
  } else {
    typedText.textContent = phrases[0];
    let phraseIndex = 0;
    let characterIndex = phrases[0].length;
    let deleting = true;
    const typeNext = () => {
      const phrase = phrases[phraseIndex];
      typedText.textContent = phrase.slice(0, characterIndex);
      if (!deleting && characterIndex < phrase.length) {
        characterIndex += 1;
        window.setTimeout(typeNext, 82);
      } else if (!deleting) {
        deleting = true;
        window.setTimeout(typeNext, 1500);
      } else if (characterIndex > 0) {
        characterIndex -= 1;
        window.setTimeout(typeNext, 38);
      } else {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        window.setTimeout(typeNext, 250);
      }
    };
    window.setTimeout(typeNext, 1800);
  }
}

/* ----- LIGHTWEIGHT, PROGRESSIVE SCROLL REVEALS ----- */
if (!prefersReducedMotion && "IntersectionObserver" in window) {
  const revealTargets = document.querySelectorAll(
    ".featured-name, .featured-text-info, .featured-text-btn, .social_icons, .featured-image, .project-card, .timeline-item, .edu-card, .top-header, .about-info, .contact-info, .skills-box, .form-control"
  );
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" });

  revealTargets.forEach((element) => {
    element.classList.add("reveal-ready");
    if (element.getBoundingClientRect().top < window.innerHeight) {
      element.classList.add("is-revealed");
    } else {
      revealObserver.observe(element);
    }
  });
}

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

/* ----- MODE CHECKBOX STATE ----- */
const modeSwitch = document.getElementById("mode-switch");
const themeLink = document.getElementById("theme-style");

function applyTheme(dark) {
  themeLink.href = dark ? "assets/css/dark-mode.css" : "assets/css/light-mode.css";
  modeSwitch.checked = dark;
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  try {
    localStorage.setItem("theme", dark ? "dark" : "light");
  } catch (e) {}
}

modeSwitch.addEventListener("change", function () {
  applyTheme(modeSwitch.checked);
});

/* ----- SET MODES USING USER PREFERENCE ----- */
function detectTheme() {
  let saved = null;
  try {
    saved = localStorage.getItem("theme");
  } catch (e) {}
  const prefersDark =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(saved ? saved === "dark" : prefersDark);
}

detectTheme();

/* ----- CONTACT FORM ----- */
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(contactForm);
    const subject = encodeURIComponent(
      "Portfolio contact from " + data.get("name")
    );
    const body = encodeURIComponent(
      data.get("message") +
        "\n\n- " +
        data.get("name") +
        " (" +
        data.get("email") +
        ")"
    );
    window.location.href =
      "mailto:sandeep.sadhasivam@gmail.com?subject=" + subject + "&body=" + body;
  });
}
