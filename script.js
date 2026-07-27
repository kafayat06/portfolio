// Subtle reveal-on-scroll for sections. No effect if reduced motion is preferred.
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const sections = document.querySelectorAll('.section, .footer');
sections.forEach((el) => el.classList.add('reveal'));

if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  sections.forEach((el) => observer.observe(el));
} else {
  sections.forEach((el) => el.classList.add('is-visible'));
}
