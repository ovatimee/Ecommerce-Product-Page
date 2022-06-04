const navIcon = document.querySelector(".nav__menu-icon")
const cartIcon = document.querySelector("cart-icon")
navIcon.addEventListener("click", ()=>{
  console.log("clicked")
  const navList = document.querySelector(".nav__list-menu")
  const closeMenu = document.querySelector(".nav-close")
  navList.style.display = "block"
  closeMenu.addEventListener("click", ()=>{
    navList.style.display = "none"
  })
})

cartIcon.addEventListener("click", ()=>{
  const shoppingCart = document.querySelector("shopping-cart")
  
})
