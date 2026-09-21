(() => {
  const mount = () => {
    if (document.getElementById('promo-video-section')) return;
    const root = document.getElementById('root');
    if (!root) return;
    const main = root.querySelector('main');
    if (!main) return;
    const section = document.createElement('section');
    section.id = 'promo-video-section';
    section.setAttribute('aria-labelledby', 'promo-video-heading');
    section.innerHTML = `
      <h2 id="promo-video-heading" class="promo-video-heading">Featured Promo</h2>
      <div class="promo-video-frame">
        <video controls playsinline preload="metadata">
          <source src="/manus-storage/promo-video_68355625.mp4" type="video/mp4">
          Your browser does not support HTML5 video.
        </video>
      </div>
    `;
    main.insertBefore(section, main.firstChild);
  };
  new MutationObserver(mount).observe(document.documentElement, { childList: true, subtree: true });
  mount();
})();
