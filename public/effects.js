// Scroll Reveal
const revealElements = document.querySelectorAll("[data-reveal]");

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach(el => revealObserver.observe(el));

// Parallax
window.addEventListener("scroll", () => {
  document.querySelectorAll("[data-parallax]").forEach(el => {
    const speed = el.getAttribute("data-parallax");
    el.style.transform = `translateY(${window.scrollY * speed}px)`;
  });
});
