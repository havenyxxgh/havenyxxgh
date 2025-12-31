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
.back-btn {
  margin-top: 30px;
  padding: 12px 24px;
  background: rgba(0, 170, 255, 0.15);
  border: 1px solid rgba(0, 170, 255, 0.4);
  color: #9adfff;
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(0, 170, 255, 0.3);
}

.back-btn:hover {
  background: rgba(0, 170, 255, 0.3);
  box-shadow: 0 0 25px rgba(0, 170, 255, 0.6);
  transform: translateY(-2px);
}
/* ❤️ WISHLIST */
function toggleWishlist(btn) {
  btn.classList.toggle("active");
  btn.textContent = btn.classList.contains("active") ? "💙" : "❤️";
}

/* 💬 WHATSAPP ORDER */
function orderNow(product, price) {
  const message = `Hi Havenyxx💕. I'd like to order ${product} for ₵${price}.`;
  const phone = "233242676006"; // replace with your business WhatsApp number
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
