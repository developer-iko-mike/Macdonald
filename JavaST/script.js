const body = document.body
//// let menu = document.querySelector(".menu");
//// let menuBtn = document.querySelector(".header__icon");
//// let menubtnicon = document.querySelector(".header__icon i");
let orderNum = document.getElementById("orderNum");
let numPlas = document.getElementById("numPlas");
let numManfi = document.getElementById("numManfi");
let numManfe = document.getElementById("numManfe");
let numPalas = document.getElementById("numPalas");
let orderNumber = document.getElementById("orderNumber");

// // menuBtn.addEventListener("click", function () {
// //   if (menuBtnIcon.classList.contains("fa-bars")) {
// //     menu.style.left = "0";
// //     menuBtnIcon.classList = "fa-times";
// //   } else {
// //     menu.style.left = "-256px";
// //     menuBtnIcon.classList = "fa fa-bars";
// //   }
// // });
// // orderNum.innerHTML = 0

function orderPalasHandler(event){
       orderNum.innerHTML++;
       if (event.keyCode === 107){
              orderNum.innerHTML++;
       }
       if (orderNum.innerHTML > 99){
              orderNum.innerHTML = 0
       }
}

function orderManfiHandler(event){
       orderNum.innerHTML--;
       if (event.keyCode === 109){
              orderNum.innerHTML--;
       }
       if (orderNum.innerHTML < 0){
              orderNum.innerHTML = 0
       }
}

body.addEventListener('keydown' , orderManfiHandler)
body.addEventListener('keydown' , orderPalasHandler)
numPlas.addEventListener('click' , orderPalasHandler)
numPalas.addEventListener('click' , orderPalasHandler)
numManfi.addEventListener('click' , orderManfiHandler)
numManfe.addEventListener('click' , orderManfiHandler)