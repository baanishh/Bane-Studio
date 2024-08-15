// preloader

window.addEventListener('load', function() {
    const loadingTexts = ["WEB APP", "ANIAMTION", "UI / UX", "SAS PRODUCTS","WEB PAGES","BRANDING","GSAP","BOOTSTRAP","FREELANCE","GET READY!"];
    let currentIndex = 0;
    const loadingTextElement = document.getElementById('loading-text');
    const logoImageElement = document.getElementById('logo-image');

    // Change text at specific intervals
    const textInterval = setInterval(function() {
        currentIndex++;
        if (currentIndex < loadingTexts.length) {
            loadingTextElement.textContent = loadingTexts[currentIndex];
        } else {
            clearInterval(textInterval);
            // After "GET READY!" is shown, hide the text and show the logo
            setTimeout(function() {
                loadingTextElement.style.display = 'none';
                logoImageElement.style.display = 'block';
            }, 500); // Adjust this delay if necessary
        }
    }, 150); // Change text every 150 milliseconds

    // Hide preloader and show content after the logo is displayed
    setTimeout(function() {
        document.getElementById('preloader').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 3250); // 3.25 seconds = time for all text changes, delay, and logo display
});



// SCROLL BAR DELAY

window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.style.overflow = 'auto'; // Show scrollbar after 6 seconds
    }, 6000);
});



// PROJECTS SCROLL ANIMATION
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.pro-img');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-stretch');
            } else {
                entry.target.classList.remove('animate-stretch');
            }
        });
    });

    images.forEach(image => {
        observer.observe(image);
    });
});





