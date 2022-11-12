function topbarFunc(){
    return `
    <div>
        <div id="holiday_dropdown_btn">
          <p>Holiday Deals</p>
          <i class="material-icons">expand_more</i>
        </div>
        <div id="holiday_deals_dropdown">
          <div id="holiday_pointer" class="pointer"></div>
          <div>
            <div>
              <a href="">Black Friday Deals Right Now</a>
            </div>
            <div>
              <a href="">Gift Ideas</a>
            </div>
            <div>
              <a href="">Gift Cards</a>
            </div>
            <div>
              <a href="">Toy Guide 2022</a>
            </div>
            <div>
              <a href="">Explore Holiday Inspirations</a>
            </div>
            <div>
              <a href="">Holiday FAQs</a>
            </div>
            <div>
              <a href="">╳ Close</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div><p>Top Deals</p></div>
      </div>
      <div>
        <div><p>Deal of the Day</p></div>
      </div>
      <div>
        <div><p>Total Membership</p></div>
      </div>
      <div>
        <div><p>Credit Cards</p></div>
      </div>
      <div>
        <div id="more_deals_btn">
          <p>More</p>
          <i class="material-icons">expand_more</i>
        </div>
        <div id="more_deals_dropdown">
          <div id="more_pointer" class="pointer"></div>
          <div>
            <div>
              <a href="">Health and Wellness</a>
            </div>
            <div>
              <a href="">Gift Ideas</a>
            </div>
            <div>
              <a href="">Gift Cards</a>
            </div>
            <div>
              <a href="">Donate to St. Dude</a>
            </div>
            <div>
              <a href="">Royal Electronics Outlet</a>
            </div>
            <div>
              <a href="">Royal Electronics Business</a>
            </div>
            <div>
              <a href="">╳ Close</a>
            </div>
          </div>
        </div>
      </div>
      <div id="accounts">
        <div id="accounts_btn">
          <img src="./images/accounts.png" alt="" />
          <p>Account</p>
          <i class="material-icons">expand_more</i>
        </div>
        <div id="accounts_dropdown">
          <!-- <div id="accounts_pointer" class="pointer"></div> -->
          <div class="accounts_login">
            <p>
              Becoming a Royal Electronics® member comes with easy order tracking,
              rewards, offers and more.
            </p>
            <a href = "signInPage.html"><button id="topbar_signin">Sign In</button></a>
            <a href = "createPage.html"><button id="topbar_create_account">Create Account</button></a>
          </div>
          <div class="accounts_first_part">
            <div>
              <a href="">Account</a>
              <p>Your info at a glance</p>
            </div>
            <div>
              <a href="">Orders & Purchases</a>
              <p>Track, change, cancel</p>
            </div>
            <div>
              <a href="">Your Products</a>
              <p>Support, manuals, guides</p>
            </div>
          </div>
          <div class="accounts_second_part">
            <div>
              <a href="">Payment Methods</a>
              <p>Saved credit cards</p>
            </div>
            <div>
              <a href="">Protection Plan & Subscription</a>
            </div>
            <div>
              <a href="">Digital Library</a>
              <p>Your downloads</p>
            </div>
          </div>
          <div class="accounts_third_part">
            <div>
              <a href="">Royal Electronics Totaltech</a>
            </div>
            <div>
              <a href="">Free Home Consultation</a>
            </div>
            <div>
              <a href="">Member Offers</a>
            </div>
          </div>
          <div class="accounts_fourth_part">
            <div>
              <a href="">Account Settings</a>
              <p>Addresses, password, preferences</p>
            </div>
            <div>
              <a href="">╳ Close</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div id="recently_viewed_btn">
          <p>Recently Viewed</p>
          <i class="material-icons">expand_more</i>
        </div>
        <div id="recently_viewed_dropdown">
          <div id="recently_viewed_pointer" class="pointer"></div>
          <div class="recently_viewed_head">
            <i class="material-icons">history</i>
            <div>
              <h3>Recently Viewed</h3>
            </div>
            <hr />
            <a href="">Manage all your recently viewed items ›</a>
            <p id="recently_viewed_close">╳</p>
          </div>
          <div class="recently_viewed_bottom">
            <div>
              <div>
                <h3>You don't have any recently viewed items ›</h3>
                <p>
                  <a href="">Sign in</a> or <a href="">create an account</a> to
                  see your stuff on all your devices
                </p>
              </div>
              <div>
                <img
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/en_US/images/abn/2015/global/qa2/sh_zs_bs_v2.png;maxHeight=992;maxWidth=260"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div>
        <div id="order_status_btn">
          <p>Order Status</p>
          <i class="material-icons">expand_more</i>
        </div>
        <div id="order_status_dropdown">
          <div id="order_status_pointer" class="pointer"></div>
          <div class="order_status_head">
            <img src="./images/box.png" alt="" />

            <h3>Order Status</h3>

            <p id="order_status_close">╳</p>
          </div>
          <div class="order_status_bottom">
            <div>
              <div>
                <h3>Hi there! Looking for a current order?</h3>
                <p>You'll need to sign in or have your order number handy.</p>
                <button>Continue</button>
              </div>
              <div>
                <img
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/en_US/images/abn/2015/global/qa2/sh_zs_bs_v2.png;maxHeight=992;maxWidth=260"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div id="saved_items_btn">
          <p>Saved Items</p>
          <i class="material-icons">expand_more</i>
        </div>
        <div id="saved_items_dropdown">
          <div id="saved_items_pointer" class="pointer"></div>
          <div class="saved_items_head">
            <img src="./images/saved_items.png" alt="" />
            <h3>Saved Items</h3>
            <a href="">See all yout saved items</a>
            <p id="saved_items_close">╳</p>
          </div>
          <div class="saved_items_bottom">
            <div>
              <div>
                <h3>Looks like you don't have anything saved...</h3>
                <p>When you see something you like, hit "save" and we'll keep track of it here.</p>
                <p>Sign in or create an account to see your stuff on all your devices.</p>
                
              </div>
              <div>
                <img
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/en_US/images/abn/2015/global/qa2/sh_zs_bs_v2.png;maxHeight=992;maxWidth=260"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    `
}

export {topbarFunc}