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
    img.addEventListener("click", () => console.log(dog))
    document.querySelector('#dog-list').append(img)
  }))
}
displayDogs()