const hamburger = document.querySelector('.hamburger');
const adaptiveMenu = document.querySelector('.nav-hamburger');

function toggleMenu() {
  hamburger.classList.toggle('open');
  adaptiveMenu.classList.toggle('open');

}
hamburger.addEventListener('click', toggleMenu);

const portfolioBtn = document.querySelector('.portfolio-btn');
const portfolioImages = document.querySelectorAll('.portfolio-image');
function changeImage(event){
    if(event.target.claslist.contains('portfolio-btn'){
        portfolioImages.forEach((img, index) => img.src = `../assets/img/winter/${index+1}.jpg`)
    })
}
portfolioImages.forEach((img, index) => img.src = `../assets/img/winter/${index+1}.jpg`)
