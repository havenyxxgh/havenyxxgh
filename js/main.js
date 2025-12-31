/* ===============================
   HAVENYXX – INTERACTIONS ✨
   =============================== */

document.addEventListener("DOMContentLoaded", () => {
  console.log("HAVENYXX loaded 💙");

  // 🌟 Soft glow pulse on brand logo
  const logo = document.querySelector(".logo");
  if (logo) {
    setInterval(() => {
      logo.classList.toggle("pulse-glow");
    }, 2200);
  }

  // ✨ Stagger entry animations
  const animatedItems = document.querySelectorAll(
    ".animate-fade-up, .animate-slide-left, .animate-slide-right"
  );

  animatedItems.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.15}s`;
  });

  // 🧲 Button hover soundless feedback (visual only)
  const buttons = document.querySelectorAll(".primary-btn, .secondary-btn");
  buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
      btn.style.transform = "scale(1.04)";
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "scale(1)";
    });
  });
});
function resetView() {
  // Remove the hash from URL
  history.pushState("", document.title, window.location.pathname);
  
  // Smooth scroll to top
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
