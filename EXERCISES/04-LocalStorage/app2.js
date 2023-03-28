import { person } from './personObj.js';

// Set the object into LS
localStorage.setItem('data', JSON.stringify(person));
// Retrieve from LS and parse
const storedDataLS = JSON.parse(localStorage.getItem('data'));
const ageData = document.querySelector('.person-object');
const pAge = document.createElement('p');
pAge.textContent = storedDataLS.age;
ageData.appendChild(pAge);

// ------------ACCESSING AN OBJECT WITHIN AN OBJECT-------------
// function for address details
function getAddressDetails(person) {
  const { street, city, state, zip } = person.address;
  return { street, city, state, zip };
}
// Set the object into LS
localStorage.setItem('data', JSON.stringify(person));
const storedPersonDetails = JSON.parse(localStorage.getItem("data"))
const addressDetails = getAddressDetails(storedPersonDetails)

// Updating UI
const personalData = document.querySelector('.personal-data');
const personAddress = document.createElement('p');
personAddress.textContent = `Street: ${addressDetails.street}, City: ${addressDetails.city}, State: ${addressDetails.state}, Zip Code: ${addressDetails.zip}`;
personalData.appendChild(personAddress);

// ------------ACCESSING ARRAY IN THE OBJECT----------
// set the object into LS
localStorage.setItem("data", JSON.stringify(person));
const storedPhoneDetails = JSON.parse(localStorage.getItem("data"));
const secondPhoneDetails = storedPhoneDetails.phones[1];
const phoneDetails = document.querySelector('.phone-details')
const phoneText = document.createElement('p')
phoneText.textContent = `Type: ${secondPhoneDetails.type}, Number: ${secondPhoneDetails.number}`;
phoneDetails.appendChild(phoneText);