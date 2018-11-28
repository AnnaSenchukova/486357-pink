var pageNavigation = document.querySelector('.page-navigation');
var navigationButton = document.querySelector('.page-navigation__button');

pageNavigation.classList.remove('page-navigation--nojs');
pageNavigation.classList.add('page-navigation--closed');

navigationButton.addEventListener('click', function () {
  if (pageNavigation.classList.contains('page-navigation--closed')) {
    pageNavigation.classList.add('page-navigation--opened');
    pageNavigation.classList.remove('page-navigation--closed');
  } else {
    pageNavigation.classList.add('page-navigation--closed');
    pageNavigation.classList.remove('page-navigation--opened');
  }
});
