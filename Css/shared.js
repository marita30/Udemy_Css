                                        /*Es la clase que le definimos en el html  */
var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative');
var selectPlanButtons = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');


    /* Para los botones de los packages  */
    for (var i = 0; i < selectPlanButtons.length; i++) {
        selectPlanButtons[i].addEventListener('click', function() {
            /* modal.style.display = 'block';
            backdrop.style.display = 'block'; */
         /*    modal.className = 'open';   */ /* Esto realmente sobreescribira la lista completa de clases. */
         
         /* classList es un objeto que proporciona algunos metodos auxiliares  */
         modal.classList.add('open');
         backdrop.classList.add('open');
        });
    }


    /* Para cuando no le de click en el botton NO */
    backdrop.addEventListener('click', function() {
      /*   mobileNav.style.display = "none"; */
      mobileNav.classList.remove('open');
        closeModal();
    });

       /* Lo envolvemos en u if para que funcione en los otros idex.html */
    if (modalNoButton) {
        modalNoButton.addEventListener('click', closeModal);
    }
    

    function closeModal() {
       /*  backdrop.style.display = "none";
        modal.style.display = "none"; */
        /* Lo envolvemos en u if para que funcione en los otros idex.html */
        if (modal) {
            modal.classList.remove('open');
        }
        
        backdrop.classList.remove('open');
        
    };

    /* Botton del nav, para cerrar el navegador lateral cuando hacemos click en el fondo */
    toggleButton.addEventListener('click', function() {
       /*  mobileNav.style.display = 'block';
        backdrop.style.display = 'block'; */
        mobileNav.classList.add('open');
        backdrop.classList.add('open');

    });





/* Reescribira las clases que tenemos en los archivos de css */
/* backdrop.style.display = 'block' */
/* console.dir(selectPlanButtons); */