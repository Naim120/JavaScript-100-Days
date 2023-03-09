const copyBtn = document.querySelector('.copy-btn');
const copyCode = document.querySelector('.copycode');

function copy() {
  copyCode.select();
  document.execCommand('copy');
  copyBtn.textContent = 'COPIED';
  setTimeout(() => {
    copyBtn.textContent = 'COPY';
    window.getSelection()?.removeAllRanges();
  }, 800);
}

copyBtn.addEventListener('click', copy);