const displayDogs = () => {
  return fetch("http://localhost:3000/dogs") 
  .then((resp) => {
    if (resp.ok) {
      return resp.json()
    }})
  .then((dogs) => dogs.forEach((dog) => {
    const img = document.createElement("img")
    img.src = dog.image
    img.alt = dog.name
    img.addEventListener("click", () => handleClick(dog))
    document.querySelector('#dog-list').append(img)
  }))
}
displayDogs()

const handleClick = () => {›
  return dogs.forEach((dog) => {
    const description = document.createElement("desciption")
    // Name:
    dogs.name
    // Breed:
    dogs.breed
    // Age: 
    dogs.age
    // Availability:
    dogs.available
  }
  )}
handleClick()

// Dog names array
// const dogNames = ['PeterPan', 'TinkerBell', 'Wendy', 'Whiskey',]; ED
const dogNames = document.querySelector("#dog-list") // AY

// Function to populate the dog names dropdown
function populateDogNamesDropdown() {
  const dropdown = document.getElementById('dogNamesDropdown');

  dogNames.forEach(name => {
    const option = document.createElement('option');
    option.innerText = name;
    option.value = name;
    dropdown.add(option);
  });
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form input values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const selectedDog = document.getElementById('dogNamesDropdown').value;

  // Simple form validation
  if (name.trim() === '') {
    alert('Please enter your name');
    return;
  }

  if (email.trim() === '') {
    alert('Please enter your email');
    return;
  }

  if (message.trim() === '') {
    alert('Please enter a message');
    return;
  }

  if (selectedDog === '') {
    alert('Please select a dog name');
    return;
  }

  // Form data is valid, you can now submit it to a server using AJAX or fetch API
  // Here, we are just logging the form data to the console
  console.log('Form submitted:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);
  console.log('Selected Dog:', selectedDog);

  // Optionally, you can reset the form after submission
  document.getElementById('contactForm').reset();
}

// Populate the dog names dropdown when the page loads
populateDogNamesDropdown();

// Add event listener to the form submit button
const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', handleSubmit);

// missing submitButton, dropdown, and contactform in index.html



const button = document.querySelector('.myButton');

button.addEventListener('click'), function() {
  console.log('button clicked')
}
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