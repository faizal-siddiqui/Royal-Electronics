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
// window.onload = (event) => {
//   console.log('page is fully loaded');
//   diplayTable();
//   totalPrice(); 
// };
diplayTable();
      totalPrice();

    
    function proSubmit() {
    //  event.preventDefault(); 
    let proArr = JSON.parse(localStorage.getItem("productList")) || [];
      //ID,name,price,model,image,count
      let proObj = {
        id: document.querySelector("#id").value,
        product_name: document.querySelector("#name").value,
        product_price: document.querySelector("#price").value,
        product_model: document.querySelector("#model").value,
        product_image: document.querySelector("#image").value,
        product_count: document.querySelector("#proCount").value,
      };
      
      proArr.push(proObj);
      console.log(proArr)
      localStorage.setItem("productList", JSON.stringify(proArr));
      diplayTable();
      totalPrice() 
    }

    // call total price 

    // append data in table

    function diplayTable() {
      let data = JSON.parse(localStorage.getItem("productList")) || [];
      console.log(data)

        let container = document.querySelector("tbody");
        container.innerHTML = null;
        
        data.forEach((el) => {
        let tr = document.createElement("tr");
  
        let td1 = document.createElement("td");
        td1.innerText=el.id;
  

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
        reject.onclick = () => {
          // removeData(savedProducts,index);
          removeData(el.id)
          // removeData(index)
        };
  
        tr.append(td1, td2, td3, td4, td5, reject);
        container.appendChild(tr);
      });

      }

      // diplayTable(savedProducts);

    //   function removeData(data,index){
    //     savedProducts = data.filter(function(el,i){
    //         return i != index;
    //     })
    //     diplayTable(savedProducts);
    //     totalPrice();
    // }


    // remove data 2nd function 
    function removeData(id) {
      console.log(id);
      let data = JSON.parse(localStorage.getItem("productList"));
      data = data.filter((el) => {
          return el.id != id;
      });
   console.log(data);
      localStorage.setItem("productList", JSON.stringify(data));
      diplayTable();
      totalPrice();
  }
  


    // count total price and total item
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
  
