
var menu = document.querySelector('.sg-menuBar')
const nav = document.querySelector('nav');

window.addEventListener('scroll',() => {
  if(window.scrollY >= 50){
    nav.classList.add('active-nav');
  }else{
    nav.classList.remove('active-nav');
  }
})


const hamburger = document.querySelector('.sg-hamburger');

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");

})

document.querySelectorAll('.sg-navLink').forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active")
  menu.classList.remove("active")
}))


