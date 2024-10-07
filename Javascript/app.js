const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

darkModeToggle.addEventListener("change", function () {
  if (this.checked) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
});

// Optional: Check for existing dark mode preference on page load
const isDarkModePreferred =
  localStorage.getItem("prefers-dark-mode") === "true";
if (isDarkModePreferred) {
  darkModeToggle.checked = true;
  body.classList.add("dark-mode");
}
