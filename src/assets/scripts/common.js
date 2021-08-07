// Randomise hero image and colour
document.body.querySelector('.o-hero').style.backgroundImage = 
'url("assets/images/marble-ink-0' + (Math.floor(Math.random() * 5) + 1) + '.jpg"';

document.body.querySelector('.o-hero').classList.add('o-hero--'+ (Math.floor(Math.random() * 5) + 1))


// Mobile navigation

document.body.addEventListener('click', function (event) {

  if (!event.target.matches('.o-mobile-navigation-button')) return;
  event.preventDefault();
  event.target.classList.toggle('is-active');
  document.body.querySelector('.o-site-navigation').classList.toggle('is-active');
  document.body.querySelector('.o-site-header').classList.toggle('is-active');
  document.body.classList.toggle('menu-active');

}, false);

const topNavList = document.body.querySelectorAll('.o-site-navigation a, .o-site-navigation button');

// Mobile menu button tabbing for active and non-active state of menu

document.body.addEventListener('keydown', function (event) {

  if (!event.target.matches('.o-mobile-navigation-button')) return;

  if (event.shiftKey && event.keyCode == 9) {

    if (event.target.classList.contains('is-active')) {
      event.preventDefault();
      topNavList[topNavList.length - 1].focus();

    } else {
      event.preventDefault();
      document.body.querySelector('.o-site-header .o-site-brand').focus();
    }

  } else if (event.keyCode == 9) {
    if (!event.target.classList.contains('is-active')) {
      event.preventDefault();
      document.body.querySelector('.o-main-content').focus();
    }
  }

}, false);

// Send tab focus from main content to menu button

document.body.addEventListener('keydown', function (event) {

  if (!event.target.matches('.o-main-content')) return;

  if (event.shiftKey && event.keyCode == 9) {
    event.preventDefault();
    document.body.querySelector('.o-mobile-navigation-button').focus();
  }

}, false);

// Trap tabbing in menu


topNavList[topNavList.length - 1].addEventListener('keydown', function (event) {

  if (event.shiftKey && event.keyCode == 9) {

    if (event.target.classList.contains('is-active')) {
      event.preventDefault();
      topNavList[topNavList.length - 2].focus();
    }
  } else if (event.keyCode == 9) {
    event.preventDefault();
    document.body.querySelector('.o-mobile-navigation-button').focus();
  }

}, false);
