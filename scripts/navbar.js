// NAVBAR

function hamburgerdisplay() {
  let count = 0;
  let ham_three_lines = document.getElementById("ham_three_lines");
  let ham_cross_lines = document.getElementById("ham_cross_lines");
  let menu_dropdown = document.querySelector(".menu_dropdown");
  let ham = document.querySelector(".ham");

  ham.onclick = () => {
    if (count % 2 == 0) {
      count++;
      ham_three_lines.style.display = "none";
      ham_cross_lines.style.display = "block";
      menu_dropdown.style.display = "block";
      //   console.log(count);
    } else {
      count++;
      ham_three_lines.style.display = "block";
      ham_cross_lines.style.display = "none";
      menu_dropdown.style.display = "none";
      //   console.log(count)
    }
  };
}

// hamburgerdisplay();

function aieadisplay() {
  let count = 2;
  let aiea_dropdown_btn = document.getElementById("aiea_dropdown_btn");
  let aiea_dropdown = document.querySelector(".aiea_dropdown");

  aiea_dropdown_btn.onclick = () => {
    if (count % 2 == 0) {
      count++;
      aiea_dropdown.style.display = "none";
      // console.log(count);
    } else {
      count++;
      aiea_dropdown.style.display = "block";
      // console.log(count);
    }
  };
  let close_aiea_dropdown = document.getElementById("close_aiea_dropdown");
  let aiea_dropdowns = document.querySelector(".aiea_dropdown");

  close_aiea_dropdown.onclick = () => {
    aiea_dropdowns.style.display = "none";
    count++;
  };
}

// aieadisplay();



// TOPBAR

// HOLIDAY DROPDOWN

function holidayDropdown() {
  let count = 0;
  let holiday_dropdown_btn = document.getElementById("holiday_dropdown_btn");
  let holiday_deals_dropdown = document.getElementById(
    "holiday_deals_dropdown"
  );

  holiday_dropdown_btn.onclick = () => {
    if (count % 2 == 0) {
      count++;
      holiday_deals_dropdown.style.display = "block";
    } else {
      count++;
      holiday_deals_dropdown.style.display = "none";
    }
  };
}

// holidayDropdown();

// MORE DROPDOWN

function moreDropdown() {
  let count = 0;
  let more_deals_btn = document.getElementById("more_deals_btn");
  let more_deals_dropdown = document.getElementById("more_deals_dropdown");

  more_deals_btn.onclick = () => {
    if (count % 2 == 0) {
      count++;
      more_deals_dropdown.style.display = "block";
    } else {
      count++;
      more_deals_dropdown.style.display = "none";
    }
  };
}

// moreDropdown();

// ACCOUNTS DROPDOWN

function accountsDropdown() {
  let count = 0;
  let accounts_btn = document.getElementById("accounts_btn");
  let accounts_dropdown = document.getElementById("accounts_dropdown");

  accounts_btn.onclick = () => {
    if (count % 2 == 0) {
      count++;
      accounts_dropdown.style.display = "block";
    } else {
      count++;
      accounts_dropdown.style.display = "none";
    }
  };
}

// accountsDropdown();

// RECENTLY VIEWED DROPDOWN

function recentlyViewedDropdown() {
  let count = 0;
  let recently_viewed_btn = document.getElementById("recently_viewed_btn");
  let recently_viewed_dropdown = document.getElementById(
    "recently_viewed_dropdown"
  );

  recently_viewed_btn.onclick = () => {
    if (count % 2 == 0) {
      count++;
      recently_viewed_dropdown.style.display = "block";
    } else {
      count++;
      recently_viewed_dropdown.style.display = "none";
    }
  };
  let recently_viewed_close = document.getElementById("recently_viewed_close");
  recently_viewed_close.onclick = () => {
    count++;
    recently_viewed_dropdown.style.display = "none";
  };
}

// recentlyViewedDropdown();

// ORDER STATUS

function orderStatusDropdown() {
  let count = 0;
  let order_status_btn = document.getElementById("order_status_btn");
  let order_status_dropdown = document.getElementById("order_status_dropdown");

  order_status_btn.onclick = () => {
    if (count % 2 == 0) {
      count++;
      order_status_dropdown.style.display = "block";
    } else {
      count++;
      order_status_dropdown.style.display = "none";
    }
  };
  let order_status_close = document.getElementById("order_status_close");
  order_status_close.onclick = () => {
    count++;
    order_status_dropdown.style.display = "none";
  };
}

// orderStatusDropdown();

// SAVED ITEMS

function savedItemsDropdown() {
  let count = 0;
  let saved_items_btn = document.getElementById("saved_items_btn");
  let saved_items_dropdown = document.getElementById("saved_items_dropdown");

  saved_items_btn.onclick = () => {
    if (count % 2 == 0) {
      count++;
      saved_items_dropdown.style.display = "block";
    } else {
      count++;
      saved_items_dropdown.style.display = "none";
    }
  };
  let saved_items_close = document.getElementById("saved_items_close");
  saved_items_close.onclick = () => {
    count++;
    saved_items_dropdown.style.display = "none";
  };
}

// savedItemsDropdown();

function alldropdownClose() {
  let ham_three_lines = document.getElementById("ham_three_lines");
  let ham_cross_lines = document.getElementById("ham_cross_lines");
  let menu_dropdown = document.querySelector(".menu_dropdown");
  let holiday_deals_dropdown = document.getElementById(
    "holiday_deals_dropdown"
  );
  let aiea_dropdowns = document.querySelector(".aiea_dropdown");
  let more_deals_dropdown = document.getElementById("more_deals_dropdown");
  let accounts_dropdown = document.getElementById("accounts_dropdown");
  let recently_viewed_dropdown = document.getElementById(
    "recently_viewed_dropdown"
  );
  let order_status_dropdown = document.getElementById("order_status_dropdown");
  let saved_items_dropdown = document.getElementById("saved_items_dropdown");


  // let body_div = document.getElementById("body_div")
  body_div.onclick = () => {
    ham_three_lines.style.display = "block";
    ham_cross_lines.style.display = "none";
    menu_dropdown.style.display = "none";
    holiday_deals_dropdown.style.display = "none";
    aiea_dropdowns.style.display = "none";
    more_deals_dropdown.style.display = "none";
    accounts_dropdown.style.display = "none";
    recently_viewed_dropdown.style.display = "none";
    order_status_dropdown.style.display = "none";
    saved_items_dropdown.style.display = "none";
  };
}

// CART REDIRECT (NAVBAR)

function cart_link(){
  let cart_redirect = document.getElementById('cart_redirect')
  cart_redirect.onclick = () => {
      window.location.href = "cart.html"
  }
}



export {hamburgerdisplay, aieadisplay, holidayDropdown, moreDropdown, accountsDropdown, recentlyViewedDropdown, orderStatusDropdown, savedItemsDropdown, cart_link}