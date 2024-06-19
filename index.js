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
    // need to add a .catch
    dogNamesDropdown();
    dogs.forEach((dog) => {
      const imgContainer = document.createElement("div")
      const img = document.createElement("img")
      img.src = dog.image
      img.alt = dog.name

      // create a caption element
      const caption = document.createElement("description")
      caption.textConent = `
        ${dog.name}, 
        ${dog.breed},
        ${dog.age},
        ${dog.available}
        `
      img.addEventListener("click", () => handleClick(dog, caption))

      imgContainer.appendChild(img)
      imgContainer.appendChild(caption);

      document.querySelector('#dog-list').append(img)
    })
  })
  .catch(error => console.error('Error fetching the data:', error))
}
displayDogs()

const handleClick = (dogObj, captionElement) => {
//  const dogDescription = [dog.name, dog.breed, dog.age, dog.available]
//  documentGetElementById('#description').appendChild(dogDescription)
const dogDescription = document.getElementById('description');
dogDescription.innerText = `
  Name: ${dogObj.name}
  Breed: ${dogObj.breed}
  Age: ${dogObj.age}
  Available: ${dogObj.available ? 'Yes' : 'No'}
`
dogDescription.innertext(dogDescription)
}
handleClick()


// Dog names array
// const dogNames = ['PeterPan', 'TinkerBell', 'Wendy', 'Whiskey',]; ED
const dogNames = document.querySelector("#dog-list") // AY

// Function to populate the dog names dropdown
function dogNamesDropdown() {
  const dropdown = document.getElementById('select-dogs');

  dogsData.forEach(dogObj => {
    //console.log(dogObj);
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
  // const message = document.getElementById('message').value;
  const dropdown = document.getElementById('dogNamesDropdown').value; // this is a repeat of line 38

  // Simple form validation
  if (userName.trim() === '') {
    alert('Please enter your name');
    return;
  }

  if (userEmail.trim() === '') {
    alert('Please enter your email');
    return;
    // need to add vaildation of email address like @gmail.com for example)
  }

  // this part is not needed, no message from user, we want message to popup after formSubmit
  // if (message.trim() === '') {
  //   alert('Please enter a message');
  //   return;
  // }

  if (dogNamesDropdown === dogs.name) {
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
  document.getElementById('handleSubmit').reset();
}

// Add event listener to the form submit button
const submitButton = document.getElementById('submit-form');
submitButton.addEventListener('submit', handleSubmit);

// missing submitButton, dropdown, and contactform in index.html


// redundant from line 98-99, not needed?
// const button = document.querySelector('.myButton');

// button.addEventListener('click'), function() {
//   console.log('button clicked');
// }