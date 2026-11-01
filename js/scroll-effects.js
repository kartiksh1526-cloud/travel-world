(() => {
  const selector =
    "main > section, .destination-card, .package-card, .article-hero > div, .article-content > section, .article-side";
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const observer =
    !prefersReducedMotion && "IntersectionObserver" in window
      ? new IntersectionObserver(
          (entries, currentObserver) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.dataset.scrollReveal = "visible";
                currentObserver.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.12 },
        )
      : null;

  window.initScrollAnimations = (container = document) => {
    if (!observer) return;

    container.querySelectorAll(selector).forEach((element) => {
      if (element.dataset.scrollReveal) return;

      element.dataset.scrollReveal = "pending";
      observer.observe(element);
    });
  };
})();
