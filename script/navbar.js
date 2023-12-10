window.onscroll = function() {navFunction()};

var navbar = document.getElementById('navbar');
var sticky = navbar.offsetTop;

function navFunction() {
    if (window.scrollY >= sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
} 