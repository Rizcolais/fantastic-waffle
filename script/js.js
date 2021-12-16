function barreProgression() {
    var myBody = document.querySelector('body');
    var progressBar = document.querySelector('#read');
    var toScroll = (myBody.offsetHeight) - window.innerHeight;
    var scrolled = window.pageYOffset;
    progressBar.style.width=(scrolled/toScroll * 100)+'%'
}

window.addEventListener('scroll',barreProgression);