const displayDogs = () => {
    return fetch("http://localhost:3000/dogs") 
    .then((resp) => {
      if (resp.ok) {
        return resp.json()
      }})
    .then((dogs) => ramens.forEach(() => {
      const img = document.createElement("img")
      img.src = dogs.image
      img.alt = dogs.name
      img.addEventListener("click", () => {handleClick(dog)})
      document.querySelector('line 31 fill in something html').append(img)
    }))
}

