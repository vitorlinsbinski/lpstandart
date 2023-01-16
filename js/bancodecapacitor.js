const videoBancoCapacitoresPage = document.querySelector('#js-video-banco-capacitor');
const videoPopupBancoCapacitores = document.querySelector('#js-video-popup-capacitor');
const btnClosePopupCapacitores = document.querySelector('#js-close-video-capacitor');

function toggleCapacitorPopup() {
  videoPopupBancoCapacitores.classList.toggle('active');
  htmlDiv.classList.toggle('lock-scroll');
}

videoBancoCapacitoresPage.addEventListener('click', (e) => {
  e.preventDefault();
  toggleCapacitorPopup();

  document.addEventListener('mousedown', (e) => {
    if(e.target.contains(videoPopupBancoCapacitores.children[0])) {
      toggleCapacitorPopup();
      resetAllIframes();
    }
    
  });
})