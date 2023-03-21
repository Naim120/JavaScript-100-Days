const billAmt = document.getElementById('bill');
const serviceRate = document.getElementById('rate');
const note = document.querySelector('.note');
const calcBtn = document.querySelector('.calculate-btn');
const tipValue = document.querySelector('.tip-value');
const overallValue = document.querySelector('.total-value');
const resetBtn = document.querySelector('.reset-btn');

// Add event listeners
calcBtn.addEventListener('click', getTotal);
resetBtn.addEventListener('click', reset);
serviceRate.addEventListener('change', checkRate);

function checkRate() {
  note.textContent = serviceRate.value === 'selection' ? 'Please enter the Bill Amount & Rate of Service' : '';
}

function getTotal() {
  if (serviceRate.value === 'selection') {
    note.textContent = 'Please enter the Bill Amount & Rate of Service';
    return;
  }

  const rates = {
    excellent: 0.15,
    good: 0.1,
    fair: 0.05,
  };

  const totalTip = billAmt.value * rates[serviceRate.value];
  tipValue.textContent = `$ ${totalTip.toFixed(2)}`;

  const overallBill = +billAmt.value + totalTip;
  overallValue.textContent = `$ ${overallBill.toFixed(2)}`;
}

function reset() {
  billAmt.value = '0.00';
  serviceRate.value = 'selection';
  note.textContent = '';
  tipValue.textContent = '$ 0.00';
  overallValue.textContent = '$ 0.00';
}
