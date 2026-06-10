// Smooth scroll for in-page nav links
document.querySelectorAll('.hero-nav a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ── Light / dark theme toggle ──
const root = document.documentElement;
const toggleBtn = document.getElementById("theme-toggle");

function applyTheme(theme) {
  if (theme === "dark") {
    root.setAttribute("data-theme", "dark");
    toggleBtn.textContent = "☀️";
  } else {
    root.removeAttribute("data-theme");
    toggleBtn.textContent = "🌙";
  }
}

const saved = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(saved || (prefersDark ? "dark" : "light"));

toggleBtn.addEventListener("click", () => {
  const isDark = root.getAttribute("data-theme") === "dark";
  const next = isDark ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem("theme", next);
});
