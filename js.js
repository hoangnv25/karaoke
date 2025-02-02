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
