(function () {
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }

  window.__toggleTheme = function () {
    var current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    var next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  };
})();
