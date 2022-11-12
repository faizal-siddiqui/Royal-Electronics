
// import navbar here

// import { navbar } from "./components/navbar.js";

// let navbar_div = document.getElementById('navbar');
// navbar_div.innerHTML = navbar();

// import footer

// import { footer } from "./components/footer.js";

// let footer_div = document.getElementById('footer');
// footer_div.innerHTML = footer();

// slider js code

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', ()=> {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })

});


// let productData = [
//     {
//       image:
//         "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6450/6450853_sd.jpg;maxHeight=200;maxWidth=300",
//       name: 'MacBook Pro 14" Laptop - Apple M1 Pro chip - 16GB Memory - 512GB SSD (Latest Model) - Space Gray',
//       price: "1799.00",
//       model: "MacBook",
//       id: 20221,
//       saveprice: "149.99",
//     },
//     {
//       image:
//         "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6469/6469399_sd.jpg;maxHeight=200;maxWidth=300",
//       name: 'ASUS - Vivobook 17.3" Laptop - Intel Core 10th Gen i5 - 12GB Memory - 1TB HDD',
//       price: "429.99",
//       model: "ASUS",
//       id: 20222,
//       saveprice: "49.99",
//     },
  
//     {
//       image:
//         "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5721/5721600_sd.jpg;maxHeight=200;maxWidth=300",
//       name: 'MacBook Air 13.3" Laptop - Apple M1 chip - 8GB Memory - 256GB SSD - Space Gray',
//       price: "949.99",
//       model: "MacBook",
//       id: 20223,
//       saveprice: "209.99",
//     },
//     {
//       image:
//         "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6458/6458905_sd.jpg;maxHeight=200;maxWidth=300",
//       name: 'Dell - Inspiron 2-in-1 14" Touch-Screen Laptop - Intel Core i5 - 8GB Memory - 512GB Solid State Drive - Silver',
//       price: "649.99",
//       model: "Dell",
//       id: 20224,
//       saveprice: "300",
//     },
//     {
//       image:
//         "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6470/6470463_sd.jpg;maxHeight=200;maxWidth=300",
//       name: 'Dell - G15 15.6" FHD Gaming Laptop - Intel Core i7 - 16GB Memory - NVIDIA GeForce RTX 3050 - 512GB Solid State Drive - Black, Dark Shadow Grey',
//       price: "899.99",
//       model: "Dell",
//       id: 20225,
//       saveprice: "209.99",
//     },
//     {
//       image:
//         "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6499/6499749_sd.jpg;maxHeight=200;maxWidth=300",
//       name: 'HP - 14" Laptop - Intel Celeron - 4GB Memory - 64GB eMMC - Snowflake White',
//       price: "169.99",
//       model: "HP",
//       id: 20226,
//       saveprice: "29.99",
//     },
//     {
//       image:
//         "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6500/6500646_sd.jpg;maxHeight=200;maxWidth=300",
//       name: 'Dell - Inspiron 3511 15.6" Touch Laptop - Intel Core i5 - 8GB Memory - 256GB Solid State Drive - Black',
//       price: "599.99",
//       model: "Dell",
//       id: 20227,
//       saveprice: "99.99",
//     },
//     {
//       image:
//         "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6469/6469397_sd.jpg;maxHeight=200;maxWidth=300",
//       name: 'ASUS - Vivobook 15.6" Laptop - Intel 10th Gen i3 - 8GB Memory - 256GB PCIE SSD - Slate Grey',
//       price: "404.99",
//       model: "ASUS",
//       id: 20228,
//       saveprice: "200",
//     },
//     {
//       image:
//         "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6499/6499942_sd.jpg;maxHeight=200;maxWidth=300",
//       name: 'HP - 14" Laptop - Intel Celeron - 4GB Memory - 64GB eMMC - Rose gold',
//       price: "169.99",
//       model: "HP",
//       id: 20229,
//       saveprice: "49.99",
//     },
//     {
//       image:
//         "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6479/6479177_sd.jpg;maxHeight=200;maxWidth=300",
//       name: 'HP - ENVY x360 2-in-1 13.3" OLED Touch-Screen Laptop - Intel Evo Core i7 - 8GB Memory - 512GB SSD - Natural Silver',
//       price: "799.99",
//       model: "HP",
//       id: 202210,
//       saveprice: "249.99",
//     },
//     {
//       image:
//         "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6502/6502175_sd.jpg;maxHeight=200;maxWidth=300",
//       name: 'HP - 14" Laptop - AMD Ryzen 3 - 8GB Memory - 128GB SSD - Natural Silver',
//       price: "369.99",
//       model: "HP",
//       id: 202211,
//       saveprice: "99.99",
//     },
//     {
//       image:
//         "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6432/6432553_sd.jpg;maxHeight=200;maxWidth=300",
//       name: 'Dell - Inspiron 7000 2-in-1 15.6" FHD Touch-Screen Laptop - Intel Core i5 - 12GB Memory - 512GB SSD+32GB Optane - Silver',
//       price: "749.99",
//       model: "Dell",
//       id: 202213,
//       saveprice: "200",
//     },
//     {
//       image:
//         "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6448/6448936_sd.jpg;maxHeight=200;maxWidth=300",
//       name: 'ASUS - TUF DASH 15.6" Gaming Laptop - Intel 11th Gen i7 - 16GB Memory - NVIDIA GeForce RTX 3070 - 1TB M.2 PCIEG3 SSD - Eclipse Grey',
//       price: "1349.99",
//       model: "ASUS",
//       id: 202214,
//       saveprice: "300",
//     },
//     {
//       image:
//         "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6450/6450856_sd.jpg;maxHeight=200;maxWidth=300",
//       name: 'MacBook Pro 14" Laptop - Apple M1 Pro chip - 16GB Memory - 512GB SSD (Latest Model) - Silver',
//       price: "1199.99",
//       model: "MacBook",
//       id: 202215,
//       saveprice: "400",
//     },
//     {
//       image:
//         "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6509/6509652_sd.jpg;maxHeight=200;maxWidth=300",
//       name: 'MacBook Pro 13.3" Laptop - Apple M2 chip - 8GB Memory - 256GB SSD (Latest Model) - Space Gray',
//       price: "1299.00",
//       model: "MacBook",
//       id: 202216,
//       saveprice: "250",
//     },
//     {
//       image:
//         "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6428/6428992_sd.jpg;maxHeight=200;maxWidth=300",
//       name: 'Microsoft - Surface Laptop Go - 12.4" Touch-Screen - Intel 10th Generation Core i5 - 8GB Memory - 256GB Solid State Drive - Platinum',
//       price: "649.99",
//       model: "Microsoft",
//       id: 202217,
//       saveprice: "150",
//     },
//     {
//       image:
//         "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6469/6469400_sd.jpg;maxHeight=200;maxWidth=300",
//       name: 'ASUS - 14.0" Laptop - Intel Celeron N4020 - 4GB Memory - 128GB eMMC - Star Black',
//       price: "149.99",
//       model: "ASUS",
//       id: 202218,
//       saveprice: "39",
//     },
//   ];

//   localStorage.setItem("cart_data", JSON.stringify(productData))

//  cart function 
// function addToCart(el) {
//     let data JSON.parse(localStorage.getItem("cart_data")) || [];
    
//     data.push(el);

//     localStorage.setItem("cart_data", JSON.stringify(data));

// }

// cart count function



totalPrice();
append();

function totalPrice() {
    let total = 0;
    let savePrice = 0;

    let cart_data = JSON.parse(localStorage.getItem("cart_data"));

    for(let i=0; i<cart_data.length; i++){
        total += Number(cart_data[i].price);
        savePrice += Number(cart_data[i].saveprice)
    }
    total = Math.round(total)
    console.log(total)
    savePrice = Math.round(savePrice)


    localStorage.setItem("total_price", JSON.stringify(total))
    localStorage.setItem("save_price", JSON.stringify(savePrice))
    let priceDisp = document.getElementById("cart_total");
    priceDisp.innerText = total;
    
    // if(total>0){
    //    let continue_btn = document.getElementById("continue_btn");
    //    continue_btn.innerText = "Checkout";
    //    continue_btn.style.backgroundColor = "#ffe000";
    // }
}

function append() {
    let data = JSON.parse(localStorage.getItem("cart_data"));
    console.log(data)
    let container = document.getElementById("cart");
    container.innerHTML = null;
    let emptyToappendcartItem = document.getElementById("emptyToappendcartItem");
    emptyToappendcartItem.innerHTML = null;

    data.forEach((el) => {
        let div = document.createElement("div");
        div.setAttribute("class", "item");

        let img = document.createElement("img");
        img.src = el.image;

        let p1 = document.createElement("p");
        p1.innerText = el.name;

        let p2 = document.createElement("p");
        p2.innerText = el.price;

        let removeLink = document.createElement("a");
        removeLink.innerText = "Remove";
        removeLink.setAttribute("class", "remove");
        removeLink.onclick = () => {
            remove(el.id);
        };

        div.append(img, p1, p2, removeLink);
        container.appendChild(div);
    })
}

function remove(id) {
    console.log(id);
    let data = JSON.parse(localStorage.getItem("cart_data"));
    data = data.filter((el) => {
        return el.id !== id;
    });

    localStorage.setItem("cart_data", JSON.stringify(data));
    append();
    totalPrice();
}






