                                        /*Es la clase que le definimos en el html  */
var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative')
var selectPlanButtons = document.querySelectorAll('.plan button');


    /* Para los botones de los packages  */
    for (var i = 0; i < selectPlanButtons.length; i++) {
        selectPlanButtons[i].addEventListener('click', function() {
            modal.style.display = 'block'
            backdrop.style.display = 'block'
        });
    }


    /* Para cuando no le de click en el botton NO */
    backdrop.addEventListener('click', closeModal);
    modalNoButton.addEventListener('click', closeModal);

    function closeModal() {
        backdrop.style.display = 'none'
        modal.style.display = 'none'
        
    };





/* Reescribira las clases que tenemos en los archivos de css */
/* backdrop.style.display = 'block' */
/* console.dir(selectPlanButtons); */