const tabCard = document.querySelectorAll('.list_card_container');
const btnTabCard = document.querySelectorAll('.tab_item');

btnTabCard.forEach((btn, index) => {
    let tab = tabCard[index];
    btn.addEventListener('click', () => {
        document.querySelector('.list_card_container.active').classList.remove('active');
        document.querySelector('.tab_item.active').classList.remove('active')

        btn.classList.add('active')
        tab.classList.add('active');
    })
})

document.addEventListener("DOMContentLoaded", () => {
    const sliderBanner = document.querySelector(".slider_banner");
    const slides = document.querySelectorAll(".item_slider");
    const totalSlides = slides.length;

    let currentIndex = 0;

    function moveSlider(index) {
        // Tính toán vị trí cần dịch chuyển
        const offset = -index * 100; // Mỗi slide dịch chuyển 100%
        sliderBanner.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides; // Lặp lại từ đầu nếu đến slide cuối
        moveSlider(currentIndex);
    }

    // Chuyển slide mỗi 3 giây
    setInterval(nextSlide, 2000);
});