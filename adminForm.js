import { navbar2 } from "./components/navbarAdmin.js";

let navbar_div = document.getElementById('navbar2');
navbar_div.innerHTML = navbar2();

// form code and adding this data in local storage
// document.querySelector("form").addEventListener("submit",proSubmit);

let form = document.getElementById('adminForm');
form.onsubmit = (event) => {
    event.preventDefault();
    proSubmit();
    // diplayTable(savedProducts);
}
// appending data onload
window.onload = (event) => {
  console.log('page is fully loaded');
  diplayTable(savedProducts);
};

    let proArr = JSON.parse(localStorage.getItem("productList")) || [];
    function proSubmit() {
    //  event.preventDefault(); 
      //ID,name,price,model,image,count
      let proObj = {
        product_id: document.querySelector("#id").value,
        product_name: document.querySelector("#name").value,
        product_price: document.querySelector("#price").value,
        product_model: document.querySelector("#model").value,
        product_image: document.querySelector("#image").value,
        product_count: document.querySelector("#proCount").value,
      };
      
      proArr.push(proObj);
      console.log(proArr)
      localStorage.setItem("productList", JSON.stringify(proArr));
      diplayTable(proArr);

    }

    // call total price 

    // append data in table
    let savedProducts = JSON.parse(localStorage.getItem("productList")) || [];
    let container = document.querySelector("tbody");

    function diplayTable(data) {
        container.innerHTML = null;
        
        data.forEach(function (el, index) {
        let tr = document.createElement("tr");
  
        let td1 = document.createElement("td");
        td1.innerText=el.product_id;
  

        let td2 = document.createElement("td");
        td2.innerText=el.product_name
  
        let td3 = document.createElement("td");
        td3.innerText=el.product_price;
  
        let td4 = document.createElement("td");
        td4.innerText=el.product_model;
  
        let td5 = document.createElement("td");
        td5.innerText=el.product_count;
  
        let reject = document.createElement("td");
        reject.innerText= "Remove";
        reject.addEventListener("click", function () {
          removeData(savedProducts,index);
        });
  
        tr.append(td1, td2, td3, td4, td5, reject);
        container.append(tr);
      });

      }

      // diplayTable(savedProducts);

      function removeData(data,index){
        savedProducts = data.filter(function(el,i){
            return i != index;
        })
        diplayTable(savedProducts);
    }

    function totalPrice() {
      let total = 0;
      let count = 0;
   
      let productList = JSON.parse(localStorage.getItem("productList"));
   
      for(let i=0; i<productList.length; i++){
          total += Number(productList[i].product_price);
          count += Number(productList[i].product_count)
      }
      total = Math.round(total)
      console.log(total)
      count = Math.round(count)
   
   
      localStorage.setItem("total_priceP", JSON.stringify(total))
      localStorage.setItem("save_priceP", JSON.stringify(count))
   
      let priceDisp = document.getElementById("priceS");
      priceDisp.innerText = total;
   
      let countDisp = document.getElementById("countS");
      countDisp.innerText = count;
     
  }
  
