window.addEventListener('scroll', function() {
    const nav2 = document.querySelector('.nav2');
    if (window.scrollY > 20) {
        nav2.classList.add('scrolled');
    } 
    else {
        nav2.classList.remove('scrolled');
    }
});

function filter(category) {
    console.log('Category:', category); 
  
    const cards = document.querySelectorAll('.cont4 .card');
    cards.forEach(card => {
      const categories = card.getAttribute('data-category').split(',').map(cat => cat.trim());
      console.log('Card Categories:', categories); 
      if (category === 'all' || categories.includes(category)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }
  
  const carouselTrack = document.querySelector('.carousel-track');
  const images = Array.from(carouselTrack.children);
  
  images.forEach(img => carouselTrack.appendChild(img.cloneNode(true)));
  
  let currentIndex = 0;
  const imageWidth = images[0].clientWidth + 10; 
  
  function slideCarousel() {
    currentIndex++;
    
    carouselTrack.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    
    if (currentIndex >= images.length) {
      setTimeout(() => {
        carouselTrack.style.transition = 'none'; 
        currentIndex = 0;
        carouselTrack.style.transform = `translateX(0)`;
        
        setTimeout(() => carouselTrack.style.transition = 'transform 0.5s linear');
      }, 500); 
    }
  }
  
  setInterval(slideCarousel, 3000); 
  
  const button = document.querySelector('.scroll-to-top');

  window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      button.style.display = "block";
    } 
    else {
      button.style.display = "none"; 
    }
  };

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  $(document).ready(function(){
    $('.card-slider').slick({
      slidesToShow: 3,          
      slidesToScroll: 1,         
      autoplay: true,            
      autoplaySpeed: 4000,       
      infinite: true,            
      arrows: false,             
      dots: true,               
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });


