
// MESSAGE WINDOW


function message_script(){
    let show_drop_up = document.getElementById("show_drop_up")
    show_drop_up.onclick = () => {
      document.getElementById("open_window").style.display = "block"
      
    }
    
    let close_message = document.getElementById("close_message")
    close_message.onclick = () => {
      document.getElementById("open_window").style.display = "none"
    
    }
}

export {message_script}
