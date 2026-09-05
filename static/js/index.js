document.addEventListener("DOMContentLoaded", () => {
  const videos = Array.from(document.querySelectorAll("video"));

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.2 }
    );

    videos.forEach((video) => observer.observe(video));
  }
});
