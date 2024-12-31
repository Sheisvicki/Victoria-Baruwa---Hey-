// JavaScript to handle scroll event and change background color
document.addEventListener('scroll', function () {
    const landingPage = document.querySelector('.landing-page');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        landingPage.style.backgroundColor = '#000';
        landingPage.style.color = '#fff';
    } else {
        landingPage.style.backgroundColor = '#fff';
        landingPage.style.color = '#000';
    }
});

//JavaScript for typewriter effect
document.addEventListener("DOMContentLoaded", function() {
    const lines = document.querySelectorAll('.line');
    let delay = 0;

    lines.forEach((line, index) => {
        setTimeout(() => {
            // Add the typing effect to each line
            line.style.opacity = 1;
            line.style.width = '100%';
            line.style.animation = `typewriter 3s steps(30) forwards`;

            // Add cursor to the last line
            if (index === lines.length - 1) {
                line.classList.add('cursor');
            }
        }, delay);
        delay += 4000; // Add delay between each line
    });
});

