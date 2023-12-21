// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// FadeIn animation for elements on scroll
document.addEventListener('DOMContentLoaded', () => {
    let elementsToAnimate = document.querySelectorAll('.container, .portfolio-item');

    const fadeIn = (element) => {
        anime({
            targets: element,
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 1000,
            easing: 'easeInOutQuad'
        });
    };

    const debounce = (func, wait = 20, immediate = true) => {
        let timeout;
        return function () {
            const context = this,
                args = arguments;
            const later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    const checkSlide = () => {
        elementsToAnimate.forEach(element => {
            const slideInAt = (window.scrollY + window.innerHeight) - element.clientHeight / 2;
            const elementBottom = element.offsetTop + element.clientHeight;
            const isHalfShown = slideInAt > element.offsetTop;
            const isNotScrolledPast = window.scrollY < elementBottom;

            if (isHalfShown && isNotScrolledPast) {
                fadeIn(element);
            }
        });
    };

    window.addEventListener('scroll', debounce(checkSlide));
});

// Anime.js animation for portfolio items
function animatePortfolioItem(item) {
    anime({
        targets: item,
        scale: [1, 1.1],
        duration: 500,
        easing: 'easeInOutQuad'
    });
}

