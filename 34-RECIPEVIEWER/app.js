const searchInput = document.querySelector('.search-input');
const searchResults = document.querySelector('.search-results');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchQuery = searchInput.value;
  fetchRecipes(searchQuery);
});

const fetchRecipes = async (searchQuery) => {
  const response = await fetch(
    `${recipeUrl}${searchQuery}&app_id=${appId}&app_key=${appKey}&to=50`
  );
  const { hits: recipeResults } = await response.json();
  displayRecipes(recipeResults);
};

function displayRecipes(recipeResults) {
    let recipeEl = '';
    recipeResults.forEach((recipeResult) => {
      const { recipe } = recipeResult; // destructuring
      const calories = recipe.calories.toFixed(0);
      recipeEl += `
        <div class="item">
          <img
            class="item-image"
            src="${recipe.image}"
            alt="dish"
            loading="eager"
          />
          <div class="content-wrapper">
            <h2 class="recipe-title">${recipe.label}</h2>
          </div>

          <div class="recipe-desc">
            <p class="item-data"><mark>Calories:</mark> ${calories}</p>
            <p class="item-data"><mark>Diet Label:</mark> ${recipe.dietLabels}</p>

            <p class="item-data"><mark>Ingredients:</mark></p>
            <ul class="ingredients-list">
              ${recipe.ingredientLines
                .map((ingredientLine) => {
                  return `<li>${ingredientLine}</li>`;
                })
                .join('\n')}
            </ul>
            <p class="item-data"><mark>Source:</mark> ${recipe.source}</p>
          </div>
          <a href="${recipe.url}" target="_blank" class="more-info">More Info</a>
        </div>`;
      searchResults.innerHTML = recipeEl;
    });
  }

// https://edaman.com
const appId = 'd8a67285';
const appKey = '0f7699574def14bbc3f4067e694569eb';
const recipeUrl = ' https://api.edamam.com/search?q=';
