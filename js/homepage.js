const videoAbout = document.querySelector('.js-video-about');
const sectionAbout = document.querySelector('.s-about');
const btnCloseVideoAbout = document.querySelector('.js-close-video-about');

document.addEventListener('keydown', (e) => {
  if(e.key == 'Escape') {
    sectionAbout.classList.remove('institucional-opened');
    htmlDiv.classList.toggle('project-opened');
    htmlDiv.classList.remove('project-opened');
  }


});

videoAbout.addEventListener('click', (e) => {
  e.preventDefault();

  sectionAbout.classList.toggle('institucional-opened');
  htmlDiv.classList.toggle('project-opened');

  document.addEventListener('mousedown', (e) => {
    if(e.target.contains(sectionAbout.children[1].children[0])) {
      sectionAbout.classList.remove('institucional-opened');
      htmlDiv.classList.remove('project-opened');
      resetAllIframes();
    }
    
  });

});

btnCloseVideoAbout.addEventListener('click', () => {
  sectionAbout.classList.toggle('institucional-opened');
  resetAllIframes();
  htmlDiv.classList.remove('project-opened');
});