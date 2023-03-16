// fixed nav bar height calculation
const navBarHeight = document.querySelector('nav').offsetHeight;
document.documentElement.style.setProperty('--scroll-padding', navBarHeight - 1 + 'px' );

// hamburger menu
const hamburgerButton = document.querySelector('#hamburger');
const navList = document.querySelector('.menu');
const navLink = document.querySelectorAll('.navLink');
const navLinkContact = document.querySelector('.navLinkContact');

hamburgerButton.addEventListener('click', (event) => {
    event.preventDefault();
    navList.classList.toggle('hiddenAppear');
})

navLinkContact.addEventListener('click', (event) => {
    navList.classList.toggle('hiddenAppear');
})

navLink.forEach(button => {
    button.addEventListener('click', (event) => {
        navList.classList.toggle('hiddenAppear');
    })
});

// formspree form reset
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName('form')) {
        form.reset();
    }
}