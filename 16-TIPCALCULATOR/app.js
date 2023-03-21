const billAmt = document.getElementById('bill');
const serviceRate = document.getElementById('rate');
const calcBtn = document.querySelector('.calculate-btn');
const tipValue = document.querySelector('.tip-value');
const overallValue = document.querySelector('.total-value');
const resetBtn = document.querySelector('.reset-btn');

// Add event listener
calcBtn.addEventListener('click', getTotal);
resetBtn.addEventListener('click', reset);

function getTotal() {
  let totalTip = 0;
  if (serviceRate.value === 'excellent') {
    totalTip = billAmt.value * 0.15;
  } else if (serviceRate.value === 'good') {
    totalTip = billAmt.value * 0.1;
  } else {
    totalTip = billAmt.value * 0.05;
  }

  tipValue.innerHTML = `$ ${totalTip.toFixed(2)}`;
  const overallBill = Number(billAmt.value) + totalTip;
  overallValue.innerHTML = `$ ${overallBill.toFixed(2)}`;
}

function formatInput() {
  const oldBill = billAmt.value;
  const formattedBill = parseFloat(oldBill).toFixed(2);
  billAmt.value = `$ ${formattedBill}`;
}

function reset() {
  billAmt.value = '0.00';
  tipValue.innerHTML = '$ 0.00';
  overallValue.innerHTML = '$ 0.00';
}
