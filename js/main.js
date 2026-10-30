const subjectGrid = document.getElementById("subjectGrid");
const searchInput = document.getElementById("subjectSearch");
const subjectCount = document.getElementById("subjectCount");
const emptyState = document.getElementById("emptyState");

function renderSubjects(query = "") {
  const normalizedQuery = query.trim().toLowerCase();

  const filtered = subjects.filter(subject => {
    const searchableCodes = subject.codes.join(" ").toLowerCase();
    return subject.name.toLowerCase().includes(normalizedQuery) ||
      searchableCodes.includes(normalizedQuery);
  });

  subjectGrid.innerHTML = filtered.map(subject => `
    <a class="subject-card" href="${subject.link}" aria-label="Open ${escapeHTML(subject.name)}">
      <span class="subject-icon ${subject.tone}" aria-hidden="true">${escapeHTML(subject.icon)}</span>
      <span class="subject-info">
        <h3>${escapeHTML(subject.name)}</h3>
        <span class="subject-code">
          Course code${subject.codes.length > 1 ? "s" : ""}: ${subject.codes.map(escapeHTML).join(" / ")}
        </span>
       
      
      <span class="card-arrow" aria-hidden="true">→</span>
    </a>
  `).join("");

  subjectCount.textContent = `${filtered.length} subject${filtered.length === 1 ? "" : "s"}`;
  emptyState.hidden = filtered.length > 0;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

searchInput.addEventListener("input", event => renderSubjects(event.target.value));

document.addEventListener("keydown", event => {
  if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus();
  }
});

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

renderSubjects();
// =========================
// DARK MODE TOGGLE
// =========================

const themeToggle = document.getElementById("themeToggle");

// Load saved theme
const savedTheme = localStorage.getItem("vit-theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
}

// Update button icon
function updateThemeButton() {
  const isDark = document.body.classList.contains("dark-mode");

  themeToggle.textContent = isDark ? "☀️" : "🌙";

  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light mode" : "Switch to dark mode"
  );
}

updateThemeButton();

// Toggle theme
themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");

  localStorage.setItem(
    "vit-theme",
    isDark ? "dark" : "light"
  );

  updateThemeButton();

});