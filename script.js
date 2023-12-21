// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// Anime.js animation for portfolio items
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseover', function () {
        anime({
            targets: this,
            scale: [1, 1.1],
            duration: 500,
            easing: 'easeInOutQuad'
        });
    });

    item.addEventListener('mouseout', function () {
        anime({
            targets: this,
            scale: [1.1, 1],
            duration: 500,
            easing: 'easeInOutQuad'
        });
    });
});




