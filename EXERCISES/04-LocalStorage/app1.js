
const favorites = {
    man: "naja",
    food: "adobo",
    school: "csu",
    friend: "God",
    place: "germany"
}

// Save the object in LS and convert to JSON
localStorage.setItem('favs', JSON.stringify(favorites));
// Retrieve the favs object from LS and parse it as JSON
const favsFromLS = JSON.parse(localStorage.getItem("favs"))
// Select the thing element and update its text content to the value of man prop
const thing = document.querySelector(".thing");
thing.textContent = favsFromLS.school; //csu

// To display all the value of the property
// Save the object in LS
// Retrieve the favs object from LS & parse as JSON
// Select the thing ...
const allThing = document.querySelector(".all-thing");
// LOOP through the properties in the favorites in the favs obj and display their values
for (const prop in favsFromLS){
    const value = favsFromLS[prop];
    const text = `${prop}: ${value}`
    const pEl = document.createElement("p")
    pEl.textContent = text;
    allThing.appendChild(pEl);
}