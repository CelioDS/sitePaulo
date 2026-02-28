const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Abre/Fecha menu lateral
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Fecha o menu ao clicar em um link (âncora)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});