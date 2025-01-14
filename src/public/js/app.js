document.addEventListener("DOMContentLoaded", () => {
    
    const tabCard = document.querySelectorAll('.list_card_container');
    const btnTabCard = document.querySelectorAll('.tab_item');

    btnTabCard.forEach((btn, index) => {
        let tab = tabCard[index];
        btn.addEventListener('click', () => {
            document.querySelector('.list_card_container.active').classList.remove('active');
            document.querySelector('.tab_item.active').classList.remove('active')

            btn.classList.add('active')
            tab.classList.add('active');
            indexSate = index;
            getProductForSategory();
        })
    })
    async function getProductForSategory() {
    function starts(){
        getProductForCop();
        getProductForDien();
        getProductForInox();
    }
    starts();
    async function getProductForCop() {
        const sategoryProduct = await fetch(`http://localhost:4000/products/api/getcop`);
        const product = await sategoryProduct.json();
        
        const copList = [
            document.querySelector('.cop-list-1'),
            document.querySelector('.cop-list-2'),
        ];
        let copChuck = [];
        for (let i = 0; i < product.length; i += 4) {
            copChuck.push(product.slice(i, i + 4));
        }
        copChuck.forEach(function (chuck, index) {
            let htmls = chuck.map(function (product) {
                    return `
                    <li class="item_card">
                        <a href="/products/${product.slug}" class="wrapper_img">
                            <img class="fade-in" src=${product.thumbnail_main} alt="">
                            <i class="bi bi-plus"></i>
                        </a>
                        <div class="title_product">
                            <h3>
                                <a href="/products/${product.slug}">
                                    ${product.name}
                                </a>
                            </h3>
                        </div>
                    </li>`;
                })
                .join('');
            if (copList[index]) {
                copList[index].innerHTML = htmls;
            }
            const newImages = document.querySelectorAll('.fade-in');
            newImages.forEach(img => observer.observe(img));
        });
    
    }
    async function getProductForDien() {
        const sategoryProduct = await fetch(`http://localhost:4000/products/api/getdien`);
        const product = await sategoryProduct.json();
        
        const dienList = [
            document.querySelector('.dien-list-1'),
            document.querySelector('.dien-list-2'),
        ];
        let dienChuck = [];
        for (let i = 0; i < product.length; i += 4) {
            dienChuck.push(product.slice(i, i + 4));
        }
        dienChuck.forEach(function (chuck, index) {
            let htmls = chuck.map(function (product) {
                    return `
                    <li class="item_card">
                        <a href="/products/${product.slug}" class="wrapper_img">
                            <img class="fade-in" src=${product.thumbnail_main} alt="">
                            <i class="bi bi-plus"></i>
                        </a>
                        <div class="title_product">
                            <h3>
                                <a href="/products/${product.slug}">
                                    ${product.name}
                                </a>
                            </h3>
                        </div>
                    </li>`;
                })
                .join('');
            if (dienList[index]) {
                dienList[index].innerHTML = htmls;
            }
            const newImages = document.querySelectorAll('.fade-in');
            newImages.forEach(img => observer.observe(img));
        });
    
    }
    async function getProductForInox() {
        const sategoryProduct = await fetch(`http://localhost:4000/products/api/getinox`);
        const product = await sategoryProduct.json();
        const inoxList = [
            document.querySelector('.inox-list-1'),
            document.querySelector('.inox-list-2'),
        ];
        let inoxChuck = [];
        for (let i = 0; i < product.length; i += 4) {
            inoxChuck.push(product.slice(i, i + 4));
        }
        inoxChuck.forEach(function (chuck, index) {
            let htmls = chuck.map(function (product) {
                    return `
                    <li class="item_card">
                        <a href="/products/${product.slug}" class="wrapper_img">
                            <img class="fade-in" src=${product.thumbnail_main} alt="">
                            <i class="bi bi-plus"></i>
                        </a>
                        <div class="title_product">
                            <h3>
                                <a href="/products/${product.slug}">
                                    ${product.name}
                                </a>
                            </h3>
                        </div>
                    </li>`;
                })
                .join('');
            if (inoxList[index]) {
                inoxList[index].innerHTML = htmls;
            }
            const newImages = document.querySelectorAll('.fade-in');
            newImages.forEach(img => observer.observe(img));
        });
    
    }
    const tabCard = document.querySelectorAll('.list_card_container');
    const btnTabCard = document.querySelectorAll('.tab_item');

    const imgRight = document.querySelectorAll('.animation-right');
    const imgTop = document.querySelectorAll('.animation-top');
    const fadeIn = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    });
    imgRight.forEach(img => {
        observer.observe(img);
    });
    imgTop.forEach(img => {
        observer.observe(img);
    });
    fadeIn.forEach(img => {
        observer.observe(img);
    });
    btnTabCard.forEach((btn, index) => {
        let tab = tabCard[index];
        btn.addEventListener('click', () => {
            document.querySelector('.list_card_container.active').classList.remove('active');
            document.querySelector('.tab_item.active').classList.remove('active')

            btn.classList.add('active')
            tab.classList.add('active');
            indexSate = index;
            getProductForSategory();
        })
    })
    const formEmail = document.querySelectorAll('.form_contact');
    (function() {
        if (!window.env || !window.env.YOUR_USER_ID) {
          console.error("Config not loaded properly.");
          return;
        }
        emailjs.init(window.env.YOUR_USER_ID);
      })();
    formEmail.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            emailjs.sendForm(window.env.YOUR_SERVICE_ID, window.env.YOUR_TEMPLATE_ID , this)
                .then(function() {
                  alert("Email sent successfully!");
                }, function(error) {
                  alert("Failed to send email: " + error);
                });
        });
    })
}});
