var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 640px
        900: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }
  });

  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 640px
        900: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }
  });


  function  scrollToElement(elementSelector, instance =0){
    const elements = document.querySelectorAll(elementSelector);
    if(elements.length > instance){
        elements[instance].scrollIntoView({behavior:"smooth"});
    }
  }

  const link1 = document.getElementById("link1");
  const link2 = document.getElementById("link2");
  const link3 = document.getElementById("link3");
  const link4 = document.getElementById("link4");

  link1.addEventListener("click",() =>{
    scrollToElement(".section2-inner");
  })
  link2.addEventListener("click",() =>{
    scrollToElement(".section3-inner")
  })
  link3.addEventListener("click",() =>{
    scrollToElement(".section4-inner")
  })
  link4.addEventListener("click",() =>{
    scrollToElement('.section5-inner')
  })

  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function(){
        document.querySelector("header").classList.toggle("open")
    })
  })