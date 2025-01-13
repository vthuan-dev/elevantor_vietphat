document.addEventListener("DOMContentLoaded", () => {
    const formEmail = document.querySelectorAll('.form_contact');
    formEmail.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = form.querySelector('input[name="Name"]').value;
            const email = form.querySelector('input[name="Email"]').value;
            const phone = form.querySelector('input[name="Phone"]').value;
            const message = form.querySelector('textarea[name="Message"]').value;

            const emailBody = `
                <strong>Name:</strong> ${name} <br>
                <strong>Email:</strong> ${email} <br>
                <strong>Phone:</strong> ${phone} <br>
                <strong>Message:</strong> ${message}
                Cám ơn quý khách đã liên hệ!
                `;

            Email.send({
                Host : "smtp.gmail.com",
                Username : "huyhung18042002@gmail.com",
                Password : "password",
                To : "huyhung18042002@gmail.com",
                From : email,
                Subject : "Mua linh kiện thang máy từ phukienthangmay.com",
                Body : emailBody
            }).then(
                message => alert(message)
            );
        });
    })
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
    
}});
