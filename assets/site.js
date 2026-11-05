(() => {
  'use strict';

  const profiles = {
    acompanamiento: {
      title: 'Necesita acompañamiento',
      description: 'Una situación que requiere comprender las dificultades para regularizar una deuda.',
      action: 'Evaluar alternativas de pago y adaptar la comunicación a esa situación.'
    },
    regularizacion: {
      title: 'Puede regularizar',
      description: 'Un perfil que puede avanzar con una propuesta de regularización adecuada a su situación.',
      action: 'Orientar una propuesta clara y definir el seguimiento para facilitar el próximo paso.'
    },
    verificacion: {
      title: 'Requiere verificar datos',
      description: 'Un caso con información que necesita revisión antes de definir una acción de cobranza.',
      action: 'Revisar y completar los datos disponibles antes de contactar a la persona.'
    }
  };

  const choices = document.querySelectorAll('[data-profile]');
  choices.forEach((button) => {
    button.addEventListener('click', () => {
      const profile = profiles[button.dataset.profile];
      if (!profile) return;
      choices.forEach((choice) => choice.setAttribute('aria-pressed', String(choice === button)));
      document.getElementById('profile-title').textContent = profile.title;
      document.getElementById('profile-description').textContent = profile.description;
      document.getElementById('profile-action').textContent = profile.action;
    });
  });

  // Sin JavaScript se mantiene el ejemplo inicial y el contenido de noscript.
  document.querySelector('.example-options').hidden = false;

  const copyButton = document.getElementById('copy-contact');
  if (navigator.clipboard && window.isSecureContext) {
    copyButton.hidden = false;
    copyButton.addEventListener('click', async () => {
      const status = document.getElementById('copy-status');
      try {
        await navigator.clipboard.writeText(document.getElementById('contact-number').textContent.trim());
        status.textContent = 'Número copiado. Podés guardarlo o compartirlo.';
      } catch {
        status.textContent = 'No se pudo copiar. Seleccioná el número que aparece arriba.';
      }
    });
  }
})();
