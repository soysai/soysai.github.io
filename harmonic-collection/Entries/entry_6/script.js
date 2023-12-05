let intro = document.getElementsByClassName('intro')
intro[0].addEventListener('click', function(){
let flipbook = document.getElementsByClassName('transition')
for(let i = 0; i < flipbook.length; i++){
    flipbook[i].classList.add('transition_active')
}
});


