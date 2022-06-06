const navIcon = document.querySelector(".nav__menu-icon");
const cartIcon = document.querySelector(".cart-icon");
navIcon.addEventListener("click", () => {
  const navList = document.querySelector(".nav__list-menu");
  const closeMenu = document.querySelector(".nav-close");
  navList.style.display = "block";
  closeMenu.addEventListener("click", () => {
    navList.style.display = "none";
  });
});

cartIcon.addEventListener("click", () => {
  console.log("clicked");
  const shoppingCart = document.querySelector(".shopping-cart");
  shoppingCart.classList.toggle("cart-active");
});

document.querySelector(".cart-items");

let thumbnail = document.querySelectorAll(".thumbnail");

for (let i = 0; i < thumbnail.length; i++) {
  thumbnail[i].addEventListener("click", () => {
    
let activeImages = document.querySelectorAll(".active")

    if(activeImages.length > 0){
      activeImages[0].classList.remove('active')
    }

    thumbnail[i].classList.add("active")
    document.querySelector(".product-image").src = thumbnail[i].src.replace('-thumbnail', '')
    
  });
}
    let leftBtn =  document.querySelector(".nav__btn-left")
    leftBtn.addEventListener("click", ()=>{
      console.log('click')
    })
    let rightBtn = document.querySelector(".nav__btn-right")
    rightBtn.addEventListener("click", ()=>{
      console.log("click")
    })
