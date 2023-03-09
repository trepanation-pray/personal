import 'focus-within-polyfill'
import 'focus-visible/dist/focus-visible.min.js';
import { fez } from '@trepanation-pray/fez';
fez({ offset: 100 });

// Randomise hero image and colour

function load(src) {
  return new Promise((resolve, reject) => {
      const image = new Image();
      image.addEventListener('load', resolve);
      image.addEventListener('error', reject);
      image.src = src;
  });
}

const image =  'assets/images/marble-ink-0' + (Math.floor(Math.random() * 5) + 1) + '.jpg';
load(image).then(() => {
  document.body.querySelector('.o-hero').style.backgroundImage = `url(${image})`;
  document.body.querySelector('.o-hero').classList.add('o-hero--' + (Math.floor(Math.random() * 5) + 1))
  document.body.querySelector('.o-hero').classList.add('is-loaded')
});



// Mobile navigation button

document.body.addEventListener('click', (event) => {

  if (!event.target.matches('.o-mobile-navigation-button')) return;
  event.preventDefault();
  event.target.classList.toggle('is-active');
  document.body.querySelector('.o-site-navigation').classList.toggle('is-active');
  document.body.querySelector('.o-site-header').classList.toggle('is-active');
  document.body.classList.toggle('menu-active');

}, false);

// Tabble elements in mobile navigation

const topNavList = document.body.querySelectorAll('.o-site-navigation a, .o-site-navigation button, .c-social-media a');

// Mobile menu button tabbing for active and non-active state of menu

document.body.addEventListener('keydown', (event) => {

  if (!event.target.matches('.o-mobile-navigation-button')) return;

  if ( event.key == 'Tab' && event.shiftKey) {

    if (event.target.classList.contains('is-active')) {
      event.preventDefault();
      topNavList[topNavList.length - 1].focus();

    } else {
      event.preventDefault();
      document.body.querySelector('.o-site-header .o-site-brand').focus();
    }

  } else if (event.key == 'Tab') {
    if (!event.target.classList.contains('is-active')) {
      event.preventDefault();
      document.body.querySelector('.o-main-content').focus();
    }
  }

}, false);

// Send tab focus from main content to menu button for mobile

document.body.addEventListener('keydown', (event) => {

  if (!event.target.matches('.o-main-content')) return;
  if(window.innerWidth < 992) {
    if ( event.key == 'Tab' && event.shiftKey ) {
      event.preventDefault();
      document.body.querySelector('.o-mobile-navigation-button').focus();
    }
    
  }

}, false);

// Trap tabbing in menu for mobile

topNavList[topNavList.length - 1].addEventListener('keydown', (event) => {
  if(window.innerWidth < 992) {
    if ( event.key == 'Tab' && event.shiftKey) {
  
      if (event.target.classList.contains('is-active')) {
        event.preventDefault();
        topNavList[topNavList.length - 2].focus();
      }
    } else if (event.key == 'Tab') {
      event.preventDefault();
      document.body.querySelector('.o-mobile-navigation-button').focus();
    }
  }

}, false);
