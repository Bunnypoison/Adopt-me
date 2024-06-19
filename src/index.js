let dogsData;

const displayDogs = () => {
  return fetch("http://localhost:3000/dogs") 
  .then((resp) => {
    if (resp.ok) {
      return resp.json()
    }})
  .then((dogs) => {
    dogsData = dogs
    // Populate the dog names dropdown when the page loads
    dogNamesDropdown();
    dogs.forEach((dog) => {
      const img = document.createElement("img")
      img.src = dog.image
      img.alt = dog.name
      img.addEventListener("click", () => handleClick(dog))
      document.querySelector('#dog-list').append(img)
    })
  })
}
displayDogs()

const handleClick = (dogObj) => {
  console.log(dogObg) 
}

// Dog names array
// const dogNames = ['PeterPan', 'TinkerBell', 'Wendy', 'Whiskey',]; ED
const dogNames = document.querySelector("#dog-list") // AY

// Function to populate the dog names dropdown
function dogNamesDropdown() {
  const dropdown = document.getElementById('select-dogs');

  dogsData.forEach(dogObj => {
    console.log(dogObj);
    const option = document.createElement('option');
    option.innerText = dogObj.name;
    option.value = dogObj.name;
    dropdown.append(option);
  });
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form input values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phonenumber = document.getElementById('phonenumber').value;
  // const message = document.getElementById('message').value;
  const dogNamesDropdown = document.getElementById('select-dogs').value; // this is a repeat of line 38

  // Simple form validation
  if (name.trim() === '') {
    alert('Please enter your name');
    return;
  }

  if (email.trim() === '') {
    alert('Please enter your email');
    return;
    // need to add vaildation of email address like @gmail.com for example)
  }

  if (phonenumber.trim() === '') {
    alert ('please enter your phonenumber')
  }
  // this part is not needed, no message from user, we want message to popup after formSubmit
  // if (message.trim() === '') {
  //   alert('Please enter a message');
  //   return;
  // }

  if (dogNamesDropdown === '') {
    alert('Please select a dog name'); // how to validate a dropdown selection??
    return;
  }

  // Form data is valid, you can now submit it to a server using AJAX or fetch API
  // Here, we are just logging the form data to the console
  // Eventually we need to store data into server for future use, need to research still!!!!
  console.log('Form submitted:');
  console.log('Name:', name);
  console.log('Email:', email);
 // console.log('Message:', message);
  console.log('dogNamesDropdown:', dogNamesDropdown); // see note on line 77

  // Optionally, you can reset the form after submission
  document.getElementById('submit-form').reset();
}

// Add event listener to the form submit button
const submitButton = document.getElementById('submit-form');
submitButton.addEventListener('submit', handleSubmit);
setTimeout(function() {
  message.classList.remove('hidden');
  submit-form.reset();
}, 1000);

