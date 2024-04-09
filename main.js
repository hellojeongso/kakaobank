function toggleMenu() {
  const icon = document.querySelector('.hamburger-btn i');
  const button = document.querySelector('.hamburger-btn');
  const menu = document.getElementById('mobileMenu');
  
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');

  button.classList.toggle('active');

  menu.classList.toggle('active');

  // mobile-menu의 활성/비활성 상태에 따라 submenu의 상태를 변경
  const subMenus = document.querySelectorAll('.sub-menu');
  subMenus.forEach(subMenu => {
    if (!menu.classList.contains('active')) {
      subMenu.classList.remove('active');
    }
  });
}

function toggleSubMenu(event) {
  const menuItem = event.currentTarget;
  const subMenu = menuItem.querySelector('.sub-menu');
  const icon = menuItem.querySelector('.expand-btn i');

  if (subMenu) {
    subMenu.classList.toggle('active');
    menuItem.classList.toggle('active');
    icon.classList.toggle('rotate'); // 화살표 아이콘의 클래스를 토글하여 뒤집기
  }
}

const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
  item.addEventListener('click', toggleSubMenu);
});


// function toggleMenu() {
//   var mobileMenu = document.getElementById("mobileMenu");
//   if (mobileMenu.classList.contains("active")) {
//     // 메뉴가 열려있는 경우
//     mobileMenu.classList.remove("active");
//     // 메뉴가 닫힐 때 모든 대메뉴를 닫음
//     var menuItems = document.querySelectorAll('.menu-item');
//     menuItems.forEach(function(item) {
//       item.classList.remove('expanded');
//     });
//   } else {
//     // 메뉴가 닫혀있는 경우
//     mobileMenu.classList.add("active");
//   }
// }

// // 대메뉴를 클릭하여 소메뉴 토글하기
// var menuItems = document.querySelectorAll('.menu-item');

// menuItems.forEach(function(item) {
//   item.addEventListener('click', function() {
//     // 대메뉴 클릭 시 확장 여부를 토글
//     this.classList.toggle('active');
//     this.classList.toggle('expanded');
//   });
// });

















// Swiper: Intro
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  observer: true,
  observeParents: true,
});


// Slick: main-card
$('.slick-card').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  arrows : false, 
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

// Aos
AOS.init();

