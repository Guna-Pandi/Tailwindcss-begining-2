const Hamburger = document.querySelector("#hamburger");
const Menu = document.querySelector("#menu");
const Hlink = document.querySelector("#hlink");
const FaBars = document.querySelector(".fa-bars");

Hamburger.addEventListener('click', () => {
    Menu.classList.toggle('hidden');
    FaBars.classList.toggle('fa-xmark');
  });
  
  Hlink.forEach(link => {
    link.addEventListener('click',()=>{
        Menu.classList.toggle('hidden');
    FaBars.classList.toggle('fa-xmark');

    })
  });