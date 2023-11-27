document.addEventListener('DOMContentLoaded', function () {
    var options = {
        strings: ["Web Developer", "Full-stack Developer", "Front-end developer" ,  "Bilgisayar Mühendisi"],
        typeSpeed: 50,   // typing speed in milliseconds
        backSpeed: 30,    // backspacing speed in milliseconds
        startDelay: 500,  // delay before starting to type
        backDelay: 500,   // delay before starting to backspace
        loop: true        // loop the animation infinitely
    };

    var typed = new Typed('.text', options);
});
