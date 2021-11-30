/*==========menú mostrar y ocultar============*/
const navMenu = document.getElementById('nav-menu'),
 navToggle = document.getElementById('nav-toggle'),
 navClose = document.getElementById('nav-close')

 /*==========mostrar menú============*/
 if (navToggle) {
     navToggle.addEventListener('click',() =>{
         navMenu.classList.add('show-menu')

     })
     
 }
 /*==========ocultar menú============*/
 if (navClose) {
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')

    })
}
/*==========Eliminar menú movil============*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
 const navMenu = document.getElementById('nav-menu')
 navMenu.classList.remove('show-menu')
}
 navLink.forEach(n => n.addEventListener('click', linkAction))

 
 /*==========Acordeon de Habilidades============*/
 const skillsContent = document.getElementsByClassName('skills_content'),
       skillsHeader = document.querySelectorAll('.skills_header')
       
 function toggleSkills(){
     let itemClass = this.parentNode.className

     for(i = 0; i < skillsContent.length; i++){
         skillsContent[i].className = 'skills_content skills_close'
     }
 if (itemClass === 'skills_content skills_close'){
          this.parentNode.className = 'skills_content skills_open'
 }
}
skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

/*==========QUALIFICATION TABS============*/
const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[data-content]')

  tabs.forEach(tab =>{
      tab.addEventListener('click', () =>{
          const target = document.querySelector(tab.dataset.target)

          tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification_active')
          })
          target.classList.add('qualification_active')

          tabs.forEach(tab =>{
              tab.classList.remove('qualification_active')
          })
          tab.classList.add('qualification_active')
      })
  })

/*==========SERVICIOS MODAL============*/
const modalViews = document.querySelectorAll('.services_modal'),
modalBtns = document.querySelectorAll('.services_button'),
modalCloses = document.querySelectorAll('.services_modal-close')

let modal = function(modalClick){
  modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
modalBtn.addEventListener('click', () => {
modal(i)
})
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})
/*======================PORTAFOLIO SWIPER==================*/
let swiperPortafolio = new Swiper('.portafolio_container', {
    cssMode: true,
    loop:true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl:'.swiper-button-prev',
    },
    pagination: {
      el:'.swiper-pagination',
      clickable:true,
    },
  });
/*======================TESTIMONIOS SWIPER==================*/
let swiperTestimonial = new Swiper('.testimonial_container', {
    cssMode: true,
    loop:true,
    autoplay: {
        delay: 5000,
       
      },
    pagination: {
      el:'.swiper-pagination',
      clickable:true,
    },
    breakpoints:{
      568:{
        slidesPerView:2,
      }
    }
  });

/*======================SCROLL SECTIONS ACTIVE LINK==================*/
/*const sections = document.querySelectorAll('section[id]')


function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
     sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
           document.querySelector('.nav_menu a[href*='+ sectionId + ']').classList.add('active-link')
          }else{
            document.querySelector('.nav_menu a[href*='+ sectionId + ']').classList.remove('active-link')  
    }
  })
}
window.addEventListener('scroll', scrollActive)*/
/*================================CAMBIAR ENCABEZADO DE FONDO================*/
function scrollHeader(){
  const nav = document.getElementById('header')

  if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
  //cuando el desplazamiento tiene una altura superior a 200 ventanas, agregue la clase de encabezado de desplazamiento a la etiqueta de encabezado//
}
    window.addEventListener('scroll', scrollHeader)  

/*================================MOSTRAR DESPLAZAMIENTO HACIA ARRIBA================*/
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');

  if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('scroll-header') 
  
  }
window.addEventListener('scroll', scrollUp)

/*================================TEMA OSCURO================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 
'dark-theme'
const iconTheme = 'uil-sun'
//Tema seleccionado previamente (si está seleccionado por el usuario)//
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darktheme) ? 'dark': 'light'
const getCurrentIcon = () => themeButton.classList.contains(icontheme) ? 'uil-moon': 'uil-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () =>{
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  localStorage.setItem('selected-theme',getCurrentTheme())
  localStorage.setItem('selected-icon',getCurrentIcon())
})

/*================================VALIDACION DE CONTACTAME================*/
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const texto = document.querySelectorAll('#formulario textarea');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  message: /^[a-zA-Z0-9-ZÀ-ÿ\s\_\-\.\+\"\,\?\¿\!\¡\;\@]{1,1000}$/
}

const campos = {
  nombre:false,
  email:false,
  message:false
  
}

const validarFormulario = (e) => {
  switch (e.target.name){
    case "nombre":
       validarCampo(expresiones.nombre, e.target, 'nombre');
    break;

    case "email":
      validarCampo(expresiones.email, e.target, 'email');
    break;

    case "message":
      validarCampo2(expresiones.message, e.target, 'message');
      break;
  }
}

const validarCampo = (expresion, input, campo) =>{
  if(expresion.test(input.value)){
    document.getElementById(`grupo-${campo}`).classList.remove('form-box-incorrecto');
    document.getElementById(`grupo-${campo}`).classList.add('form-box-correcto');
    document.querySelector(`#grupo-${campo} i`).classList.add('fa-check-circle');
    document.querySelector(`#grupo-${campo} i`).classList.remove('fa-times-circle');
    document.querySelector(`#grupo-${campo} .formulario_input-error`).classList.remove('formulario_input-error-activo');
    campos[campo] = true;
  }else{
    document.getElementById(`grupo-${campo}`).classList.add('form-box-incorrecto');
    document.getElementById(`grupo-${campo}`).classList.remove('form-box-correcto');
    document.querySelector(`#grupo-${campo} i`).classList.add('fa-times-circle');
    document.querySelector(`#grupo-${campo} i`).classList.remove('fa-check-circle');
    document.querySelector(`#grupo-${campo} .formulario_input-error`).classList.add('formulario_input-error-activo');
    campos[campo] = false;
  }
}

const validarCampo2 = (expresion, textarea, campo) =>{
  if(expresion.test(textarea.value)){
    document.getElementById(`grupo-${campo}`).classList.remove('form-box-incorrecto');
    document.getElementById(`grupo-${campo}`).classList.add('form-box-correcto');
    document.querySelector(`#grupo-${campo} i`).classList.add('fa-check-circle');
    document.querySelector(`#grupo-${campo} i`).classList.remove('fa-times-circle');
    document.querySelector(`#grupo-${campo} .formulario_input-error`).classList.remove('formulario_input-error-activo');
    campos[campo] = true;
  }else{
    document.getElementById(`grupo-${campo}`).classList.add('form-box-incorrecto');
    document.getElementById(`grupo-${campo}`).classList.remove('form-box-correcto');
    document.querySelector(`#grupo-${campo} i`).classList.add('fa-times-circle');
    document.querySelector(`#grupo-${campo} i`).classList.remove('fa-check-circle');
    document.querySelector(`#grupo-${campo} .formulario_input-error`).classList.add('formulario_input-error-activo');
    campos[campo] = false;
  }
}

/*mensajes de formulario de contacto*/
window.addEventListener("DOMContentLoaded",function(){

  var form = document.getElementById('formulario');
  /*var button = document.getElementById("my-form-button");*/
  var status = document.getElementById('formulario_mensaje-exito');

function success(){

  form.reset();
  status.innerHTML = "Formulario enviado exitosamente!";
}
function error(){
  status.innerHTML = " Error: Por favor completar el formulario correctamente";
}

form.addEventListener("submit", function(ev){
  ev.preventDefault();
  var data = new FormData(form);
  ajax(form.method, form.action, data, success, error);
});
});

function ajax(method, url, data, success, error){

  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if(xhr.readyState !== XMLHttpRequest.DONE) return;
    if(xhr.status === 200){
      success(xhr.response, xhr.responseType);

    }else{
      error(xhr.status, xhr.response, xhr.responseType);
    }

    };
    xhr.send(data);
  }


/*formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  if(campos.nombre && campos.email && campos.email && campos.message){
    formulario.reset();

    document.getElementById('formulario_mensaje-exito').classList.add('formulario_mensaje-exito-activo');
    setTimeout(() => {
      document.getElementById('formulario_mensaje-exito').classList.remove('formulario_mensaje-exito-activo');
    },5000);

    document.querySelectorAll('.form-box-correcto').forEach((icono) => {
        icono.classList.remove('form-box-correcto');
           
    });
    document.getElementById('formulario_mensaje').classList.remove('formulario_mensaje-activo');
  }else{
    document.getElementById('formulario_mensaje').classList.add('formulario_mensaje-activo');
  }

});*/








