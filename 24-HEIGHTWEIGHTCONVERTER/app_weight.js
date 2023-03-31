function convertWeight(inputWeight, fromUnit, toUnits) {
  const weightFactors = {
    kg: {
      lb: 2.20462,
      oz: 35.27396,
      gm: 1000,
    },
    lb: {
      kg: 0.45359237,
      oz: 16,
      gm: 453.592,
    },
    oz: {
      kg: 0.0283495,
      lb: 0.0625,
      gm: 28.3495,
    },
    gm: {
      kg: 0.001,
      lb: 0.00220462,
      oz: 0.035274,
    },
  };

  const fromValue = parseFloat(inputWeight);
  if (isNaN(fromValue)) {
    console.log('Invalid input weight:', inputWeight);
    return ['', '', ''];
  }

  const toValues = toUnits.map((unit) => {
    if (!weightFactors[fromUnit][unit]) {
      console.log('Invalid unit:', unit);
      return '';
    }
    const factor = weightFactors[fromUnit][unit];
    return (fromValue * factor).toFixed(2);
  });

  return toValues;
}

function updateWeightConversion(event) {
    const inputWeight = event.target.value;
    const fromUnit = event.target.dataset.unit;
    const toUnits = ['kg', 'lb', 'oz', 'gm'];

    toUnits.forEach((unit) => {
      const input = document.querySelector(`input[data-unit="${unit}"]`);
      if (input !== event.target) {
        const [value] = convertWeight(inputWeight, fromUnit, [unit]);
        input.value = value;
      }
    });
  }

  const inputWeights = document.querySelectorAll('.weight_wrapper input');
  inputWeights.forEach((inputWeight) => {
    inputWeight.addEventListener('input', updateWeightConversion);
  });

