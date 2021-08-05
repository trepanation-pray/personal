document.body.addEventListener('click', function (event) {

  if (!event.target.matches('.o-mobile-navigation-button')) return;
  event.preventDefault();
  event.target.classList.toggle('is-active');
  document.body.querySelector('.o-site-navigation').classList.toggle('is-active');
  document.body.querySelector('.o-site-header').classList.toggle('is-active');
  document.body.classList.toggle('menu-active');

}, false);

document.body.querySelector('.o-hero').style.backgroundImage = 
'url("assets/images/marble-ink-0' + (Math.floor(Math.random() * 5) + 1) + '.jpg"';

document.body.querySelector('.o-hero').classList.add('o-hero--'+ (Math.floor(Math.random() * 5) + 1))