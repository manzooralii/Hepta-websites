const toggleBtn = document.querySelector('.toggle-btn');
  const navLinks = document.querySelector('.nav-links');

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

let isOpen = false;
toggleBtn.addEventListener('click', () => {
  isOpen = !isOpen;

  if (isOpen) {
    navLinks.style.display = 'block';
    toggleBtn.textContent = '✖'; // Cross icon
  } else {
    navLinks.style.display = 'none';
    toggleBtn.textContent = '☰'; // Hamburger icon
  }
});


const openBtn = document.getElementById("open-video");
const closeBtn = document.getElementById("close-video");
const popup = document.getElementById("video-popup");
const iframe = document.getElementById("youtube-video");

const videoUrl = "https://www.youtube.com/embed/cGmIwmvF3C0?autoplay=1";

openBtn.addEventListener("click", (e) => {
  e.preventDefault();
  iframe.src = videoUrl;
  popup.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  iframe.src = ""; // Stop video on close
  popup.classList.remove("active");
});

window.addEventListener("click", (e) => {
  if (e.target === popup) {
    iframe.src = ""; // Stop video on outside click
    popup.classList.remove("active");
  }
});


  const slider = document.getElementById('slider');
  const images = slider.querySelectorAll('img');
  let currentIndex = 0;

  // Function to show current image only
  function showSlide(index) {
    images.forEach((img, i) => {
      img.style.opacity = i === index ? '1' : '0';
      img.style.zIndex = i === index ? '1' : '0';
      img.style.position = 'absolute';
      img.style.transition = 'opacity 0.5s ease-in-out';
    });
  }

  // Move to next image
  function slideRight() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
  }

  // Move to previous image
  function slideLeft() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
  }

  // Auto slide every 2 seconds
  setInterval(slideRight, 2000);

  // Initialize first image
  showSlide(currentIndex);

  