const hamburger =document.getElementById('hamburger');
const navMenu= document.getElementById('nav-menu');
const closeIcon= document.getElementById('nav-close');
const navLink= document.querySelectorAll('nav-link');

navLink.forEach(link=>
    link.addEventListener('click',()=>{
        navMenu.classList.add('hidden')
    }) 
)
closeIcon.addEventListener('click',()=>{
    navMenu.classList.add('hidden')
})
hamburger.addEventListener('click', ()=>{
    navMenu.classList.remove('hidden');
})
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('about-us').classList.add('loaded');

    // Image changing functionality
    const images = [
      'image/axum.png',
      'image/simen.png',
      'image/lalibela.png',
      'image/harar.png',
      'image/gonder.png'
    ];
    let currentIndex = 0;
    const imageElement = document.getElementById('about-image');

    function changeImage() {
      currentIndex = (currentIndex + 1) % images.length;
      imageElement.classList.remove('opacity-100');
      setTimeout(() => {
        imageElement.src = images[currentIndex];
        imageElement.classList.add('opacity-100');
      }, 1000); // Time for the fade-out effect
    }

    setInterval(changeImage, 5000); // Change image every 5 seconds
  });


  
  document.addEventListener('DOMContentLoaded', () => {
    // Array of background images
    const images = [
        'image/axum.png',
        'image/abay.png',
        'image/lalibela.png',
        'image/harar.png',
        'image/gonder.png'
    ];
    let currentIndex = 0;
    const sectionElement = document.getElementById('home');
  
    function changeBackgroundImage() {
        currentIndex = (currentIndex + 1) % images.length;
        sectionElement.classList.add('fade');
        sectionElement.style.setProperty('--new-bg', `url(${images[currentIndex]})`);
    
        setTimeout(() => {
          sectionElement.style.backgroundImage = `url(${images[currentIndex]})`;
          sectionElement.classList.remove('fade');
        }, 1000); // Time for the fade-out effect
      }
    
      setInterval(changeBackgroundImage, 3000); // Change image every 5 seconds
    });