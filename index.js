// Global variables
const dogNames = document.querySelector("#dog-list") 
const dogDescription = document.querySelector('#description')
const form = document.querySelector('#submit-form')

// Fetch data first, then append img to page
const displayDogs = () => {
 return fetch("http://localhost:3000/dogs")
 .then((resp) => {
   if (resp.ok) {
     return resp.json()
   }})
 .then((dogs) => {
   dogsData = dogs
   dogNamesDropdown()
   dogs.forEach((dog) => {
     const img = document.createElement("img")
     img.src = dog.image
     img.alt = dog.name
     img.addEventListener('mouseover', () => handleMouseOver(dog))
     img.addEventListener('click', () => handleClick(dog))
     img.addEventListener('dblclick', () => handleDblClick(dog))
     dogNames.append(img)
   })
 })
 .catch(error => console.error('Error fetching the data:', error))
}
displayDogs()

// 1. handleMouseOver eventListener to display dog description
const handleMouseOver = (dogObj) => {
 dogDescription.textContent = `
   Name:${dogObj.name},
   Breed: ${dogObj.breed},
   Age: ${dogObj.age},
   Available: ${dogObj.available}
   `
}

// 2. handleClick eventListener to change page background color
const handleClick = (dogObj) => {
    document.body.style.backgroundColor = '#758FEB'
}

// 3. handleDblClick eventListener to reset background color
const handleDblClick = (dogObj) => {
  document.body.style.backgroundColor = '#FFFFFF'
}

// Function to populate the dog names dropdown for form
function dogNamesDropdown() {
  const dropdown = document.getElementById('select-dogs')
  
// Creating a list for the dropdown menu 
dogsData.forEach(dogObj => {
  const option = document.createElement('option')
  option.innerText = dogObj.name
  option.value = dogObj.name
  dropdown.append(option)
  })
  }
  
// 3. handleSubmit eventListener w/message pop-up to user
form.addEventListener('submit', handleSubmit) 
function handleSubmit(event) {
  event.preventDefault() 
  const message = document.getElementById("message")
  message.textContent = "Thank you for your interest! We will get back to you soon."
  message.classList.remove("hidden")
  setTimeout(function() {
  message.classList.add('hidden')
  }, 5000)
      
      
// Simple form validation
if (name.trim() === '') {
  alert('Please enter your name')
  return;
}
if (email.trim() === '') {
  alert('Please enter your email')
  return;
}
if (phonenumber.trim() === '') {
  alert ('please enter your phone number')
}
if (dogNamesDropdown === '') {
  alert('Please select a dog name')
  return;
}
// store user data for POST request
const name = document.getElementById('name').value
const email = document.getElementById('email').value
const phonenumber = document.getElementById('phonenumber').value
const dogNamesDropdown = document.getElementById('select-dogs').value

// POST request
fetch("http://localhost:3000/dogs", {
method: 'POST',
headers: {
  'Content-Type': 'application/json'
},
body:JSON.stringify(dogsData)
})
.then(resp => resp.json())
.then(dogObj => console.log(dogObj))
}