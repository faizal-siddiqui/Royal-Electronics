
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

    let total_price = JSON.parse(localStorage.getItem("total_price"))

    total_price = Number(total_price)

    let tax = Math.floor(total_price/10)

    item_subtotal_price.textContent = `$${total_price}`;
    estimated_tax_price.textContent = `$${tax}`
    subtotal_price.textContent = `$${total_price + tax}`;

}

change_prices()


