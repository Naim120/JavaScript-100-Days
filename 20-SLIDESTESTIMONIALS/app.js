const sliderItem = document.querySelector('.slider-container').children;
const indicatorImgs = document.querySelector('.slider-controls').children;

for(let i=0; i<indicatorImgs.length; i++){
    indicatorImgs[i].addEventListener('click', ()=>{
        for(let k = 0; k < indicatorImgs.length; k++){
            indicatorImgs[k].classList.remove('active')
        }
        indicatorImgs[i].classList.add('active');

        const id = indicatorImgs[i].dataset.id;
        for(let j = 0; j < sliderItem.length; j++){
            sliderItem[j].classList.remove('active');
        }
        sliderItem[id].classList.add('active')
    })
}
