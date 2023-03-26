
const langSelect = document.querySelector('#lang-select');
const translateText = document.querySelector('.translate');
const text = translateText.textContent.trim();

// Function to translate text
async function translateTextFunc(text, targetLang) {
  const response = await fetch(
    `https://api-free.deepl.com/v2/translate?auth_key=${apiKey}&text=${encodeURIComponent(
      text
    )}&target_lang=${targetLang}`
  );
  const data = await response.json();
  return data.translations[0].text;
}

// Translate text on page load
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const translatedText = await translateTextFunc(text, langSelect.value);
    const titleTranslatedText = await translateTextFunc(text, langSelect.value);
    translateText.innerHTML = `<p class="para-text translate">${translatedText}</p>`;
    titleTranslatedText.innerHTML = `<h1 class="title translate">${titleTranslatedText}</h1>`;
  } catch (error) {
    console.error(error);
  }
});

// Translate text on language change
langSelect.addEventListener('change', async () => {
  try {
    const translatedText = await translateTextFunc(text, langSelect.value);
    translateText.innerHTML = `<p class="para-text translate">${translatedText}</p>`;
  } catch (error) {
    console.error(error);
  }
});
