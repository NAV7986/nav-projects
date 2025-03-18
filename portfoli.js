
// toggle

function toggleMenu() {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active");
}


// form submission

document.querySelector('.contact-form').addEventListener('submit',function(e){
    e.preventDefault();
    alert('Thank you for your message')
    this.reset();
});
