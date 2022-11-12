function navbar(){
    return `
    <div class="navbar_left">
        <div>
          <a href = "index.html"><img class="logo" src="./images/logo.png" alt="" /></a>
        </div>

        <div class="ham">
          <img
            id="ham_three_lines"
            class="ham_icons"
            src="./images/threelines.png"
            alt=""
          />
          <img
            id="ham_cross_lines"
            class="ham_icons"
            src="./images/cross.png"
            alt=""
          />
          <div class="menu_dropdown">
            <!-- <div id="upper_rotate_pointer"></div> -->
            <div class="upper_menu_dropdown">
              <div>
                <a href="">Deals</a>
                <div class="upper_menu_dropdown_icon"></div>
              </div>
              <div>
                <a href="">Supports ans services</a>
                <div class="upper_menu_dropdown_icon"></div>
              </div>
              <div>
                <a href="">Brands</a>
                <div class="upper_menu_dropdown_icon"></div>
              </div>
              <div>
                <a href="">Featured</a>
                <div class="upper_menu_dropdown_icon"></div>
              </div>
            </div>

            <div class="lower_menu_dropdown">
              <div><h4 style="color: black">Shop by Department</h4></div>
              <div>
                <a href="">Appliances</a>
                <div class="upper_menu_dropdown_icon"></div>
              </div>
              <div>
                <a href="">TV & Home Theatre</a>
                <div class="upper_menu_dropdown_icon"></div>
              </div>
              <div>
                <a href="">Computers & Tablets</a>
                <div class="upper_menu_dropdown_icon"></div>
              </div>
              <div>
                <a href="">Cameras, Camcorders & Drones</a>
                <div class="upper_menu_dropdown_icon"></div>
              </div>
              <div>
                <a href="">Cell Phones</a>
                <div class="upper_menu_dropdown_icon"></div>
              </div>
              <div>
                <a href="">Audio</a>
                <div class="upper_menu_dropdown_icon"></div>
              </div>
              <div>
                <a href="">Video Games</a>
                <div class="upper_menu_dropdown_icon"></div>
              </div>
              <div>
                <a href="">Movies & Musics</a>
                <div class="upper_menu_dropdown_icon"></div>
              </div>
              <div>
                <a href="">Car, Electronics & GPS</a>
                <div class="upper_menu_dropdown_icon"></div>
              </div>
              <div>
                <a href="">Wearable Technology</a>
                <div class="upper_menu_dropdown_icon"></div>
              </div>
              <div>
                <a href="">Health & Wellness</a>
                <div class="upper_menu_dropdown_icon"></div>
              </div>
              <div>
                <a href="">Sports, Fitness & Recreation</a>
                <div class="upper_menu_dropdown_icon"></div>
              </div>
              <div>
                <a href="">Home, Furniture & Office</a>
                <div class="upper_menu_dropdown_icon"></div>
              </div>
              <div>
                <a href="">Smart home, Security & Wifi</a>
                <div class="upper_menu_dropdown_icon"></div>
              </div>
              <div>
                <a href="">Outdoor Living</a>
                <div class="upper_menu_dropdown_icon"></div>
              </div>
              <div>
                <a href="">Toys, Games & Collectibles</a>
                <div class="upper_menu_dropdown_icon"></div>
              </div>
              <div>
                <a href="">Sustainable Living</a>
                <div class="upper_menu_dropdown_icon"></div>
              </div>
              <div>
                <a href=""><span class="cross_sign">✖</span> Close</a>
                <div class="upper_menu_dropdown_icon"></div>
              </div>
            </div>
          </div>
          <h4>Menu</h4>
        </div>

        <div class="search">
          <input type="text" placeholder="Search Royal Electronics" />
          <div>
            <i id="search_icon" class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>

      <div class="navbar_right">
        <div>
          <div id="aiea_dropdown_btn">
            <img src="./images/nav_aiea.png" alt="" />
            <h4>Aiea</h4>
          </div>

          <div class="aiea_dropdown">
            <div id="rotate_pointer"></div>
            <div class="aiea_cross">
              <h5 id="aiea_head">Aiea</h5>
              <h5 id="close_aiea_dropdown">╳</h5>
            </div>
            <div class="time">
              <p id="time_color">Open until 9 pm</p>
              <p><a href="">popular times</a></p>
            </div>
            <div><p>10:00 am: Often busier than usual</p></div>
            <div class="graph"></div>
            <div id="aiea_address">
              <p>98-051 Kamehameha Hwy Aiea, HI 96701</p>
            </div>
            <div><a href="">show details</a></div>
            <div><button class="aiea_button">Find Another Store</button></div>
          </div>
        </div>

        <div id="cart_redirect">
          <img src="./images/nav_cart.png" alt="" />
          <h4>Cart</h4>
        </div>
      </div>
    `
}


export {navbar}