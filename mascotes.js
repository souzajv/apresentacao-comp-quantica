/* Player e dados locais: sem CDN, fetch ou WASM para apresentar. */
(() => {
  if (!window.lottie || !window.CIRCUIT_CATS) return;
  const players = [...document.querySelectorAll('[data-cat]')].map(container => {
    const slide = container.closest('.slide');
    const animation = lottie.loadAnimation({container, renderer:'svg', loop:true, autoplay:true,
      animationData:JSON.parse(JSON.stringify(window.CIRCUIT_CATS[container.dataset.cat])),
      rendererSettings:{preserveAspectRatio:'xMidYMid meet',progressiveLoad:false}});
    const update = () => {
      if (slide.classList.contains('is-active') && !document.hidden) animation.play();
      else animation.pause();
    };
    animation.addEventListener('DOMLoaded', update);
    new MutationObserver(update).observe(slide,{attributes:true,attributeFilter:['class']});
    document.addEventListener('visibilitychange', update);
    return {animation, update, pose:container.dataset.cat};
  });
  window.circuitMascots = players;
})();
