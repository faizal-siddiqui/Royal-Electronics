
import {navbar} from "./components/navbar_comp.js"

let navb = document.getElementById("navbar")
navb.innerHTML = navbar()

import {topbarFunc} from "./components/topbar.js"

let topb = document.getElementById("topbar")
topb.innerHTML = topbarFunc()


// scripts

import {hamburgerdisplay, aieadisplay, holidayDropdown, moreDropdown, accountsDropdown, recentlyViewedDropdown, orderStatusDropdown, savedItemsDropdown} from "./scripts/navbar.js"


hamburgerdisplay()
aieadisplay()
holidayDropdown()
moreDropdown()
accountsDropdown()
recentlyViewedDropdown()
orderStatusDropdown()
savedItemsDropdown()


// Rashmi slider

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

