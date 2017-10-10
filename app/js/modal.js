  
$(document).on('ready', function(){ 
//******************модальные окна для форм**************************************************

     
  
   
    var popup_wrapper = document.querySelector('.modal_wrapper');
    var popup;
    var close;    
    

    $('.js-btn-modal-2').click(function(event){
          event.preventDefault(); 
          var text =  popup.querySelector('h3').innerText + " - " + this.innerText; 
          closePopup();
          setTimeout(function(){
            popup = document.querySelector('.js-modal');
            close = popup.querySelector('.modal_close');
            popup.querySelector('.modal__title').innerText = text;
            popup.style.top = '50%'; 
            popup.style.bottom = 'auto';
            popup.style.marginTop = '-150px';  
               
          PopupShow(event);
          }, 150);
          
    });

    $('.js-btn-modal').click(function(event){
          event.preventDefault();

          popup = document.querySelector('.js-modal');
          close = popup.querySelector('.modal_close');
          popup.style.height = 'auto';
          popup.style.top = '50%'; 
          popup.style.marginTop = '-150px'; 
           popup.style.bottom = 'auto';   
          popup.querySelector('.modal__title').innerText = this.innerText;    
          PopupShow(event);
         
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

    popup_wrapper.addEventListener('click', function(event) {
          closePopup();
          
    });
 
    $('.modal_close').click(function(event) {
          event.preventDefault();
          closePopup();
    });


});