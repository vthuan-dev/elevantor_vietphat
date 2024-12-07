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

    const navbar = document.querySelector(".header_wrapp");

    function updateNavbarBackground() {
        const currentPath = window.location.pathname;

        if (currentPath === "/") {
            navbar.classList.add("on-backgr");
        } else {
            navbar.classList.remove("on-backgr");
        }
    }

    updateNavbarBackground();

    function tabActive() {
        const currentPath = window.location.pathname;
        
        if(currentPath === "/") {
            document.querySelector('.tab-1').classList.add('active');
            document.querySelector('.tab-2').classList.remove('active');
            document.querySelector('.tab-3').classList.remove('active');
            document.querySelector('.tab-4').classList.remove('active');
            document.querySelector('.tab-5').classList.remove('active');
        }
        else if(currentPath.startsWith("/products")) {
            document.querySelector('.tab-1').classList.remove('active');
            document.querySelector('.tab-2').classList.add('active');
            document.querySelector('.tab-3').classList.remove('active');
            document.querySelector('.tab-4').classList.remove('active');
            document.querySelector('.tab-5').classList.remove('active');
        }
        else if(currentPath.startsWith("/products")) {
            document.querySelector('.tab-1').classList.remove('active');
            document.querySelector('.tab-2').classList.remove('active');
            document.querySelector('.tab-3').classList.add('active');
            document.querySelector('.tab-4').classList.remove('active');
            document.querySelector('.tab-5').classList.remove('active');
        }
        else if(currentPath.startsWith("/about-us")) {
            document.querySelector('.tab-1').classList.remove('active');
            document.querySelector('.tab-2').classList.remove('active');
            document.querySelector('.tab-3').classList.remove('active');
            document.querySelector('.tab-4').classList.add('active');
            document.querySelector('.tab-5').classList.remove('active');
        }
        else if(currentPath.startsWith("/contact")) {
            document.querySelector('.tab-1').classList.remove('active');
            document.querySelector('.tab-2').classList.remove('active');
            document.querySelector('.tab-3').classList.remove('active');
            document.querySelector('.tab-4').classList.remove('active');
            document.querySelector('.tab-5').classList.add('active');
        }
    }
    tabActive();
    window.addEventListener("popstate", updateNavbarBackground);

    const items = document.querySelectorAll(".item_aside");

    items.forEach(item => {
        const icon = item.querySelector(".btn_drop");

        icon.addEventListener("click", function (event) {
            items.forEach(otherItem => {
                const otherIcon = otherItem.querySelector('.btn_drop');
                console.log(otherIcon);
                if (otherItem !== item) {
                    if (otherIcon) {
                        otherIcon.classList.add("bi-chevron-up");
                        otherIcon.classList.remove("bi-chevron-down");
                    }
                    otherItem.classList.remove("click");
                }
                
            });
            if (item.classList.contains("click")) {
                icon.classList.add("bi-chevron-up");
                icon.classList.remove("bi-chevron-down");
            } else {
                icon.classList.remove("bi-chevron-up");
                icon.classList.add("bi-chevron-down");
            }
                
            item.classList.toggle("click");
        });
    });

    async function sliderHome() {
        try{
            const slider = document.querySelector('.slider_banner');
            const slides = document.querySelectorAll('.item_slider');
            let currentIndex = 0; // Lưu trữ chỉ số của ảnh hiện tại
            const totalSlides = slides.length; // Tổng số ảnh
            const slideWidth = slides[0].offsetWidth; // Chiều rộng của mỗi ảnh

            // Hàm chuyển đổi ảnh
            function changeSlide() {
                // Tính toán vị trí của ảnh tiếp theo
                currentIndex = (currentIndex + 1) % totalSlides;
                const offset = currentIndex * slideWidth;

                // Cuộn đến ảnh tiếp theo
                slider.scrollTo({
                    left: offset,
                    behavior: 'smooth' // Thêm hiệu ứng cuộn mượt mà
                });
            }

            setInterval(changeSlide, 3000);

            slider.scrollTo({ right: 0, behavior: 'smooth' });
        }
        catch(error){
            console.log(`Error: ${error}`)
        }
    }
    sliderHome();

    function changeImageProduct() {
        const listImage = document.querySelectorAll('.img-js-product');
        const imgMain = document.querySelector('.img-js-product-main');
        listImage.forEach((li, index) => {
            li.addEventListener('click', () => {
                const img = li.querySelector('img');
                imgMain.src = img.src;
                img.style.border = '1px solid #DBDBDB;'
            })
        })
    }
    changeImageProduct();
});