import { navbar2 } from "./components/navbarAdmin.js";

let navbar_div = document.getElementById('navbar2');
navbar_div.innerHTML = navbar2();

// form code and adding this data in local storage
// document.querySelector("form").addEventListener("submit",proSubmit);

let form = document.getElementById('adminForm');
form.onsubmit = (event) => {
    event.preventDefault();
    proSubmit();
}

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
    }

    // append data in table
    let savedProducts = JSON.parse(localStorage.getItem("productList")) || [];

    diplayTable(savedProducts);

    function diplayTable(res) {
        // document.querySelector("tbody").innerHTML = ""; 
        let container = document.querySelector("tbody");
        res.forEach(function (el) {
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
  
        let td6 = document.createElement("td");
        td6.innerText= "Remove";
        td6.addEventListener("click", function () {
          removeData(el);
        });
  
        tr.append(td1, td2, td3, td4, td5, td6);
        container.append(tr);
      });
      }

      function removeData(i) {
         savedProducts.splice(i,1);
        console.log(savedProducts);

         localStorage.setItem("productList", JSON.stringify(savedProducts));
         displayData(savedProducts);
      }
