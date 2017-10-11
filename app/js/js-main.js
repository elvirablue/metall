  
$(document).on('ready', function(){ 
//******************модальные окна для форм**************************************************

     
  
   
    var popup_wrapper = document.querySelector('.modal_wrapper');
    var popup;
    var close;

    
    

    $('.js-modal-open').click(function(event){
          event.preventDefault();

          popup = document.querySelector('.js-modal');
          close = popup.querySelector('.modal_close');          
          popup.querySelector('.modal__title').innerText = this.getAttribute('data-title-modal');    
          PopupShow(event);
          var heightModal = $('.js-modal').height();
          popup.style.marginTop = '-' + heightModal/2 + 'px';
          var width = screen.width;
          var heght = screen.height;
          if (width < 770) {
            var coords = this.getBoundingClientRect();
            var top = window.pageYOffset + coords.top;
            popup.style.marginTop = top + 'px';
            if (top < 110) popup.style.marginTop = '110px';
            popup.style.position = 'absolute !important';
          }
         
    });

    function PopupShow(event) {
          event.preventDefault();
          popup.classList.remove('zoomOut');
          popup_wrapper.classList.remove('fadeOut');
          popup.classList.add('show', 'zoomIn');
          popup_wrapper.classList.add('show', 'fadeIn');
          
    };
   

    function closePopup() {
          if (popup.classList.contains('show')) {
                popup.classList.add('zoomOut');
                popup_wrapper.classList.add('fadeOut');
                setTimeout(function(){
                      popup.classList.remove('show', 'zoomIn' );      
                      popup_wrapper.classList.remove('show', 'fadeIn');
                }, 100);
                
          };
          
    }

    window.addEventListener('keydown', function(event) {
          if (event.keyCode === 27) {
                closePopup();
          };
    });

     $('.modal_wrapper').click(function(event) {
          closePopup();
          
    });
 
    $('.modal_close').click(function(event) {
          event.preventDefault();
          closePopup();
    });


});
$(document).on('ready', function(){ 

    $("input[name^='user-phone']").mask("+7 (999) 999 99 99");

    $('.nav.navbar-nav a').click(function () { 
            var el = $(this).attr('href');
            $('html,body').animate({scrollTop: $(el).offset().top - 100}, 600);
            return false;
      });
 
      $('.btn-up').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
      }); 

    var navMain = document.querySelectorAll('.navbar-scroll');    
    var start_pos = navMain[0].offsetTop + 600; 
    var FLAG_visible_scroll_menu = false;  


    $(window).scroll(function(){

      if ($(window).scrollTop() > start_pos && !FLAG_visible_scroll_menu) {
            if ($('.navbar-scroll').hasClass('to_top')==false) {                        
                  $('.navbar-scroll').addClass('to_top');
                  $('.navbar-scroll').slideDown(600);
                  FLAG_visible_scroll_menu = true;
            } 
      } 

      if ($(window).scrollTop() < start_pos && FLAG_visible_scroll_menu) {
                   $('.navbar-scroll').slideUp(100, function() {
                      $('.navbar-scroll').removeClass('to_top');               
                      FLAG_visible_scroll_menu = false;
                   });
                  
               
            };

    });   



    $('#js-open-range-info1').click(function(even){ $('#range1').fadeIn('slow');});
    $('#js-open-range-info2').click(function(even){ $('#range2').fadeIn('slow'); });
    $('#js-open-range-info3').click(function(even){ $('#range3').fadeIn('slow'); });

    $('#js-close-range-info1').click(function(even){ event.preventDefault(); $('#range1').fadeOut('slow');});
    $('#js-close-range-info2').click(function(even){ event.preventDefault(); $('#range2').fadeOut('slow'); });
    $('#js-close-range-info3').click(function(even){ event.preventDefault(); $('#range3').fadeOut('slow'); });

    $('#js-open-service-info1').click(function(even){ $('#service1').fadeIn('slow'); });
    $('#js-open-service-info2').click(function(even){ $('#service2').fadeIn('slow'); });
    $('#js-open-service-info3').click(function(even){ $('#service3').fadeIn('slow'); });
    $('#js-open-service-info4').click(function(even){ $('#service4').fadeIn('slow'); });
    $('#js-open-service-info5').click(function(even){ $('#service5').fadeIn('slow'); });
    $('#js-open-service-info6').click(function(even){ $('#service6').fadeIn('slow'); });

    $('.js-close-service-info1').click(function(even){ event.preventDefault(); $('#service1').fadeOut('slow');});
    $('.js-close-service-info2').click(function(even){ event.preventDefault(); $('#service2').fadeOut('slow'); });
    $('.js-close-service-info3').click(function(even){ event.preventDefault(); $('#service3').fadeOut('slow'); });
    $('.js-close-service-info4').click(function(even){ event.preventDefault(); $('#service4').fadeOut('slow');});
    $('.js-close-service-info5').click(function(even){ event.preventDefault(); $('#service5').fadeOut('slow'); });
    $('.js-close-service-info6').click(function(even){ event.preventDefault(); $('#service6').fadeOut('slow'); });




    function scrollToElement(theElement) {
    if (typeof theElement === "string") theElement = document.getElementById(theElement);

        var selectedPosX = 0;
        var selectedPosY = 0;

        while (theElement != null) {
            selectedPosX += theElement.offsetLeft;
            selectedPosY += theElement.offsetTop;
            theElement = theElement.offsetParent;
        }

        window.scrollTo(selectedPosX, selectedPosY);
    }


	var owl1 = $('.range__slider');

    owl1.owlCarousel({
        loop:true,//Зацикливаем слайдер
        margin:20,
        dots:true,       
        autoplay:false, //Автозапуск слайдера
        smartSpeed:1000, //Время движения слайда
        autoplayTimeout:50, //Время смены слайда
        responsiveClass:true,        
        responsive:{
             0:{
                 items:1,
                 nav:false
             },
             600:{
                 items:1,
                 nav:false
             },
             1230:{
                 items:1,
                 nav:false
             }
        }
    });

  //*****************



});