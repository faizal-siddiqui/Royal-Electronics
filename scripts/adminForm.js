import { navbar } from "./components/navbar.js";

let navbar_div = document.getElementById('navbar');
navbar_div.innerHTML = navbar();

//d48c35ebdaebb2bb9ac8b47ca7715430

//add event handler to create post button

let create_btn = document.getElementById('create_btn');
create_btn.onclick = () => {
    //submitting a post to server
    createPost();
};

//add event handler on select file input

let inp_image = document.getElementById('image');
inp_image.onchange = () => {
    handleImage()
};

let image_url;

//function to get the url for local images
const handleImage = async() => {

    //1. accept the file(image)
    let img = document.getElementById('image');
    //console.log('img:', img)
    //2. access the image data
    let actual_img = img.file[0];
    //console.log('actual_img:', actual_img)

    //3. imgb is asking to send data in formdata object
    let form = new FormData();
    form.append('image', actual_img);

    //lets make the post request
    let res = await fetch(`https://api.imgbb.com/1/upload?key=d48c35ebdaebb2bb9ac8b47ca7715430`, {
        method: 'POST',
        body: form,
    });
    let data = await res.json();
   // console.log('data:', data);

   image_url = data.data.display_url;
};

const createPost = async () => {

    //1. grab all the data

    let id = document.getElementById('id').value;
    let caption = document.getElementById('caption').value;

    //2. pack all data to be sent in object
    let send_this_data = {
        id,
        caption,
        image_url,
    };

    //json -server package.

    let res = await fetch('http://localhost:3000/posts', {
        method: 'POST',
        body:JSON.stringify(send_this_data),

        headers: {
            'Content-Type': 'application/json',
        },
    });
    let data = await res.json();
    console.log('data:', data);
};