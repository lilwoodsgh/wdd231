const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('main-nav');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Toggle mobile navigation
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// Toggle dark mode
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');

  themeToggle.innerHTML = isDark
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});

// Load dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}
