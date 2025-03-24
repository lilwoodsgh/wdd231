const menuToggle = document.getElementById('menu-toggle');
const navLinksContainer = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinksContainer.classList.toggle('visible');
});

// Highlight the active link
const navLinks = document.querySelectorAll('#nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(nav => nav.classList.remove('active'));
    link.classList.add('active');
  });
});