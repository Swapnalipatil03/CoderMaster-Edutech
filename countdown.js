// Set the deadline for registration (Example: February 28, 2024)
const deadline = new Date('March 1, 2024 23:59:59').getTime();

// Update the countdown every second
const countdownTimer = setInterval(function() {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the time remaining until the deadline
  const timeRemaining = deadline - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown
  const countdownElement = document.getElementById('countdown');
  countdownElement.innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds}Seconds`;

  // If the countdown is over, display a message
  if (timeRemaining < 0) {
    clearInterval(countdownTimer);
    countdownElement.innerHTML = 'Registration Closed';
  }
}, 1000);


document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      document.querySelector('.form-section').classList.add('slide-up');
      document.querySelector('.form-section').classList.remove('hidden');
      document.body.classList.add('form-open');
    }, 15000);
  });
