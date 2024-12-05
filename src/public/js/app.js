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

    // Gọi hàm khi tải trang
    updateNavbarBackground();

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
});