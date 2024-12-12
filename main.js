// Initialize Swiper
const initSwiper = () => {
  return new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
};

// Menu Toggle Functionality
const toggleMenu = () => {
  menuIcon.classList.toggle("move");
  navbar.classList.toggle("open-menu");
};

// Close Menu On Scroll
const closeMenuOnScroll = () => {
  menuIcon.classList.remove("move");
  navbar.classList.remove("open-menu");
};

// Event Listeners
const setupEventListeners = () => {
  menuIcon.addEventListener("click", toggleMenu);
  window.addEventListener("scroll", closeMenuOnScroll);
};

// Initialize
const swiper = initSwiper();
const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");
setupEventListeners();

//ScrollReveal Animation
const animate = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: '2500',
  delay: '400',
});

animate.reveal(".nav");
animate.reveal(".home-text", {origin: "left"});
animate.reveal(".home-img", {origin: "bottom"});
animate.reveal(".ser-box,.product-box,.team-box,.book-data", {intervel: 100});


function sendWhatsAppMessage(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the values from the input fields
  const phoneNumber = document.getElementById('phone-number').value;
  const peopleCount = document.getElementById('people-count').value;

  // Basic validation
  if (phoneNumber && peopleCount > 0) {
      // Construct the message
      const message = `Hello! I would like to book a table for ${peopleCount} people. My phone number is ${phoneNumber}.`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappNumber = "+6285817479653"; // Your WhatsApp number in international format
      const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      // Redirect to WhatsApp
      window.open(whatsappLink, '_blank');

      // Optionally, display confirmation message
      document.getElementById('confirmation-message').style.display = 'block';

      // Reset the form
      document.getElementById('booking-form').reset();
  } else {
      alert('Please fill in all fields correctly.');
  }
}
