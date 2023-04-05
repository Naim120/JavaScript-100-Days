import data from './data.js';

// Select the product container element
const storeProducts = document.querySelector('.store_products');

// Function to create a product element given a product object
function createProductElement(product) {
  const { itemName, price, discount, imageUrl } = product;

  // Calculate the discounted price
  const priceNum = parseFloat(price.replace('$', ''));
  const discountNum = parseFloat(discount) / 100;
  const finalPrice = priceNum * (1 - discountNum);
  const discountedPriceStr = `$${finalPrice.toFixed(2)}`;

  // Create the product element and add it to the container
  const productItem = document.createElement('div');
  productItem.classList.add('productItem');
  productItem.innerHTML = `
    <img src="${imageUrl}" />
    <div class="product-details">
      <h2 class="item-name">${itemName}</h2>
      <p class="price">
        <span class="old-price">${price}</span>
        <span class="new-price">${discountedPriceStr}</span>
      </p>
      <button class="add-to-cart btn">Add to Cart</button>
    </div>`;
  return productItem;
}

// Function to display products in the container
function displayProducts(items = data) {
  storeProducts.innerHTML = '';
  for (const item of items) {
    const productItem = createProductElement(item);
    storeProducts.appendChild(productItem);
  }
}

// Call the function to initially display all products
displayProducts();

// Get all radio buttons
const rbtnFilters = document.querySelectorAll('input[type="radio"]');

// Get the individual radio buttons by ID
const { rbtnAll, rbtnWatch, rbtnDress, rbtnSwimsuit } = {
  rbtnAll: document.getElementById('rbtn-all'),
  rbtnWatch: document.getElementById('rbtn-watch'),
  rbtnDress: document.getElementById('rbtn-dress'),
  rbtnSwimsuit: document.getElementById('rbtn-swimsuit'),
};

// Function to set checked state of radio buttons
function setRadioButtons(rbtnChecked) {
  Object.assign(rbtnAll, { checked: rbtnChecked === rbtnAll });
  Object.assign(rbtnWatch, { checked: rbtnChecked === rbtnWatch });
  Object.assign(rbtnDress, { checked: rbtnChecked === rbtnDress });
  Object.assign(rbtnSwimsuit, { checked: rbtnChecked === rbtnSwimsuit });
}

// Function to handle radio button change event
function handleFilterChange(event) {
  // Get the checked state and value of the clicked radio button
  const { checked: isChecked, value: filterValue } = event.target;

  // If "All" is selected, clear all other radio buttons and show all products
  if (isChecked && filterValue === 'all') {
    setRadioButtons(rbtnAll);
    displayProducts();
  }
  // If "Watch" is selected, show only watch products
  else if (isChecked && filterValue === 'watch') {
    setRadioButtons(rbtnWatch);
    const watchItems = data.filter((item) => item.category === 'Watch');
    displayProducts(watchItems);
  }
  // If "Dress" is selected, show only dress products
  else if (isChecked && filterValue === 'dress') {
    setRadioButtons(rbtnDress);
    const dressItems = data.filter((item) => item.category === 'Dress');
    displayProducts(dressItems);
  }
  // If "Swimsuit" is selected, show only swimsuit products
  else if (isChecked && filterValue === 'swimsuit') {
    setRadioButtons(rbtnSwimsuit);
    const swimsuitItems = data.filter((item) => item.category === 'Swimsuit');
    displayProducts(swimsuitItems);
  }
}

// Attach the handleFilterChange function to the change event for all radio buttons
rbtnFilters.forEach((rbtnFilter) => {
  rbtnFilter.addEventListener('change', handleFilterChange);
});

// Set the "All" radio button as checked by default
setRadioButtons(rbtnAll);

// ==================================================================

// Search Filter By Price

// Get all options from select
const selects = document.querySelectorAll('.search-filter');
selects.forEach((select) =>
  select.addEventListener('change', handleSelectionChange)
);

function handleSelectionChange(e) {
    // Destructure the selected value from the event object
    const { value: dataSelection } = e.target;
    // const dataSelection = e.target.value;

    // Extract common code into a separate function to reduce duplication
    function filterByPrice(maxPrice) {
      return data.filter((item) => {
        const priceNum = parseFloat(item.price.replace('$', ''));
        const discountNum = parseFloat(item.discount) / 100;
        const finalPrice = priceNum * (1 - discountNum);
        return finalPrice < maxPrice;
      });
    }

    // Filter products based on selected option
    switch (dataSelection) {
      case 'all':
        displayProducts();
        break;
      case 'less50':
        displayProducts(filterByPrice(50.0));
        break;
      case 'less100':
        displayProducts(filterByPrice(100.0));
        break;
      case 'less150':
        displayProducts(filterByPrice(150.0));
        break;
      case 'less200':
        displayProducts(filterByPrice(200.0));
        break;
      case 'less250':
        displayProducts(filterByPrice(250.0));
        break;
      default: // to do nothing - to handle unexpected values or situations.
        break;
    }
  }
