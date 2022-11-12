// let productData = [
//   {
//     image:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6509/6509652_sd.jpg;maxHeight=200;maxWidth=300",
//     name: 'MacBook Pro 13.3" Laptop - Apple M2 chip - 8GB Memory - 256GB SSD (Latest Model) - Space Gray',
//     price: "1299.00",
//     model: "MacBook",
//     id: 202216,
//     saveprice: "250",
//   },]


// import Navabar
// // import navbar here

import { navbar } from "./components/navbar_comp.js";

let navbar_div = document.getElementById('navbar');
navbar_div.innerHTML = navbar();

import {topbarFunc} from "./components/topbar.js"
let topbar_div = document.getElementById('topbar')
topbar_div.innerHTML = topbarFunc()

import {hamburgerdisplay, aieadisplay, holidayDropdown, moreDropdown, accountsDropdown, recentlyViewedDropdown, orderStatusDropdown, savedItemsDropdown, cart_link} from "./scripts/navbar.js"

hamburgerdisplay()
aieadisplay()
holidayDropdown()
moreDropdown()
accountsDropdown()
recentlyViewedDropdown()
orderStatusDropdown()
savedItemsDropdown()
cart_link()

// // import footer

import { footer } from "./components/footer.js";

let footer_div = document.getElementById('footer');
footer_div.innerHTML = footer();


   let data=JSON.parse(localStorage.getItem("prod_desc"))

    display(data)



var cart=JSON.parse(localStorage.getItem("cart_item"))||[];
function display(productData){
  let maindiv=document.getElementById("main12");
let price2=document.getElementById("id123")

let sac2=document.getElementById("sac2")
  let sac1=document.getElementById("sac")
      productData.forEach(function(el){


        let div=document.createElement("div");
        let des=document.createElement("p");
des.innerText=el.name;
des.id="des"
let sku=document.createElement("p");
sku.innerText="sku:112321";
sku.id="sku"

let button1=document.createElement("button");
button1.innerText=""



        let img1=document.createElement("img");
img1.src=el.image;
img1.id="img11"

        let model=document.createElement("p");
model.innerText=`model:${el.model}`;
model.id="model"
let save1=document.getElementById("save")
save1.innerText=`save:$${el.saveprice}`
let price1=document.createElement("h3");
price1.innerText=`$${el.price}`

let btn12=document.createElement("button")
btn12.innerText="Add to Cart"
btn12.id="btn12"
btn12.addEventListener("click",function(){
  additem(el)
})
let btn13=document.createElement("button")
btn13.innerText="Build a Bundle"
btn13.id="btn13"
let div2=document.createElement("div");
div2.append(price1)
sac1.append(btn12)
sac2.append(btn13)
price2.append(div2)
      div.append(des,model,sku,img1);
      maindiv.append(div)

      })

     



      // localstora
      


      function additem(el){
        let data = JSON.parse(localStorage.getItem("cart_data")) || []

        data.push(el)
       localStorage.setItem("cart_data",JSON.stringify(data));
      }}