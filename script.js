// fixed nav bar height calculation
const navBarHeight = document.querySelector('nav').offsetHeight;
document.documentElement.style.setProperty('--scroll-padding', navBarHeight - 1 + 'px' );

// hamburger menu
const burgerMenu = {};

burgerMenu.hamburgerButton = document.querySelector('#hamburger');
burgerMenu.exitMenu = document.querySelector('#exitMenu');
burgerMenu.navList = document.querySelector('.menu');
burgerMenu.navLink = document.querySelectorAll('.navLink');
burgerMenu.navLinkContact = document.querySelector('.navLinkContact');

burgerMenu.hamburgerButton.addEventListener('click', (event) => {
    event.preventDefault();
    burgerMenu.navList.classList.toggle('hiddenAppear');
    burgerMenu.exitMenu.classList.toggle('fa-bars');
    burgerMenu.exitMenu.classList.toggle('fa-xmark');

})

burgerMenu.navLinkContact.addEventListener('click', (event) => {
    burgerMenu.navList.classList.toggle('hiddenAppear');
    burgerMenu.exitMenu.classList.toggle('fa-bars');
    burgerMenu.exitMenu.classList.toggle('fa-xmark');
})

burgerMenu.navLink.forEach(button => {
    button.addEventListener('click', (event) => {
        burgerMenu.navList.classList.toggle('hiddenAppear');
        burgerMenu.exitMenu.classList.toggle('fa-bars');
        burgerMenu.exitMenu.classList.toggle('fa-xmark');
    })
});
// End of hamburger menu

// input /textarea 
const connectForm = {};
connectForm.nameInput = document.querySelector('#name');
console.log(connectForm.nameInput);
connectForm.nameInput.value.trim();




// formspree form reset
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName('form')) {
        form.reset();
    }
}