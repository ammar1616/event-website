// import Swal from "./node_modules/sweetalert2/dist/sweetalert2.all";
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
let ticket_container = document.getElementById('ticket_container');
let form_section = document.getElementById('form_section')
let btn_close = document.getElementById('btn-close');
let ticket_input = document.getElementById('ticket_input');
let submit = document.getElementById('submit');
let tickets = [
  {
    "price":0,
    "name":"Ticket 1",
    "features":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet alias maxime excepturi tempora ea beatae distinctio saepe quae dolore molestias adipisci sequi ut eum quia reprehenderit dolorum, iusto omnis quos."
  },
  {
    "price":0,
    "name":"Ticket 2",
    "features":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet alias maxime excepturi tempora ea beatae distinctio saepe quae dolore molestias adipisci sequi ut eum quia reprehenderit dolorum, iusto omnis quos."
  },
  {
    "price":0,
    "name":"Ticket 3",
    "features":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet alias maxime excepturi tempora ea beatae distinctio saepe quae dolore molestias adipisci sequi ut eum quia reprehenderit dolorum, iusto omnis quos."
  },
]
      tickets.forEach((item)=>{
              ticket_container.innerHTML += ` <div class="ticket mt-5 col-md-3 col-12 p-3">
              <h2>${item.name}</h2>
              <hr>
              <h3>Price : ${item.price} L.E</h3>
              <hr>
              <p>Features : </p><br>
              <p>${item.features}</p>
              <hr>
              <button id="ticket_btn" data_name="${item.name}" class="btn1 m-auto">Buy This</button>
            </div>`
      })
let ticket_btn =Array.from(document.querySelectorAll('#ticket_btn'))
ticket_btn.forEach((item)=>{
  item.addEventListener("click",(e)=>{
    console.log(item.getAttribute("data_name"));
    form_section.classList.add("d-flex")
    form_section.classList.remove("d-none")
    ticket_input.value = item.getAttribute("data_name")

  })
})
btn_close.addEventListener("click",()=>{
  form_section.classList.remove("d-flex")
  form_section.classList.add("d-none")
})

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.onclick = () =>{
  themeToggler.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  themeToggler.classList.remove('active');
}

document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn =>{
  
  btn.onclick = () =>{
    let color = btn.style.background;
    document.querySelector(':root').style.setProperty('--main-color', color);
  }

});

var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop:true,
  autoplay:{
    delay: 3000,
    disableOnInteraction:false,
  }
});

var swiper = new Swiper(".review-slider", {
    slidesPerView: 1,
    grabCursor: true,
    loop:true,
    spaceBetween: 10,
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1050: {
        slidesPerView: 3,
      },    
    },
    autoplay:{
      delay: 5000,
      disableOnInteraction:false,
  }
});