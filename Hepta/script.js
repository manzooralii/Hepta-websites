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


  let currentSlide = 0;
  const slides = document.querySelectorAll('#slider img');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
  }

  function slideRight() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function slideLeft() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  // Initialize first image as active on page load
  window.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
  });
