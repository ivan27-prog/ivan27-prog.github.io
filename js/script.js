// ================================================
// NAVBAR Cambio de fondo al hacer scroll
// ================================================
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('mainNavbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ================================================
// FORMULARIO DE CONTACTO — Validacion + Alert
// Bootstrap Validation: https://getbootstrap.com/docs/5.3/forms/validation/
// Bootstrap Alert: https://getbootstrap.com/docs/5.3/components/alerts/
// ================================================
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const alert = document.getElementById('formAlert');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validacion nativa de Bootstrap: agrega clase was-validated
        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }

        // Simular envio exitoso (aqui puedes conectar un backend o EmailJS)
        mostrarAlert('success', '? ¡Mensaje enviado! Te respondere pronto.');
        form.reset();
        form.classList.remove('was-validated');
    });

    function mostrarAlert(tipo, mensaje) {
        alert.className = 'alert d-block alert-' + tipo;
        alert.textContent = mensaje;

        // Ocultar automaticamente despues de 5 segundos
        setTimeout(() => {
            alert.classList.add('d-none');
            alert.className = 'alert d-none';
        }, 5000);
    }
});

// ================================================
// SCROLL SUAVE — Resaltar link activo del navbar
// ================================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 90;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('nav-link-active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('nav-link-active');
        }
    });
});
