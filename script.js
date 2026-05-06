const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('.container');
const themeBtn = document.getElementById('theme-btn');

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
