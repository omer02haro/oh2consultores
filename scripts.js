document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(contactForm);

        fetch('url_de_tu_servidor', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                return response.text();
            } else {
                throw new Error('Error en la solicitud.');
            }
        })
        .then(data => {
            console.log('Formulario enviado:', data);
        })
        .catch(error => {
            console.error('Error al enviar el formulario:', error.message);
        });
    });
});

/*INTERCAMBIO DE IMAGENES EN EL INICIO O EL CUERPO*/
document.addEventListener('DOMContentLoaded', function () {
    const hero = document.querySelector('.hero');
    const images = ['imagenes/hero-background.jpg', 'imagenes/hero-background-2.jpg', 'imagenes/hero-background-3.jpg', 'imagenes/hero-background-4.jpg'];
    let index = 0;

    function changeBackground() {
        hero.classList.add('fade-out'); // Agregar clase para desvanecer la imagen actual
        setTimeout(function () {
            hero.style.backgroundImage = `url('${images[index]}')`; // Cambiar la imagen de fondo
            index = (index + 1) % images.length; // Avanzar al siguiente índice de imagen
            hero.classList.remove('fade-out'); // Eliminar clase para mostrar la nueva imagen
        }, 40000000000000000000000000000000000000000000000000000000000000000000000000000000000000); // Tiempo de espera antes de cambiar la imagen (en milisegundos)
    }

    // Cambiar automáticamente las imágenes cada 2 segundos
    setInterval(changeBackground, 4000);
});







document.addEventListener('DOMContentLoaded', function () {
    const hero = document.querySelector('.tools');
    const images = ['imagenes/hero-background.jpg', 'imagenes/hero-background-2.jpg', 'imagenes/hero-background-3.jpg', 'imagenes/hero-background-4.jpg']; // Asegúrate de agregar tu quinta imagen aquí
    let index = 0;

    function changeBackground() {
        hero.classList.add('fade-out'); // Agregar clase para desvanecer la imagen actual
        setTimeout(function () {
            hero.style.backgroundImage = `url('${images[index]}')`; // Cambiar la imagen de fondo
            index = (index + 1) % images.length; // Avanzar al siguiente índice de imagen
            hero.classList.remove('fade-out'); // Eliminar clase para mostrar la nueva imagen
        }, 400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000); // Tiempo de espera antes de cambiar la imagen (en milisegundos)
    }

    // Cambiar automáticamente las imágenes cada 4 segundos
    setInterval(changeBackground, 4000);
});



















// Obtener la referencia al ícono de WhatsApp
const whatsappIcon = document.getElementById('whatsapp-icon');

// Agregar un event listener para detectar el desplazamiento de la página
window.addEventListener('scroll', function() {
    // Obtener la posición vertical actual de la página
    const scrollY = window.scrollY || window.pageYOffset;

    // Mostrar u ocultar el ícono de WhatsApp dependiendo del desplazamiento
    if (scrollY > 100) {
        whatsappIcon.style.display = 'block';
    } else {
        whatsappIcon.style.display = 'none';
    }
});


