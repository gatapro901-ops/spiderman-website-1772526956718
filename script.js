console.log('Welcome to Spiderman Website');

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const spidermanImage = document.querySelector('.spiderman-image');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('shadow-md');
    } else {
      navbar.classList.remove('shadow-md');
    }
  });
});