setTimeout(function(){ 
    console.log('i am running');
    document.getElementById('preloader').style.opacity = 0;
    // document.getElementById('preloader').style.zIndex = 0;
    setTimeout(function(){
        document.getElementById('preloader').style.display = 'none';
     }, 1000)
}, 3000);

const services = document.querySelector('#services');
const servicesLinks = document.querySelector('#services-links-menu');

services.addEventListener('click', function(){
    servicesLinks.classList.toggle('services-links-h');
});
