// fixed nav bar height calculation
const navBarHeight = document.querySelector('nav').offsetHeight;
document.documentElement.style.setProperty('--scroll-padding', navBarHeight - 1 + 'px' )