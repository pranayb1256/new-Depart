document.addEventListener("DOMContentLoaded", function () {
    // Toggle navbar menu
    function toggleMenu() {
      const navLinks = document.getElementById("nav-links");
      navLinks.classList.toggle("active");
    }
  
    // Sticky header on scroll
    window.addEventListener("scroll", function () {
      const header = document.querySelector(".header-container");
      header.classList.toggle("sticky", window.scrollY > 0);
    });
  
    // Hamburger menu toggle
    const toggle = document.getElementById("toggle");
    if (toggle) {
      toggle.onclick = function () {
        const navLinks = document.getElementById("nav-links");
        if (navLinks.style.display === "block") {
          navLinks.style.display = "none";
        } else {
          navLinks.style.display = "block";
        }
      };
    }
  
    // Function to animate counters
    function animateCounter(id, start, end, duration) {
      const element = document.getElementById(id);
      if (!element) return;
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  
    // Initialize counter animations on window load
    window.onload = () => {
      animateCounter("totalStudents", 0, 420, 2000);
      animateCounter("firstYear", 0, 120, 2000);
      animateCounter("secondYear", 0, 120, 2000);
      animateCounter("thirdYear", 0, 120, 2000);
      animateCounter("fourthYear", 0, 60, 2000);
    };
  
    // Carousel events array
    const events = [
      {
        imgSrcs: ["Image2/IMG_4095.jpg", "Image2/IMG_4098.jpg"],
        altText: "Stress Relief Program",
        title: "Stress Relief Program",
        description: "Join us for a relaxing day filled with mindfulness exercises, yoga sessions, and meditation to help you unwind and destress."
      },
      {
        imgSrcs: ["Image2/IMG_4274.jpg", "Image2/IMG_4276.jpg", "Image2/IMG_4303.jpg"],
        altText: "Independence Day Celebration",
        title: "Independence Day Celebration",
        description: "Celebrate our nation's independence with a day of fun activities, food, and fireworks. Join us for a memorable day!"
      },
      {
        imgSrcs: ["Image2/IMG_1070.jpg", "Image2/IMG_1069.jpg", "Image2/IMG_1160.jpg"],
        altText: "Creative Fusion Workshop",
        title: "Creative Fusion Workshop",
        description: "Explore your creativity in this hands-on workshop where art, music, and technology blend together. Suitable for all skill levels!"
      },
      {
        imgSrcs: ["Image2/IMG_5004.jpg", "Image2/IMG_5044.jpg"],
        altText: "Teacher's Day Celebration",
        title: "Teacher's Day Celebration",
        description: "Celebrate the amazing teachers who inspire us every day! Join us for fun activities, heartfelt speeches, and a chance to express our gratitude."
      }
    ];
  
    // Function to create carousel items
    function createCarouselItems(events) {
        const carouselSlide = document.getElementById("carouselSlide");
        carouselSlide.innerHTML = ''; // Clear previous items if any
    
        events.forEach(event => {
            event.imgSrcs.forEach((imgSrc) => {
                const carouselItem = document.createElement('div');
                carouselItem.classList.add('carousel-item');
    
                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = event.altText;
                img.classList.add('carousel-img');
    
                const caption = document.createElement('div');
                caption.classList.add('carousel-caption');
                caption.innerHTML = `<h3 class="carousel-title">${event.title}</h3><p>${event.description}</p>`;
    
                carouselItem.appendChild(img);
                carouselItem.appendChild(caption);
    
                carouselSlide.appendChild(carouselItem);
            });
        });
    }
    
  
    // Function to handle carousel movement
    function setupCarousel() {
      const carouselSlide = document.getElementById("carouselSlide");
      let carouselItems = document.querySelectorAll(".carousel-item");
      const prevBtn = document.getElementById("prevBtn");
      const nextBtn = document.getElementById("nextBtn");
  
      let counter = 0;
      let size = carouselItems[0].clientWidth;
  
      // Initial position
      carouselSlide.style.transform = `translateX(${-size * counter}px)`;
  
      // Move to next slide
      const moveToNextSlide = () => {
        if (counter >= carouselItems.length - 1) {
          counter = -1;
        }
        counter++;
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
      };
  
      // Move to previous slide
      const moveToPrevSlide = () => {
        if (counter <= 0) {
          counter = carouselItems.length;
        }
        counter--;
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
      };
  
      // Button listeners
      nextBtn.addEventListener('click', moveToNextSlide);
      prevBtn.addEventListener('click', moveToPrevSlide);
  
      // Adjust size on window resize
      window.addEventListener('resize', () => {
        size = carouselItems[0].clientWidth;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
      });
    }
  
    // Initialize the carousel on DOM load
    createCarouselItems(events);
    setupCarousel();
  });
  