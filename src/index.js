document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('myForm');
  const heartContainer = document.getElementById('heartContainer');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Create heart element
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '❤️';

    // Randomize position within the heartContainer
    const x = Math.random() * heartContainer.clientWidth;
    const y = Math.random() * heartContainer.clientHeight;
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    // Add the heart to the heartContainer
    heartContainer.appendChild(heart);

    // Remove the heart after animation completes
    setTimeout(() => {
      heart.remove();
    }, 2000); // Adjust duration as needed
  });
});