// script.js

const hamburger = document.getElementById('hamburgerMenu');
const navbar = document.getElementById('navbar');
const navLinks = navbar.querySelectorAll('a');

// Toggle menu visibility when hamburger is clicked
hamburger.addEventListener('click', () => {
  navbar.classList.toggle('show');
});

// Hide menu when a link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('show');
  });
});



const texts = ["Venkatalakshmi Kottapalli", "AI-ML Enthusiast", "Data Scientist ", "Python Developer", "Azure DevOps Engineer" ];
let index = 0;
const dynamicText = document.getElementById("dynamic-text");
const toggleButton = document.querySelector(".dark-mode-toggle");
const body = document.body;

// Dynamic text update
setInterval(() => {
  dynamicText.textContent = texts[index];
  index = (index + 1) % texts.length;
}, 2000);

// Dark mode toggle
toggleButton.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  // Update toggle icon
  toggleButton.textContent = body.classList.contains("light-mode") ? "🌙" : "☀️";

  // Update header class for navbar text color
  document.querySelector("header").classList.toggle("light-mode");
});

function handleFormSubmit(event) {
  event.preventDefault(); // Prevents the default form submission

  // Send form data using Fetch API
  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: new FormData(document.getElementById('contact-form')),
  })
  .then(response => response.json()) // parse the response to JSON
  .then(data => {
    if (data.success) {
      alert("Form submitted successfully!"); // You can show a success message here
      document.getElementById("contact-form").reset(); // Reset the form fields
    } else {
      alert("There was an error. Please try again.");
    }
  })
  .catch(error => {
    alert("An error occurred. Please try again later.");
  });
}