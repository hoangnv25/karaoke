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
