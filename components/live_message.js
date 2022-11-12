function live_message(){
    return `
    <div>

        <img id="show_drop_up" src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/BA_photo_beacon-217711.png" alt="">
        <div id="open_window">
          <div>
            <div>
              <h5>Royal Electronics Help</h5>
              <p id="close_message">✕</p>
            </div>
            <div>
              <i class="material-icons">sms</i>
              <h5>Hi, how can I help you?</h5>
            </div>
            <div id="message_append"></div>
            <div>
              <input type="text" id="user_message" placeholder="Ask your question">
              <button><i class="material-icons">send</i></button>
            </div>
          </div>
        </div>
      </div>
    `
}

export {live_message}