let intro = document.getElementsByClassName('intro')
intro[0].addEventListener('click', function(){
let flipbook = document.getElementsByClassName('transition')
for(let i = 0; i < flipbook.length; i++){
    flipbook[i].classList.add('transition_active')
}
});

// // revealed content
// function scrollToDropdownContent() {
//     const dropdownContent = document.querySelector(".transition");

//     if (dropdownContent) {

//         const scrollPosition = dropdownContent.offsetTop + (dropdownContent.clientHeight / 2)

//         window.scrollTo({ top: scrollPosition, behavior: "smooth" });
//     }
// }

