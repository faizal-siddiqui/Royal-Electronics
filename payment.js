localStorage.setItem("otp", 8840)



const place_order_redirect = () => {
    let place_order_btn = document.getElementById("place_order_btn")

    let first_name = document.getElementById("first_name")
    let last_name = document.getElementById("last_name")
    let address = document.getElementById("address")
    let city = document.getElementById("city")
    let state = document.getElementById("state")
    let zipcode = document.getElementById("zipcode")
    let credit_no = document.getElementById("credit_no")
    place_order_btn.onclick = () => {
        first_name.value = null
        last_name.value = null
        address.value = null
        city.value = null
        state.value = null
        zipcode.value = null
        credit_no.value = null
        window.location.href = ""
    }
}
place_order_redirect()
// localStorage.setItem("total_price", 2000)

const change_prices = () =>{

    let item_subtotal_price = document.getElementById("item_subtotal_price")
    let estimated_tax_price = document.getElementById("estimated_tax_price")
    let subtotal_price = document.getElementById("subtotal_price")
    let save_amount = document.getElementById("save_amount")

    let total_price = JSON.parse(localStorage.getItem("total_price"))
    let save_price = JSON.parse(localStorage.getItem('save_price'))

    total_price = Number(total_price)

    let tax = Math.floor(total_price/10)

    item_subtotal_price.textContent = `$${total_price}`;
    estimated_tax_price.textContent = `$${tax}`
    subtotal_price.textContent = `$${total_price + tax}`;
    save_amount.textContent = `$${save_price}`
}

change_prices()
place_order_click()


function place_order_click(){
    let place_order_btn = document.getElementById('place_order_btn')
    console.log(first_name, last_name)
    place_order_btn.onclick = () => {
        let name = getname()

        let sign = prompt("PLease Enter your otp here");

        if (sign == 8840) {
            alert(`Your order is Successful Thank You so much ${name[0]} ${name[1]} for choosing us`)
            window.location.href = "index.html"
            localStorage.clear()
        } else{
            alert("Your otp is incorrect")
        }       
    }
}


function getname(){
    let first_name = document.getElementById('first_name').value;
    let last_name = document.getElementById('last_name').value;

    return [first_name, last_name]
}