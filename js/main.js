(() => {
  'use strict';

  const canvas = document.getElementById('matrix');

  if (!canvas) {
    return;
  }

  const ctx = canvas.getContext('2d');

  if (!ctx) {
    return;
  }

  const letters = '01';
  const fontSize = 16;

  let columns = 0;
  let drops = [];
  let animationId = null;
  let isRunning = false;

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    columns = Math.floor(canvas.width / fontSize);

    const newDrops = Array(columns).fill(1);

    for (let i = 0; i < Math.min(drops.length, columns); i++) {
      newDrops[i] = drops[i];
    }

    drops = newDrops;
  };

  const draw = () => {
    if (!isRunning) {
      return;
    }

    /*
     * Same fade and speed configuration as index.html.
     */
    ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
    ctx.font = `${fontSize}px Share Tech Mono`;

    for (let i = 0; i < drops.length; i++) {
      const text = letters[
        Math.floor(Math.random() * letters.length)
      ];

      ctx.fillText(
        text,
        i * fontSize,
        drops[i] * fontSize
      );

      if (
        drops[i] * fontSize > canvas.height &&
        Math.random() > 0.975
      ) {
        drops[i] = 0;
      }

      drops[i]++;
    }

    animationId = requestAnimationFrame(draw);
  };

  const start = () => {
    if (isRunning) {
      return;
    }

    isRunning = true;
    draw();
  };

  const stop = () => {
    isRunning = false;

    if (animationId !== null) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
  };

  resize();

  window.addEventListener('resize', resize);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stop();
    } else {
      start();
    }
  });

  start();

})();

document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('[data-typing]').forEach((element) => {

    const text = element.getAttribute('data-typing') || '';

    let index = 0;

    element.textContent = '';

    const interval = setInterval(() => {

      element.textContent += text[index];

      index++;

      if (index >= text.length) {
        clearInterval(interval);
      }

    }, 18);

  });

});
