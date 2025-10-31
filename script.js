ocument.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
    const btnReset = document.getElementById('btn-reset');
  
  
    btnReset.addEventListener('click', function() {
      form.reset();
      status.textContent = '';
    });
  
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const nombre = form.nombre.value.trim();
      const email = form.email.value.trim();
      const mensaje = form.mensaje.value.trim();
  
  
      if (!nombre || !email || !mensaje) {
        status.textContent = 'Por favor completá todos los campos.';
        status.style.color = 'crimson';
        return;
      }
  
  
      status.style.color = 'green';
      status.textContent = 'Enviando...';
      setTimeout(() => {
        status.textContent = 'Mensaje enviado correctamente.';
        form.reset();
      }, 1000);
    });
  });
  