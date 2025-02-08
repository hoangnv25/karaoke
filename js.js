// xử lý cuộn tới room
const roomContainer = document.querySelector('.room_container');
const roomItems = document.querySelectorAll('.room_item');

window.addEventListener('scroll', function() {
    const rect = roomContainer.getBoundingClientRect();
    roomItems.forEach(roomItem => {
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            roomItem.classList.add('visible'); // Thêm lớp visible khi cuộn tới
        } else {
            roomItem.classList.remove('visible'); // Xóa lớp visible khi không còn trong viewport
        }
    });
});

const gtItems = document.querySelectorAll('.gt_item');
window.addEventListener('scroll', function() {
    gtItems.forEach(gtItem => {
        const rect = gtItem.getBoundingClientRect();
        if(rect.top <= window.innerHeight && rect.bottom <= 800) {
            gtItem.classList.add('visible_gt');
        }
    });
} );

// xử lý đóng sidebar
const clickHide = document.querySelectorAll('.x, .logo, .clickhide, .sidebar_item a, .sidebar_overlay')
const sideBar = document.querySelector('.sidebar');
const sideBarContainer = document.querySelector('.sidebar_container');
const overlay = document.querySelector('.sidebar_overlay');
clickHide.forEach(el => {
    el.addEventListener('click', () => {
        sideBar.classList.add("hide");
        sideBarContainer.classList.add("hide");
        overlay.classList.add("hide");
    });
});

// mở sidebar
const navBar = document.querySelector('.navbar_icon');
navBar.addEventListener('click', () => {
    sideBar.classList.remove("hide");
    sideBarContainer.classList.remove("hide");
    overlay.classList.remove("hide");
});

// Cuộn ảnh phòng
const slides = document.querySelectorAll('.room_img_play');
setInterval(() => {
    slides[0].style.transform = 'translateX(-100%)';
    slides[1].style.transform = 'translateX(-100%)';
    slides[1].style.opacity = 1;

    setTimeout(() => {
        slides[0].style.transform = 'translateX(100%)';
        slides[0].style.opacity = 0;
        
    }, 1000);

    setTimeout(() => {
        slides[0].style.opacity = 1;
        slides[0].style.transform = 'translateX(0%)';
        slides[1].style.transform = 'translateX(-200%)';
    }, 2000);

    setTimeout(() => {
        slides[1].style.transform = 'translateX(0%)';
        slides[1].style.opacity = 0;
    }, 3000);

}, 4000);

// git init
// git add .
// git commit -m "h"
// git push