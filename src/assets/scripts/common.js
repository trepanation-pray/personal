document.body.addEventListener('click', function (event) {

  if (!event.target.matches('.o-mobile-navigation-button')) return;
  event.preventDefault();
  event.target.classList.toggle('is-active');
  document.body.querySelector('.o-site-navigation').classList.toggle('is-active');
  document.body.querySelector('.o-site-header').classList.toggle('is-active');
  document.body.classList.toggle('menu-active');

}, false);