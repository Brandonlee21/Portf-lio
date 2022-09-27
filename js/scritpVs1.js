var header = document.getElementById('header')
var navigationHeader = document.getElementById('nagivation_header')
var content = document.getElementById('content')
var showSidebar = false

function toggleSidebar() {
  showSidebar = !showSidebar
  if (showSidebar) {
    navigationHeader.style.marginLeft = '-10vw'
    navigationHeader.style.animationName = 'showSidebar'
    content.style.filter = 'blur(2px)'
  } else {
    navigationHeader.style.marginLeft = '-100vw'
    navigationHeader.style.animationName = ''
    content.style.filter = ''
  }
}

function closeSidebar() {
  if (showSidebar) {
    toggleSidebar()
  }
}

window.addEventListener('resize', function (event) {
  if (window.innerWidth > 768 && showSidebar) {
    toggleSidebar()
  }
})

var swiper = new Swiper('.slide-content', {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    520: {
      slidesPerView: 2
    },
    950: {
      slidesPerView: 3
    }
  }
})
