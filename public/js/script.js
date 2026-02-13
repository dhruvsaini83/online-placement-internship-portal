(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

  //navbar toggler
let navbarToggler = document.getElementsByClassName("navbar-toggler")[0];
let navbar = document.getElementsByClassName("navbar")[0];

navbarToggler.addEventListener("click", () => {
  if (navbar.style.height !== "18rem") {
    navbar.style.transition = "height 0.3s ease";
    navbar.style.height = "18rem";
  } else {
    navbar.style.transition = "height 0.3s ease";
    navbar.style.height = "5rem";

    setTimeout(() => {
      navbar.style.transition = "";
    }, 300);
  }
});