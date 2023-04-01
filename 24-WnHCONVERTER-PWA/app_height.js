function convertHeight(inputHeight, fromUnit, toUnits) {
  const heightFactors = {
    ft: {
      cm: 30.48,
      m: 0.3048,
      in: 12,
    },
    cm: {
      ft: 0.0328084,
      m: 0.01,
      in: 0.393701,
    },
    m: {
      ft: 3.28084,
      cm: 100,
      in: 39.3701,
    },
    in: {
      ft: 0.0833333,
      cm: 2.54,
      m: 0.0254,
    },
  };

  const fromValue = parseFloat(inputHeight);
  if (isNaN(fromValue)) {
    console.log('Invalid input height:', inputHeight);
    return ['', '', ''];
  }

  const toValues = toUnits.map((unit) => {
    if (!heightFactors[fromUnit][unit]) {
      console.log('Invalid unit:', unit);
      return '';
    }
    const factor = heightFactors[fromUnit][unit];
    return (fromValue * factor).toFixed(2);
  });
  return toValues;
}

function updateHeightConversion(event) {
  const inputHeight = event.target.value;
  const fromUnit = event.target.dataset.unit;
  const toUnits = ['ft', 'm', 'cm', 'in'];

  toUnits.forEach((unit) => {
    const input = document.querySelector(`input[data-unit="${unit}"]`);
    // console.log(`input[data-unit="${unit}"]`);
    if (input !== event.target) {
        // console.log(event.target);
      const [value] = convertHeight(inputHeight, fromUnit, [unit]);
      input.value = value;
    }
  });
}

const inputHeights = document.querySelectorAll('.height_wrapper input');
inputHeights.forEach((inputHeight) => {
  inputHeight.addEventListener('input', updateHeightConversion);
});
