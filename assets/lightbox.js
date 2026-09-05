(function () {
  function ensureOverlay() {
    var overlay = document.getElementById("lightbox-overlay");
    if (overlay) return overlay;

    overlay = document.createElement("div");
    overlay.id = "lightbox-overlay";
    overlay.className = "lightbox-overlay";

    var img = document.createElement("img");
    var closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.className = "lightbox-close";
    closeBtn.setAttribute("aria-label", "Fechar");
    closeBtn.textContent = "×";

    overlay.appendChild(img);
    overlay.appendChild(closeBtn);
    document.body.appendChild(overlay);

    overlay.addEventListener("click", function (e) {
      if (e.target === overlay || e.target === closeBtn) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });

    return overlay;
  }

  function open(src, alt) {
    var overlay = ensureOverlay();
    var img = overlay.querySelector("img");
    img.src = src;
    img.alt = alt || "";
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function close() {
    var overlay = document.getElementById("lightbox-overlay");
    if (!overlay) return;
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".gallery img, .shot-list img").forEach(function (img) {
      img.addEventListener("click", function () {
        open(img.getAttribute("src"), img.getAttribute("alt"));
      });
    });
  });
})();
