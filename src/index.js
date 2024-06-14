// Dog names array
const dogNames = ['PeterPan', 'TinkerBell', 'Wendy', 'Whiskey',];

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
