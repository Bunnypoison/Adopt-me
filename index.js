let dogsData;

// Function to display dogs
const displayDogs = () => {
  return fetch("http://localhost:3000/dogs")
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .then((data) => {
      //populateDogNamesDropdown();
      dogsData.forEach((dog) => {
        const img = document.createElement("img");
        img.src = dog.image;
        img.alt = dog.name;
        img.addEventListener("click", () => handleClick(dog));
        document.querySelector('#dog-list').append(img);
      });
    })
    .catch(error => console.error('Error fetching the data:', error));
};
displayDogs();

// Function to handle click event on a dog image
const handleClick = (dogObj) => {
  const dogDescription = document.getElementById('description');
  const dogDescriptionText = `
    Name: ${dogObj.name}
    Breed: ${dogObj.breed}
    Age: ${dogObj.age}
    Available: ${dogObj.available ? 'Yes' : 'No'}
  `;
  dogDescription.innerText = dogDescriptionText;
};

// Function to populate the dog names dropdown
// function populateDogNamesDropdown() {
//   const dropdown = document.getElementById('select-dogs');
//   dogsData.forEach(dogObj => {
//     const option = document.createElement('option');
//     option.innerText = dogObj.name;
//     option.value = dogObj.name;
//     dropdown.append(option);
//   });
//}

// // Function to handle form submission
// function handleSubmit(event) {
//   event.preventDefault(); // Prevent the default form submission

//   // Get form input values
//   const name = document.getElementById('name').value;
//   const email = document.getElementById('email').value;
//   const dropdown = document.getElementById('select-dogs').value;

//   // Simple form validation
//   if (name.trim() === '') {
//     alert('Please enter your name');
//     return;
//   }

//   if (email.trim() === '') {
//     alert('Please enter your email');
//     return;
//   }

//   if (dropdown === '') {
//     alert('Please select a dog name');
//     return;
//   }

//   // Log form data to the console
//   console.log('Form submitted:');
//   console.log('Name:', name);
//   console.log('Email:', email);
//   console.log('Selected Dog:', dropdown);

//   // Optionally, you can reset the form after submission
//   document.getElementById('contact-form').reset();
// }

// // Add event listener to the form submit button
// const submitButton = document.getElementById('contact-form');
// submitButton.addEventListener('submit', handleSubmit);
