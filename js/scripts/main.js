AOS.init();

var swiperHero = new Swiper(".slide-principal", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    effect: 'fade',
    autoplay: {
        delay: 5500,
        disableOnInteraction: false
    }, 
});

var swiperServices = new Swiper(".slide-services", {
  slidesPerView: 3,
  spaceBetween: 32,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 6000,
    disableOnInteraction: true
  }, 
  breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 50
      },
      400: {
        slidesPerView: 1.2,
        spaceBetween: 32
      },
      460: {
        slidesPerView: 1.44,
        spaceBetween: 70
      },
      510: {
        slidesPerView: 1.48,
        spaceBetween: 32
      },
      550: {
        slidesPerView: 1.58,
        spaceBetween: 32
      },
      590: {
        slidesPerView: 1.68,
        spaceBetween: 32
      },
      620: {
        slidesPerView: 1.7,
        spaceBetween: 32
      },
      670: {
        slidesPerView: 1.5,
        spaceBetween: 32
      },
      760: {
        slidesPerView: 1.7,
        spaceBetween: 32, 
      },
      800: {
        slidesPerView: 1.8,
        spaceBetween: 32,
      },
      950: {
        slidesPerView: 2.1,
        spaceBetween: 32,
      },
      991: {
        slidesPerView: 2.2,
        spaceBetween: 32,
      },
      1110: {
        slidesPerView: 2.5,
        spaceBetween: 32,
      },
      1150: {
        slidesPerView: 2.55,
        spaceBetween: 32,
      },
      1220: {
        slidesPerView: 2.8,
        spaceBetween: 32,
      },
      1500: {
        slidesPerView: 3,
        spaceBetween: 32,
      }
  },
});

var swiperProjects = new Swiper(".slide-projects", {
  slidesPerView: 3,
  spaceBetween: 32,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: true
  }, 
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 50
    },
    400: {
      slidesPerView: 1.2,
      spaceBetween: 32
    },
    460: {
      slidesPerView: 1.2,
      spaceBetween: 32
    },
    510: {
      slidesPerView: 1.47,
      spaceBetween: 32
    },
    550: {
      slidesPerView: 1.58,
      spaceBetween: 32
    },
    590: {
      slidesPerView: 1.68,
      spaceBetween: 32
    },
    620: {
      slidesPerView: 1.5,
      spaceBetween: 32
    },
    670: {
      slidesPerView: 1.5,
      spaceBetween: 32
    },
    760: {
      slidesPerView: 1.7,
      spaceBetween: 32, 
    },
    800: {
      slidesPerView: 1.8,
      spaceBetween: 32,
    },

    950: {
      slidesPerView: 2.1,
      spaceBetween: 32,
    },
    991: {
      slidesPerView: 2.5,
      spaceBetween: 32,
    },
    1220: {
      slidesPerView: 2.8,
      spaceBetween: 32,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 32,
    }
},
});

var swiperDepoimentos = new Swiper(".slide-depoimentos", {
  slidesPerView: 2,
  spaceBetween: 30, 
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    780: {
      slidesPerView: 2,
      spaceBetween: 30, 
    },
    300: {
      slidesPerView: 1,
      spaceBetween: 30,   
    },
  },

  // autoplay: {
  //   delay: 3500,
  //   disableOnInteraction: true
  // }, 
});


var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const accordionHeader = document.querySelectorAll('#js-accordion-header');
const accordionItem = document.querySelectorAll('#js-accordion-item');

const arrowDownService = document.querySelector('.arrow-down-service');

const btnHamburger = document.querySelectorAll('.btn-hamburger');

const htmlDiv = document.documentElement;

const projectDiv = document.querySelectorAll('.js-link-project');
const projectsPopup = document.querySelectorAll('.js-project-popup')
const btnCloseProject = document.querySelectorAll('.js-close-project');

const depoimentoCard = document.querySelectorAll('.depoimento-video');
const depoimentoPopup = document.querySelectorAll('.js-depoimento-popup');
const btnCloseDepoimento = document.querySelectorAll('.js-close-depoimento');

const linksSectionFooter = document.querySelectorAll('.js-nav-footer li a');

const dropdownMenu = document.querySelector('.js-dropdown');
const serviceMenuItem = document.querySelector('.js-service-menu-item');
const allMenuItems = document.querySelectorAll('.js-menu-item');

const allIframes2 = document.querySelectorAll('iframe');

const buttonOrcamento = document.querySelectorAll('#js-redirect-to-form');

const alertMessage = document.querySelector('.alertMessage');

const videosSolarPage = document.querySelectorAll('#js-video-solar');
const videosPopupSolar = document.querySelectorAll('#js-video-popup-solar');
const btnClosePopupSolar = document.querySelectorAll('#js-close-video-solar');


// function toggleCapacitorPopup() {
//   videoPopupBancoCapacitores.classList.toggle('active');
//   htmlDiv.classList.toggle('lock-scroll');
// }

// videoBancoCapacitoresPage.addEventListener('click', (e) => {
//   e.preventDefault();
//   toggleCapacitorPopup();

//   document.addEventListener('mousedown', (e) => {
//     if(e.target.contains(videoPopupBancoCapacitores.children[0])) {
//       toggleCapacitorPopup();
//       resetAllIframes();
//     }
    
//   });
// })

const allIframes = document.querySelectorAll('iframe');

function resetAllIframes() {
    allIframes.forEach(iframe => {
        iframe.setAttribute('src', iframe.getAttribute('src'));
    });
};

function toggleVideoSolarPopup(index) {
  videosPopupSolar[index].classList.toggle('active');
  htmlDiv.classList.toggle('lock-scroll');
  
}

videosSolarPage.forEach((video, index) => {
  video.addEventListener('click', (e) => {
    e.preventDefault();
    toggleVideoSolarPopup(index);

    document.addEventListener('mousedown', (e) => {
      if(e.target.contains(videosPopupSolar[index].children[0])) {
        toggleVideoSolarPopup(index);
        resetAllIframes();
      }
      
    });
  })
});

btnClosePopupSolar.forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleVideoSolarPopup(index);
  })
})

function valida() {
        
  if(grecaptcha.getResponse() == "") {
      
      alertMessage.classList.add('active');
      return false;
  } else {
      alertMessage.classList.remove('active');
      return true;
  }
};


accordionHeader.forEach((accordion) => {
  accordion.addEventListener('click', (e) => {
    e.preventDefault();

    const accordionToBeClosed = Array.from(accordionHeader)
      .filter((acc) => acc != e.target)
      .find((acc) => acc.parentElement.classList.contains('active'))

    if(accordionToBeClosed) {
      accordionToBeClosed.parentElement.classList.remove('active');
    }

    accordion.parentElement.classList.toggle('active');
    arrowDownService.classList.toggle('active');
  })
})

// accordionHeader.addEventListener('click', (e) => {
//   e.preventDefault(); 
//   accordionItem.classList.toggle('active');
//   arrowDownService.classList.toggle('active');
// });


btnHamburger.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    htmlDiv.classList.toggle('active');
    
  });
});

projectDiv.forEach((project, index) => {
  project.addEventListener('click', (e) => {
    e.preventDefault();

    projectsPopup[index].classList.toggle('active');
    htmlDiv.classList.toggle('project-opened');
  });

  document.addEventListener('mousedown', (e) => {
    if(e.target.contains(projectsPopup[index].children[0])) {
      projectsPopup[index].classList.remove('active');
      htmlDiv.classList.remove('project-opened');
    }
    
  });

});

btnCloseProject.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.parentElement.classList.toggle('active');
    htmlDiv.classList.remove('project-opened');
  });
});

document.addEventListener('keydown', (e) => {
  if(e.key == 'Escape') {
    projectsPopup.forEach((popup) => {
      popup.classList.remove('active');
    });




    htmlDiv.classList.remove('project-opened');

    depoimentoPopup.forEach((popup) => {
      popup.classList.remove('active');
      htmlDiv.classList.remove('project-opened');
      resetAllIframes();
    })

    videosPopupSolar.forEach((video) => {
      console.log(video)
      video.classList.remove('active');
      htmlDiv.classList.remove('lock-scroll');
      resetAllIframes()
    });


  };
});

depoimentoCard.forEach((card,index) => {
  card.addEventListener('click', (e) => {
    e.preventDefault();
  
    depoimentoPopup[index].classList.toggle('active');
    htmlDiv.classList.toggle('project-opened');

    document.addEventListener('mousedown', (e) => {
      if(e.target.contains(depoimentoPopup[index].children[0])) {
        depoimentoPopup[index].classList.remove('active');
        htmlDiv.classList.remove('project-opened');
        resetAllIframes();
      }
      
    });
  });
});

btnCloseDepoimento.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.parentElement.classList.toggle('active');
    htmlDiv.classList.remove('project-opened');
    resetAllIframes();
  });
});



function scrollToSection(e) {
  e.preventDefault();
  const href = e.currentTarget.getAttribute('href');
  
  const section = document.querySelector(href);

  const initPosition = section.offsetTop;

  window.scrollTo({
    top: initPosition - 105,
    behavior: 'smooth'
  });
};

buttonOrcamento.forEach((btn) => {
  btn.addEventListener('click', scrollToSection);
})

linksSectionFooter.forEach(link => {
  link.addEventListener('click', scrollToSection);
});

serviceMenuItem.addEventListener('click', (e) => {
  e.preventDefault();

  e.target.classList.toggle('active');
  e.target.parentElement.classList.toggle('active');

  htmlDiv.classList.toggle('dropdown-active');

  dropdownMenu.addEventListener('mouseleave', () => {
    htmlDiv.classList.remove('dropdown-active');
    e.target.classList.remove('active');
    e.target.parentElement.classList.remove('active');
  });

});

