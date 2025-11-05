// Part 1: Event Handling
document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

document.getElementById("counter-btn").addEventListener("click", () => {
  const countSpan = document.getElementById("count");
  let count = parseInt(countSpan.textContent);
  countSpan.textContent = count + 1;
});

document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle("hidden");
  });
});

// Part 3: Form Validation
document.getElementById("signup-form").addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  const nameError = document.getElementById("name-error");
  if (name.length < 2) {
    nameError.textContent = "Name must be at least 2 characters.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation
  const email = document.getElementById("email").value.trim();
  const emailError = document.getElementById("email-error");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = "Enter a valid email address.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation
  const password = document.getElementById("password").value;
  const passwordError = document.getElementById("password-error");
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // Success message
  const successMsg = document.getElementById("form-success");
  if (valid) {
    successMsg.classList.remove("hidden");
  } else {
    successMsg.classList.add("hidden");
  }
});
