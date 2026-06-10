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

function getStoredTheme() {
  try {
    return localStorage.getItem("theme");
  } catch (e) {
    return null;
  }
}

function storeTheme(theme) {
  try {
    localStorage.setItem("theme", theme);
  } catch (e) {
    // localStorage unavailable (e.g. file:// origin) — ignore
  }
}

function applyTheme(theme) {
  if (theme === "dark") {
    root.setAttribute("data-theme", "dark");
    if (toggleBtn) toggleBtn.textContent = "☀️";
  } else {
    root.removeAttribute("data-theme");
    if (toggleBtn) toggleBtn.textContent = "🌙";
  }
}

const saved = getStoredTheme();
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(saved || (prefersDark ? "dark" : "light"));

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const isDark = root.getAttribute("data-theme") === "dark";
    const next = isDark ? "light" : "dark";
    applyTheme(next);
    storeTheme(next);
  });
}
