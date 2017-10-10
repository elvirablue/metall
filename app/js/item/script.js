$(document).on('ready', function(){ 

    $("input[name^='user-phone']").mask("+7 (999) 999-9999");

    $('.nav.navbar-nav a').click(function () { 
            var el = $(this).attr('href');
            $('html,body').animate({scrollTop: $(el).offset().top - 100}, 600);
            return false;
      });
 
      $('.btn-up').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
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