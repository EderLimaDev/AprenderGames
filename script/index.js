const kidsImage = document.querySelector("#back-img");
const buttonNav = document.querySelector(".navbar-toggler");

buttonNav.addEventListener("click", () => {
    kidsImage.classList.toggle("hidden");
    
})


const scrollBtn = document.querySelector(".scroll-btn");

scrollBtn.addEventListener("click", () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;


});

window.addEventListener("scroll", function(){
    scrollBtn.classList.toggle("active", window.scrollY > 500)

})
