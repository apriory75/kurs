const slider = document.querySelector('.swiper-container');
const slider1 = document.querySelector('.swiper-container1');
const slider2 = document.querySelector('.swiper-container2');
const slider3 = document.querySelector('.swiper-container3');
const slider4 = document.querySelector('.swiper-container4');
let mySwiper = new Swiper(slider, {  
    
        pagination: {
          el: '.pag-1',
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
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
   
      // Default parameters
      slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        1200: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 640px
        1600: {
          slidesPerView: 3,
          spaceBetween: 50
        }
      }
   
})
  let mySwiper1 = new Swiper(slider1, {  
    slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
        
         
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
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    920: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1600: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  }
})
  let mySwiper2 = new Swiper(slider2, {  
    slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
        
          clickable: true,
          slideToClickedSlide: true,
         
    
          autoplay: {
            delay: 5000,
          },
  loop: true,
  
    
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    920: {
      slidesPerView: 3,
      spaceBetween: 35
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    1600: {
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
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      920: {
        slidesPerView: 2,
        spaceBetween: 45
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 2,
        spaceBetween: 50
      },
      1600: {
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
      nextEl: '.pr',
      prevEl: '.nx',
    },
    // autoplay: {
    //     delay: 5000,
    //   },
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
        spaceBetween: 50
      }
    }
  })
  const element = document.querySelector('#selectCustom');
  const choices = new Choices(element, {

  searchEnabled: false,
   
  });
  $( function() {
    $( "#accordion" ).accordion({
        active: true,
      collapsible: true,
      
    });
    $( ".selector" ).accordion( "refresh" );
  } );
  $( ".selector" ).accordion({
classes: {
"ui-accordion": "highlight"
}
});
var themeClass = $( ".selector" ).accordion( "option", "classes.ui-accordion" );

// Setter
$( ".selector" ).accordion( "option", "classes.ui-accordion", "highlight" );
  $( ".selector" ).accordion({
  create: function( event, ui ) {}
});
$( ".selector" ).on( "accordioncreate", function( event, ui ) {} );
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
            hintContent: 'Собственный значок метки',
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
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'А эта — новогодняя',
            iconContent: '12'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/metka.svg',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
myMap.panes.get('ground').getElement().style.filter = 'grayscale(100%)'
        }