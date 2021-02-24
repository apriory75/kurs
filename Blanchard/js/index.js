
const slider = document.querySelector('.swiper-container');
const slider1 = document.querySelector('.swiper-container1');
const slider2 = document.querySelector('.swiper-container2');

const slider3 = document.querySelector('.swiper-container3');
const slider4 = document.querySelector('.swiper-container4');
let mySwiper1 = new Swiper(slider1, {  
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

   
    pagination: {
      el: '.pag-1',
      type: 'fraction',
      clickable: true,
      slideToClickedSlide: true,
},
  //   autoplay: {
  //     delay: 5000,
  //   },
loop: true,
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},

breakpoints: {
// when window width is >= 320px
320: {
slidesPerView: 2,
spaceBetween: 20
},
768: {
slidesPerView: 2,
spaceBetween: 30
},
1024: {
slidesPerView: 2,
spaceBetween: 35
},
// when window width is >= 480px
1400: {
slidesPerView: 2,
spaceBetween: 50
},
// when window width is >= 640px
1690: {
slidesPerView: 3,
spaceBetween: 50
}
}
})
  let mySwiper2 = new Swiper(slider2, {  
    slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
        keyboard: {
          enabled: true,
          onlyInViewport: false,
          pageUpDown: true,
        },
         
          pagination: {
            el: '.pag-1',
            type: 'fraction',
            clickable: true,
            slideToClickedSlide: true,
      },
        //   autoplay: {
        //     delay: 5000,
        //   },
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
    
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 35
    },
    // when window width is >= 480px
    1400: {
      slidesPerView: 2,
      spaceBetween: 50
    },
    // when window width is >= 640px
    1690: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  }
})
  
  let mySwiper3 = new Swiper(slider3, {  
    slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 50,
        pagination: {
          el: '.pag-2',
          type: 'fraction',
          clickable: true,
          slideToClickedSlide: true,
    },
  loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // autoplay: {
    //     delay: 5000,
    //   },
    breakpoints: {
      // when window width is >= 320px
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      920: {
        slidesPerView: 2,
        spaceBetween: 45
      },
      // when window width is >= 640px
      1600: {
        slidesPerView: 2,
        spaceBetween: 50
      },
      1700: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    }
  })
  let mySwiper4 = new Swiper(slider4, {  
    slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
       
          clickable: true,
          slideToClickedSlide: true,
    
  loop: true,
    navigation: {
      nextEl: '.nx',
      prevEl: '.pr',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      920: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 2,
        spaceBetween: 50
      },
      1600: {
        slidesPerView: 3,
        spaceBetween: 57
      }
    }
  })
  // selekt
  const element = document.querySelector('#selectCustom');
  const choices = new Choices(element, {

  searchEnabled: false,
   
  });
  // accordion
  $( function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });
  } );
  $( ".ui-accordion-header" ).accordion( "refresh" );
// yandex maps

    // Функция ymaps.ready() будет вызвана, когда
        // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
        ymaps.ready(init);
        function init(){
            // Создание карты.
            var myMap = new ymaps.Map("myMap1", {
                // Координаты центра карты.
                // Порядок по умолчанию: «широта, долгота».
                // Чтобы не определять координаты центра карты вручную,
                // воспользуйтесь инструментом Определение координат.
                center: [55.75786715778723,37.61982277659597],
                // Уровень масштабирования. Допустимые значения:
                // от 0 (весь мир) до 19.
                zoom: 16
            });
            
            // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Шоурум №4',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/metka.svg',
            // Размеры метки.
            iconImageSize: [28, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([55.75846306898368,37.601079499999905], {
            
        
        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
myMap.panes.get('ground').getElement().style.filter = 'grayscale(100%)'
        }
        // validation
        var selector = document.querySelector("input[type='tel']");
        var im = new Inputmask("+7 (999) 999-99-99");

        im.mask(selector);
        
        new JustValidate('.form', {
            rules: {
               name: {
                required: true,
                minLength: 2,
                maxLength: 10
              },
              tel: {
                required: true,
                function: (name, value) => {
                    const phone = selector.Inputmask.unmaskedvalue()
                    return Number(phone) && phone.length === 10
                }
              },

              mail: {
                required: true,
                email: true
              },
            },
        });
        // socsety
        Share = {
          vkontakte: function(purl, ptitle, pimg, text) {
            url  = 'http://vkontakte.ru/share.php?';
            url += 'url='          + encodeURIComponent(purl);
            url += '&title='       + encodeURIComponent(ptitle);
            url += '&description=' + encodeURIComponent(text);
            url += '&image='       + encodeURIComponent(pimg);
            url += '&noparse=true';
            Share.popup(url);
          },
          facebook: function(purl, ptitle, pimg, text) {
            url  = 'http://www.facebook.com/sharer.php?s=100';
            url += '&p[title]='     + encodeURIComponent(ptitle);
            url += '&p[summary]='   + encodeURIComponent(text);
            url += '&p[url]='       + encodeURIComponent(purl);
            url += '&p[images][0]=' + encodeURIComponent(pimg);
            Share.popup(url);
          },
          instagram: function(purl, ptitle, pimg, text) {
            url  = 'http://instagram.com/###?ref=badge';
            url += '&p[title]='     + encodeURIComponent(ptitle);
            url += '&p[summary]='   + encodeURIComponent(text);
            url += '&p[url]='       + encodeURIComponent(purl);
            url += '&p[images][0]=' + encodeURIComponent(pimg);
            Share.popup(url);
          },
          popup: function(url) {
            window.open(url,'','toolbar=0,status=0,width=626,height=436');
          }
        };
        // плавный скролл
        $(document).ready(function() {
          $("a.header-first__list-link").click(function() {
            var elementClick = $(this).attr("href")
            var destination = $(elementClick).offset().top;
            jQuery("html:not(:animated),body:not(:animated)").animate({
              scrollTop: destination
            }, 1600);
            return false;
          });
        });
        $(document).ready(function() {
          $("a.hero__first-btn").click(function() {
            var elementClick = $(this).attr("href")
            var destination = $(elementClick).offset().top;
            jQuery("html:not(:animated),body:not(:animated)").animate({
              scrollTop: destination
            }, 1600);
            return false;
          });
        });
        // художники
        function l_image (a) {
          document.artist_img.src = a;
      }
      document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('.catalog__accord-text').forEach(function(accordTxt) {
          accordTxt.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.artist').forEach(function(tabArtist) {
              tabArtist.classList.remove('artist_active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('artist_active')
          })
        })
                  });
      // Бургер меню
      document.querySelector('#burger').addEventListener('click', function(){
        document.querySelector('#menu').classList.toggle('is-active')
   
        })
      
       $( document ).ready(function() {
   
   
           $( ".header-first__menu" ).hide();
           $( ".header-first__burger" ).click(function() {
           $( ".header-first__menu" ).slideToggle( "slow", function() {
           
           
           });
           });
           });
          //  Табы
          document.addEventListener('DOMContentLoaded', function() {
document.querySelectorAll('.catalog__flag-tab').forEach(function(tabsBtn) {
  tabsBtn.addEventListener('click', function(event) {
    const path = event.currentTarget.dataset.path
    document.querySelectorAll('.tab-content').forEach(function(tabContent) {
      tabContent.classList.remove('tab-content-active')
    })
    document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
  })
})
          });
        
