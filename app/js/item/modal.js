  
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

    $('.js-modal-call-open').click(function(event){
      event.preventDefault();

      popup = document.querySelector('.js-modal-call');
      close = popup.querySelector('.modal_close');          
      popup.querySelector('.modal__title').innerText = this.getAttribute('data-title-modal');    
      PopupShow(event);
      var heightModal = $('.js-modal-call').height();
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