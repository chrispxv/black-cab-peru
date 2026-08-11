const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

function setMenuState(open) {
  mainNav.classList.toggle("open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
}

menuToggle.addEventListener("click", () => {
  setMenuState(!mainNav.classList.contains("open"));
});

document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => setMenuState(false));
});

document.addEventListener("click", event => {
  if (!mainNav.contains(event.target) && !menuToggle.contains(event.target)) {
    setMenuState(false);
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && mainNav.classList.contains("open")) {
    setMenuState(false);
    menuToggle.focus();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1020) setMenuState(false);
});

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach(element => revealObserver.observe(element));
} else {
  revealElements.forEach(element => element.classList.add("visible"));
}

const header = document.getElementById("siteHeader");
const backToTop = document.getElementById("backToTop");

function updateScrollState() {
  header.classList.toggle("scrolled", window.scrollY > 20);
  backToTop.classList.toggle("visible", window.scrollY > 650);
}

window.addEventListener("scroll", updateScrollState, { passive: true });
updateScrollState();

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".main-nav a")];

if ("IntersectionObserver" in window) {
  const activeNavObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          const isActive = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("active", isActive);

          if (isActive) {
            link.setAttribute("aria-current", "location");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      }
    });
  }, {
    rootMargin: "-35% 0px -55% 0px",
    threshold: 0
  });

  sections.forEach(section => activeNavObserver.observe(section));
}

document.getElementById("currentYear").textContent = new Date().getFullYear();
