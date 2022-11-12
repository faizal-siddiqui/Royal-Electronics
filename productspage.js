
import {live_message} from "./components/live_message.js"
let live_mess = document.getElementById('live_message')
live_mess.innerHTML = live_message()

import {message_script} from "./scripts/live_message_scr.js"
message_script()

let productData = [
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6450/6450853_sd.jpg;maxHeight=200;maxWidth=300",
    name: 'MacBook Pro 14" Laptop - Apple M1 Pro chip - 16GB Memory - 512GB SSD (Latest Model) - Space Gray',
    price: "1799.00",
    model: "MacBook",
    id: 20221,
    saveprice: "149.99",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6469/6469399_sd.jpg;maxHeight=200;maxWidth=300",
    name: 'ASUS - Vivobook 17.3" Laptop - Intel Core 10th Gen i5 - 12GB Memory - 1TB HDD',
    price: "429.99",
    model: "ASUS",
    id: 20222,
    saveprice: "49.99",
  },

  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5721/5721600_sd.jpg;maxHeight=200;maxWidth=300",
    name: 'MacBook Air 13.3" Laptop - Apple M1 chip - 8GB Memory - 256GB SSD - Space Gray',
    price: "949.99",
    model: "MacBook",
    id: 20223,
    saveprice: "209.99",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6458/6458905_sd.jpg;maxHeight=200;maxWidth=300",
    name: 'Dell - Inspiron 2-in-1 14" Touch-Screen Laptop - Intel Core i5 - 8GB Memory - 512GB Solid State Drive - Silver',
    price: "649.99",
    model: "Dell",
    id: 20224,
    saveprice: "300",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6470/6470463_sd.jpg;maxHeight=200;maxWidth=300",
    name: 'Dell - G15 15.6" FHD Gaming Laptop - Intel Core i7 - 16GB Memory - NVIDIA GeForce RTX 3050 - 512GB Solid State Drive - Black, Dark Shadow Grey',
    price: "899.99",
    model: "Dell",
    id: 20225,
    saveprice: "209.99",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6499/6499749_sd.jpg;maxHeight=200;maxWidth=300",
    name: 'HP - 14" Laptop - Intel Celeron - 4GB Memory - 64GB eMMC - Snowflake White',
    price: "169.99",
    model: "HP",
    id: 20226,
    saveprice: "30",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6500/6500646_sd.jpg;maxHeight=200;maxWidth=300",
    name: 'Dell - Inspiron 3511 15.6" Touch Laptop - Intel Core i5 - 8GB Memory - 256GB Solid State Drive - Black',
    price: "599.99",
    model: "Dell",
    id: 20227,
    saveprice: "99.99",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6469/6469397_sd.jpg;maxHeight=200;maxWidth=300",
    name: 'ASUS - Vivobook 15.6" Laptop - Intel 10th Gen i3 - 8GB Memory - 256GB PCIE SSD - Slate Grey',
    price: "404.99",
    model: "ASUS",
    id: 20228,
    saveprice: "200",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6499/6499942_sd.jpg;maxHeight=200;maxWidth=300",
    name: 'HP - 14" Laptop - Intel Celeron - 4GB Memory - 64GB eMMC - Rose gold',
    price: "169.99",
    model: "HP",
    id: 20229,
    saveprice: "50",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6479/6479177_sd.jpg;maxHeight=200;maxWidth=300",
    name: 'HP - ENVY x360 2-in-1 13.3" OLED Touch-Screen Laptop - Intel Evo Core i7 - 8GB Memory - 512GB SSD - Natural Silver',
    price: "799.99",
    model: "HP",
    id: 202210,
    saveprice: "249.99",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6502/6502175_sd.jpg;maxHeight=200;maxWidth=300",
    name: 'HP - 14" Laptop - AMD Ryzen 3 - 8GB Memory - 128GB SSD - Natural Silver',
    price: "369.99",
    model: "HP",
    id: 202211,
    saveprice: "99.99",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6432/6432553_sd.jpg;maxHeight=200;maxWidth=300",
    name: 'Dell - Inspiron 7000 2-in-1 15.6" FHD Touch-Screen Laptop - Intel Core i5 - 12GB Memory - 512GB SSD+32GB Optane - Silver',
    price: "749.99",
    model: "Dell",
    id: 202213,
    saveprice: "200",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6448/6448936_sd.jpg;maxHeight=200;maxWidth=300",
    name: 'ASUS - TUF DASH 15.6" Gaming Laptop - Intel 11th Gen i7 - 16GB Memory - NVIDIA GeForce RTX 3070 - 1TB M.2 PCIEG3 SSD - Eclipse Grey',
    price: "1349.99",
    model: "ASUS",
    id: 202214,
    saveprice: "300",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6450/6450856_sd.jpg;maxHeight=200;maxWidth=300",
    name: 'MacBook Pro 14" Laptop - Apple M1 Pro chip - 16GB Memory - 512GB SSD (Latest Model) - Silver',
    price: "1199.99",
    model: "MacBook",
    id: 202215,
    saveprice: "400",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6509/6509652_sd.jpg;maxHeight=200;maxWidth=300",
    name: 'MacBook Pro 13.3" Laptop - Apple M2 chip - 8GB Memory - 256GB SSD (Latest Model) - Space Gray',
    price: "1299.00",
    model: "MacBook",
    id: 202216,
    saveprice: "250",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6428/6428992_sd.jpg;maxHeight=200;maxWidth=300",
    name: 'Microsoft - Surface Laptop Go - 12.4" Touch-Screen - Intel 10th Generation Core i5 - 8GB Memory - 256GB Solid State Drive - Platinum',
    price: "649.99",
    model: "Microsoft",
    id: 202217,
    saveprice: "150",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6469/6469400_sd.jpg;maxHeight=200;maxWidth=300",
    name: 'ASUS - 14.0" Laptop - Intel Celeron N4020 - 4GB Memory - 128GB eMMC - Star Black',
    price: "149.99",
    model: "ASUS",
    id: 202218,
    saveprice: "39",
  },
];

totalprod(productData)
append_data(productData)


// function dispaly(data){

//   let append_products_div = document.getElementById("append_products");
//   append_products_div.innerHTML = null;
  
//   data.forEach((el) => {
//     let cards = document.createElement("div");
//     cards.setAttribute("class", "products_cards")
//     cards.innerHTML = ` <div class="append_products_image">
//     <!-- Append image tag here -->
//     <img src=${el.image} alt="">
//   </div>
//   <div class="product_details">
//   <div class="append_products_details">
//     <!-- Append name, model , sku, rating, etc -->
//     <h5>${el.name}</h5>
//     <div class="product_model">
//       <p><span>Model: </span>${el.model}</p>
//       <p><span>SKU: </span>${el.id}</p>
//     </div>
//     <div><p>⭐⭐⭐⭐⭐(121)</p></div>
//     <p>Get it in 2 - 3 weeks</p>
//     <div>
//       <i class="material-icons">local_shipping</i>
//       <p><span>Pickup:</span> Order now for pickup on tomorrow at Aiea</p>
//       </div>
//       <a href="">See all pickup locations</a>
//     <div>
//       <i class="material-icons">store</i>
//       <p><span>Shipping:</span> Available in your area</p>
//       </div>
//       <a href="">Estimates for 209876 </a>
//     <div>
//       <input type="checkbox">
//       <p>Compare</p>
//       <input type="checkbox">
//       <p>Save</p>
//     </div>
//   </div>
//     <div>
//     <div class="append_products_price">
//     <!-- append price button -->
//     <h3>$${el.price}</h3>
//     <div>
//       <div><p>Save $${el.saveprice}</p> <p>Was $${Number(el.price) + Number(el.saveprice)}</p></div>
//   </div>
//   </div>
//   <p>Free item with purchase <p>A $29.99 value</p></p>
//   <button> <i class="material-icons">shopping_cart</i><p>Add to Cart</p></button>
//   </div>
//   </div>`


//     append_products_div.append(cards)
//   })


// }


function append_data(data){

  let append_products_div = document.getElementById("append_products");
  append_products_div.innerHTML = null;

  data.forEach((el, i) => {
    // First div - append_prod_img
  let cards = document.createElement("div")  
  cards.setAttribute("class", "products_cards")
  cards.onclick = () => {
    addtoDescription(el)
  }
    let append_prod_img = document.createElement("div")
    append_prod_img.setAttribute("class", "append_products_image")
      let main_img = document.createElement("img");
      main_img.src = el.image;
    append_prod_img.append(main_img)


    // Second Div - prod_details

    let prod_details = document.createElement("div")
    prod_details.setAttribute("class", "product_details");
        
       let append_prod_details = document.createElement("div")
       append_prod_details.setAttribute("class", "append_products_details")

            let name = document.createElement("h5")
            name.innerText = el.name;

            let prod_model = document.createElement("div")
            prod_model.setAttribute("class", "product_model")
  
                let model = document.createElement("p")
                    let span1 = document.createElement("span")
                    span1.innerText = `Model: ${el.model}`
                model.append(span1)
                // model.innerText = el.model

                let sku = document.createElement("p")
                    let span2 = document.createElement("span")
                    span2.innerText = `SKU: ${el.id}`
                sku.append(span2)
                // sku.innerText = el.id
            prod_model.append(model, sku)

            let rating_div = document.createElement("div")
              let rating_div_star = document.createElement("p")
              rating_div_star.innerText = "⭐⭐⭐⭐⭐(121)"
            rating_div.append(rating_div_star)
            
            let weeks = document.createElement("p")
            weeks.innerText = "Get it in 2 - 3 weeks"

            let shipping = document.createElement("div")
              let shipping_icon = document.createElement("i")
              shipping_icon.setAttribute("class", "material-icons")
              shipping_icon.innerText = "store"

              let pickup = document.createElement("p")
                 let pickup_span = document.createElement("span")
                 pickup_span.innerText = "Pickup: "
              pickup.append(pickup_span)
              pickup.innerText = "Pickup: Order now for pickup on tomorrow at Aiea"
            shipping.append(shipping_icon, pickup)

            let pickup_location = document.createElement("a")
            pickup_location.innerText = "See all pickup locations"


            let store = document.createElement("div")
              let store_icon = document.createElement("i")
              store_icon.setAttribute("class", "material-icons")
              store_icon.innerText = "local_shipping"

              let shipping_available = document.createElement("p")
                 let shipping_span = document.createElement("span")
                 shipping_span.innerText = "Shipping: "
              shipping_available.append(shipping_span)
              shipping_available.innerText = "Shipping: Available in your area"
            store.append(store_icon, shipping_available)

            let shipping_estimates = document.createElement("a")
            shipping_estimates.innerText = "Estimates for 209876 "

            let compare_div = document.createElement("div")
               let compare = document.createElement("input")
               compare.type = "checkbox"
               let compare_p = document.createElement("p")
               compare_p.innerText = "Compare"
               let save = document.createElement("input")
               save.type = "checkbox"
               let save_p = document.createElement("p")
               save_p.innerText = "Save"
            compare_div.append(compare, compare_p, save, save_p)

        append_prod_details.append(name, prod_model, rating_div, weeks, shipping, pickup_location, store, shipping_estimates, compare_div)


        let second_div = document.createElement("div")
            let append_prod_price = document.createElement("div")
            append_prod_price.setAttribute("class", "append_products_price")
               let price = document.createElement("h3")
               price.innerText = `$${el.price}`;
               let div_1 = document.createElement("div")
                  let div_2 = document.createElement("div")
                     let save_price = document.createElement("p")
                     save_price.innerText = `$${el.saveprice}`
                     let total_price = document.createElement("p")
                     total_price.innerText = `$${Number(el.price) + Number(el.saveprice)}`
                  div_2.append(save_price, total_price)
               div_1.append(div_2)
               
            append_prod_price.append(price, div_1) 

            let free_item = document.createElement("p")
              let free_item_val = document.createElement("p")
              free_item_val.innerText = "A $29.99 value"
            free_item.innerText ="Free item with purchase"
            free_item.append(free_item_val)

            let cart_btn = document.createElement("button")
            cart_btn.onclick = () => {
              addtoCart(el)
            }
              let cart_icon = document.createElement("i")
              cart_icon.setAttribute("class", "material-icons")
              cart_icon.innerText = "shopping_cart"

              let cart_p = document.createElement("p")
              cart_p.innerText = "Add to Cart"
            cart_btn.append(cart_icon, cart_p)

        second_div.append(append_prod_price, free_item, cart_btn) 
  
    prod_details.append(append_prod_details, second_div)  


  cards.append(append_prod_img, prod_details)  
  
  append_products_div.append(cards)

  }) 

}

// localstorage
function addtoCart(el){
  
  let localarr = JSON.parse(localStorage.getItem("cart_data")) || []

  localarr.push(el)

  localStorage.setItem("cart_data", JSON.stringify(localarr))

}


function addtoDescription(el){
  localStorage.setItem("prod_desc", JSON.stringify(el))
}


// total Products

function totalprod(data){

  let total_products = document.getElementById("total_products")
  total_products.innerText = `${data.length} items`

}





// sorting L-H / H-L
let sort_prod = document.getElementById("sort_prod");
sort_prod.onchange = () => {
  sortingOfProd(productData)
}


function sortingOfProd(data){

  let sort_prod = document.getElementById("sort_prod");

  if(sort_prod.value == "LH"){
    let sorted_data = data.sort((a, b) =>{return a.price - b.price})
    append_data(sorted_data)
    console.log(sorted_data)
  } else if(sort_prod.value == "HL"){
    let sorted_data = data.sort((a, b) =>{return b.price - a.price})
    append_data(sorted_data)
    console.log(sorted_data)
  } else{
    append_data(data)
  }

}


// FILTER BY PRICE



const filter_Func = (start, end) => {
 
  start = Number(start)
  end = Number(end)
  let filter_data = productData.filter((el) => {
    return +el.price >= start && +el.price <=end;
  })

  // console.log(filter_data)
  append_data(filter_data)
  totalprod(filter_data)
}

function setOnclick(){

  let price_checkbox = document.querySelectorAll(".price_checkbox")
  price_checkbox.forEach((element, i) => {
    element.onclick = () => {
      filter_price(i)
    }
  })

}

setOnclick()

const filter_price = (x) => {

  switch(x){
    case 0: filter_Func("0","25")
    break
    case 1: filter_Func("25","49.99")
    break
    case 2: filter_Func("50","74.99")
    break
    case 3: filter_Func("75","99.99")
    break
    case 4: filter_Func("100","149.99")
    break
    case 5: filter_Func("150","199.99")
    break
    case 6: filter_Func("200","499.99")
    break
    case 7: filter_Func("500","999.99")
    break
    case 8: filter_Func("1000","10000")
    break

  }
}




// FILTER BY BRAND

let brand_filter = document.getElementById('brand_filter')
brand_filter.oninput = () => {
  brand_debouncing(search_prod, 1000)
}


const search_prod = (data) => {
   let brand_filter = document.getElementById('brand_filter')

   let filter_data = data.filter((el) => {
      return el.name.includes(brand_filter.value);
   })

  //  console.log(filter_data)
   append_data(filter_data)
   totalprod(filter_data)
}

let id;
function brand_debouncing(func, time){

  if(id){
    clearTimeout(id)
  }

  id = setTimeout(()=>{
    func(productData)
  }, time)

}


