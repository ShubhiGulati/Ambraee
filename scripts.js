// Placeholder for JavaScript (optional interactions or features)

// Example: Simple click event for the "Shop Now" button
document.querySelector('.cta').addEventListener('click', () => {
  alert('Redirecting to the shopping page!');
});
// Add any interactivity here, such as a carousel or animations
console.log("Website Loaded!");
const marquees = document.querySelectorAll('.moving-text');

function toggleMarquee() {
  marquees.forEach((marquee) => {
    const isRunning = marquee.style.animationPlayState === 'running' || marquee.style.animationPlayState === '';
    marquee.style.animationPlayState = isRunning ? 'paused' : 'running';
  });
}

function startMarquee() {
  marquees.forEach((marquee) => {
    marquee.style.animationPlayState = 'running';
  });
}
let slideIndex = 0;

// Function to show a specific slide
function showSlide(index) {
  const slides = document.querySelectorAll('.carousel image-element');
  const dots = document.querySelectorAll('.dots .dot');

  // Reset all slides and dots
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  // Wrap around if the index is out of bounds
  if (index >= slides.length) {
    slideIndex = 0; // Start from the first slide
  } else if (index < 0) {
    slideIndex = slides.length - 1; // Go to the last slide
  }

  // Activate the current slide and dot
  slides[slideIndex].classList.add('active');
  dots[slideIndex].classList.add('active');
}

// Function to move to the next slide
function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

// Manual navigation
function currentSlide(index) {
  slideIndex = index - 1; // Adjust for 0-based index
  showSlide(slideIndex);
}

// Initialize auto-slide functionality
showSlide(slideIndex); // Show the first slide
setInterval(nextSlide, 3000); // Change slide every 3 seconds


const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function updateCarousel() {
    // Update slide position
    const carouselSlides = document.querySelector('.carousel-slides');
    carouselSlides.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Update active dot
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateCarousel();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
}

// Add event listeners to dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToSlide(index));
});

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// Initialize
updateCarousel();

// Select the hamburger and navigation links
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle 'active' class on click
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});
// Add functionality to each icon (if needed)

document.getElementById('account-icon').addEventListener('click', () => {
  alert('Redirecting to Account page!');
});

document.getElementById('wishlist-icon').addEventListener('click', () => {
  alert('Redirecting to Wishlist!');
});

document.getElementById('cart-icon').addEventListener('click', () => {
  alert('Redirecting to Cart!');
});

document.getElementById('more-icon').addEventListener('click', () => {
  alert('Redirecting to More options!');
});
