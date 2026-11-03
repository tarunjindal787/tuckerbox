(function () {
  "use strict";

  // ---- Mobile nav toggle ----
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  if (header && toggle) {
    toggle.addEventListener("click", function () {
      var isOpen = header.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    header.querySelectorAll(".nav__links a").forEach(function (link) {
      link.addEventListener("click", function () {
        header.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---- Scroll reveal (one authored moment; skipped entirely for reduced motion) ----
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && !prefersReducedMotion && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  // ---- Accessible lightbox for the gallery ----
  var lightbox = document.querySelector("[data-lightbox]");
  if (!lightbox) return;

  var figure = lightbox.querySelector("[data-lightbox-figure]");
  var caption = lightbox.querySelector("[data-lightbox-caption]");
  var closeBtn = lightbox.querySelector("[data-lightbox-close]");
  var prevBtn = lightbox.querySelector("[data-lightbox-prev]");
  var nextBtn = lightbox.querySelector("[data-lightbox-next]");
  var triggers = Array.prototype.slice.call(document.querySelectorAll("[data-gallery-item]"));
  var currentIndex = -1;
  var lastFocused = null;

  function renderSlide(index) {
    var trigger = triggers[index];
    if (!trigger) return;
    var label = trigger.getAttribute("data-caption") || "";
    figure.innerHTML = trigger.querySelector(".photo-placeholder").outerHTML;
    caption.textContent = label;
  }

  function openLightbox(index) {
    currentIndex = index;
    lastFocused = document.activeElement;
    renderSlide(currentIndex);
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    closeBtn.focus();
    document.addEventListener("keydown", onKeydown);
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
    document.removeEventListener("keydown", onKeydown);
    if (lastFocused) lastFocused.focus();
  }

  function step(delta) {
    if (!triggers.length) return;
    currentIndex = (currentIndex + delta + triggers.length) % triggers.length;
    renderSlide(currentIndex);
  }

  function onKeydown(event) {
    if (event.key === "Escape") { closeLightbox(); return; }
    if (event.key === "ArrowRight") { step(1); return; }
    if (event.key === "ArrowLeft") { step(-1); return; }
    if (event.key === "Tab") {
      var focusables = [closeBtn, prevBtn, nextBtn].filter(Boolean);
      var first = focusables[0];
      var last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  }

  triggers.forEach(function (trigger, index) {
    trigger.addEventListener("click", function () { openLightbox(index); });
  });
  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (prevBtn) prevBtn.addEventListener("click", function () { step(-1); });
  if (nextBtn) nextBtn.addEventListener("click", function () { step(1); });
  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) closeLightbox();
  });
})();
