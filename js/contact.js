document.addEventListener('DOMContentLoaded', () => {

  setTimeout(() => {

    const terminal = document.querySelector('.terminal-prompt');

    if (terminal) {
      terminal.textContent = 'wbossw@contact:~$ Esperando tu señal…';
    }

  }, 1000);

  const copyButton = document.getElementById('copyMail');
  const mailLink = document.getElementById('mailLink');

  if (copyButton && mailLink) {

    copyButton.addEventListener('click', async () => {

      const email = mailLink.textContent.trim();

      try {

        await navigator.clipboard.writeText(email);

        copyButton.innerHTML =
          '<i class="fas fa-check"></i> Copiado';

        setTimeout(() => {

          copyButton.innerHTML =
            '<i class="fas fa-copy"></i> Copiar';

        }, 1500);

      } catch (error) {

        console.error(
          'Error al copiar el email:',
          error
        );

      }

    });

  }

});