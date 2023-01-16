const iconPlayAboutPage = document.querySelector('#js-icon-play');
const mainAboutPage = document.querySelector('.main-about-page');
const btnCloseVideoInstitucional = document.querySelector('.js-close-video-institucional');


iconPlayAboutPage.addEventListener('click', (e) => {
  e.preventDefault();
  
  mainAboutPage.classList.toggle('institucional-opened');
  htmlDiv.classList.toggle('project-opened');


});

document.addEventListener('mousedown', (e) => {
    if(e.target.contains(mainAboutPage.children[1].children[0])) {
      mainAboutPage.classList.remove('institucional-opened');
      htmlDiv.classList.remove('project-opened');
      resetAllIframes()
    }
    
});

btnCloseVideoInstitucional.addEventListener('click', () => {
  mainAboutPage.classList.toggle('institucional-opened');
  resetAllIframes()
  htmlDiv.classList.remove('project-opened');
});

document.addEventListener('keydown', (e) => {
    
    if(e.key == 'Escape') {
      htmlDiv.classList.remove('project-opened');
      mainAboutPage.classList.remove('institucional-opened');
      resetAllIframes()
    };
  });