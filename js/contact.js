"use strict";

const formEl = document.getElementById("contact-form");
const fullNameEl = document.getElementById("contactName");
const emailEl = document.getElementById("contactEmail");
const subjectEl = document.getElementById("contactSubject");
const messageEl = document.getElementById("contactMessage");

const fullNameErrorEl = document.getElementById("contactName-error");
const emailErrorEl = document.getElementById("contactEmail-error");
const messageErrorEl = document.getElementById("contactMessage-error");

// contact form
formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const fullName = fullNameEl.value.trim();
  const email = emailEl.value.trim();
  const subject = subjectEl.value.trim();
  const message = messageEl.value.trim();

  let isValid = true;

  // Validate full name
  const nameParts = fullName.split(" ").filter(Boolean);
  if (nameParts.length < 2 || nameParts.some((part) => part.length < 2)) {
    fullNameErrorEl.textContent = "Please enter your first and last name";
    fullNameErrorEl.classList.remove("hidden");
    fullNameEl.setAttribute("aria-invalid", "true");
    isValid = false;
  } else {
    fullNameErrorEl.classList.add("hidden");
    fullNameEl.setAttribute("aria-invalid", "false");
  }

  // Validate email
  if (!isValidEmail(email)) {
    emailErrorEl.textContent = "Please enter a valid email address";
    emailErrorEl.classList.remove("hidden");
    emailEl.setAttribute("aria-invalid", "true");
    isValid = false;
  } else {
    emailErrorEl.classList.add("hidden");
    emailEl.setAttribute("aria-invalid", "false");
  }

  // Validate message
  if (message.length < 10) {
    messageErrorEl.classList.remove("hidden");
    messageEl.setAttribute("aria-invalid", "true");
    isValid = false;
  } else {
    messageErrorEl.classList.add("hidden");
    messageEl.setAttribute("aria-invalid", "false");
  }

  if (!isValid) return;

  // Show loading state
  const button = e.target.querySelector("button[type='submit']");
  button.disabled = true;
  button.textContent = "Sending...";

  // Simulate successful form submission
  setTimeout(() => {
    button.disabled = false;
    button.textContent = "Send";
    formEl.reset();
    showSuccessModal();
  }, 1000);
});

// Email validation helper
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showSuccessModal() {
  const modal = document.getElementById("successModal");
  const closeBtn = document.getElementById("closeModalBtn");

  modal.classList.remove("hidden");

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // Optional: close on click outside modal
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });
}
