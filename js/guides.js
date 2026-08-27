document.addEventListener('DOMContentLoaded', () => {

  setTimeout(() => {

    const terminal = document.querySelector('.terminal-prompt');

    if (terminal) {
      terminal.textContent =
        'wbossw@guides:~$ WriteUps listos. Aprende éticamente.';
    }

  }, 1200);

  const chips = [
    ...document.querySelectorAll('.filters .chip')
  ];

  const cards = [
    ...document.querySelectorAll('.vid-card')
  ];

  const applyFilter = (filter) => {

    const targetTag = filter.toLowerCase();

    cards.forEach((card) => {

      const cardTags = (
        card.getAttribute('data-tags') || ''
      ).toLowerCase();

      const tags = cardTags
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean);

      const shouldShow =
        targetTag === 'todos' ||
        tags.includes(targetTag);

      card.classList.toggle(
        'hide',
        !shouldShow
      );

    });

  };

  chips.forEach((chip) => {

    chip.addEventListener('click', () => {

      chips.forEach((item) => {
        item.classList.remove('active');
      });

      chip.classList.add('active');

      applyFilter(
        chip.dataset.filter || 'Todos'
      );

    });


    chip.addEventListener('keydown', (event) => {

      if (
        event.key === 'Enter' ||
        event.key === ' '
      ) {

        event.preventDefault();

        chip.click();

      }

    });

  });

  applyFilter('Todos');

});