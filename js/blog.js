document.addEventListener('DOMContentLoaded', () => {

  setTimeout(() => {

    const terminal = document.querySelector('.terminal-prompt');

    if (terminal) {
      terminal.textContent =
        'wbossw@blog:~$ Contenido disponible para consulta.';
    }

  }, 1200);

  const input = document.getElementById('q');
  const chips = [...document.querySelectorAll('.chip')];
  const posts = [...document.querySelectorAll('.post')];
  const noResultsMsg = document.getElementById('no-results');

  let activeFilter = 'all';


  if (posts.length) {

    const postData = posts.map((post) => ({
      element: post,
      text: post.textContent.toLowerCase(),
      tags: [
        ...post.querySelectorAll('.pill, .badge')
      ].map((element) =>
        element.textContent.trim().toLowerCase()
      )
    }));


    const applyFilter = () => {

      const query = input
        ? input.value.trim().toLowerCase()
        : '';

      let visibleCount = 0;


      postData.forEach((post) => {

        const tagMatches =
          activeFilter === 'all' ||
          post.tags.includes(activeFilter.toLowerCase());

        const queryMatches =
          !query ||
          post.text.includes(query);


        if (tagMatches && queryMatches) {

          post.element.style.display = 'flex';

          visibleCount++;

        } else {

          post.element.style.display = 'none';

        }

      });


      if (noResultsMsg) {

        noResultsMsg.style.display =
          visibleCount === 0
            ? 'block'
            : 'none';

      }

    };

    if (input) {
      input.addEventListener('input', applyFilter);
    }

    chips.forEach((chip) => {

      chip.addEventListener('click', () => {

        chips.forEach((item) => {
          item.classList.remove('active');
        });

        chip.classList.add('active');

        activeFilter =
          chip.getAttribute('data-filter') || 'all';

        applyFilter();

      });

    });


    applyFilter();

  }

  const ticker = document.getElementById('ticker');

  if (ticker) {

    const phrases = [
      'wbossw • Bug Bounty Hunter • Ciberseguridad & Hacking Ético • Writeups HTB & HackMyVM • Certificaciones • Recursos'
    ];

    if (phrases.length > 1) {

      let index = 0;

      setInterval(() => {

        index = (index + 1) % phrases.length;

        ticker.textContent = phrases[index];

      }, 7000);

    }

  }

});