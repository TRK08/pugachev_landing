const accordionItem = document.querySelectorAll(".accordion__item");



accordionItem.forEach((el) =>

  el.addEventListener("click", () => {

    if (el.classList.contains("active")) {

      el.classList.remove("active");

    } else {

      accordionItem.forEach((item) => item.classList.remove("active"));

      el.classList.add("active");

    }

  })

);





new WOW().init();







function scrollTo(element) {

  window.scroll({

    left: 0, 

    top: element.offsetTop, 

    behavior: 'smooth'

  })

}



const headerBtn = document.querySelector('.header__btn');

const priceBtn = document.querySelectorAll('.item__btn-link');

const price = document.querySelector('#price');

const subscribe = document.querySelector('#subscribe');



headerBtn.addEventListener('click', () => {

  scrollTo(price);

})



priceBtn.forEach((e) => 

  e.addEventListener('click', () => {

    scrollTo(subscribe);

  })

);







var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  autoplay: true,
  infinite: true,
  effect: 'fade',
  speed: 1000,
});





