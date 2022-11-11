
// import navbar here

import { navbar } from "./components/navbar.js";

let navbar_div = document.getElementById('navbar');
navbar_div.innerHTML = navbar();

// import footer

import { footer } from "./components/footer.js";

let footer_div = document.getElementById('footer');
footer_div.innerHTML = footer();

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

})

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
    let cart_data = JSON.parse(localStorage.getItem("cart_data"));

    for(let i=0; i<cart_data.length; i++){
        total += Number(cart_data[i].price);
    }

    let priceDisp = document.getElementById("cart_total");
    priceDisp.innerText = total;
    if(total>0){
       let continue_btn = document.getElementById("continue_btn");
       continue_btn.innerText = "Checkout";
       continue_btn.style.backgroundColor = "#ffe000";
    }
}

function append() {
    let data = JSON.parse(localStorage.getItem("cart_data"));
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

        div.append(img, p1, p2, btn);
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






