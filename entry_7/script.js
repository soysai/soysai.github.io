let dropdown = document.getElementsByClassName('dropdown')
dropdown[0].addEventListener('click', function(){
let container = document.getElementsByClassName('transition')
for(let i = 0; i < container.length; i++){
    container[i].classList.add('transition_active')
}
});

let dropdown2 = document.getElementsByClassName('dropdown2')
dropdown2[0].addEventListener('click', function(){
let dialog = document.getElementsByClassName('transition2')
for(let i = 0; i < dialog.length; i++){
    dialog[i].classList.add('transition2_active')
}
});

//with the help of chatGPT

const showImageButton = document.getElementById('show-image-button');
const imageContainer = document.getElementById('imagecontainer');

// Add a click event listener to the button
showImageButton.addEventListener('click', () => {
    // Toggle the visibility of the image container
    if (imageContainer.style.display === 'none') {
        imageContainer.style.display = 'block';
    } else {
        imageContainer.style.display = 'none';
    }
});



