setInterval(function(){ 
    document.getElementById('preloader').style.opacity = 0;
    document.getElementById('preloader').style.zIndex = 0
}, 3000);

const services = document.querySelector('#services');
const servicesLinks = document.querySelector('#services-links-menu');
services.addEventListener('click', function(){
    servicesLinks.classList.add('services-links-h');
});