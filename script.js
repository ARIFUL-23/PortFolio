const header = document.querySelector("header");

window.addEventListener("scroll",function()
{
header.classList.toggle("sticky", this.window.scrolly>120);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};






(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "S5XOmpMHgiYlEJRgs",
    });
})();


window.onload = function() {
    form = document.getElementById('contact-form-form');
    document.getElementById('contact-form-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(() => {
                form.reset();
                console.log('SUCCESS!');
            }, (error) => {
              console.log('FAILED...', error);
            });
    });}