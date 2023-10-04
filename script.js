const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
});


window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const landingPage = document.getElementById('landing-page');

    loadingScreen.style.display = 'none';

    landingPage.style.display = 'block';
});
