

const bars = document.getElementsByClassName('bars');
const firstBar = bars[0];
const secondBar = bars[1];
const thirdBar = bars[2];
const fourthBar = bars[3];
const fifthBar = bars[4];
const sixthBar = bars[5];
const seventhBar = bars[6];

const prices = document.getElementsByClassName('prices');
const firstPrice = prices[0];
const secondPrice = prices[1];
const thirdPrice = prices[2];
const fourthPrice = prices[3];
const fifthPrice = prices[4];
const sixthPrice = prices[5];
const seventhPrice = prices[6];

//      EVENT LISTENERS

firstBar.addEventListener('click', event => {
    firstPrice.classList.toggle('hidden');
});
secondBar.addEventListener('click', event => {
    secondPrice.classList.toggle('hidden');
})
thirdBar.addEventListener('click', event => {
    thirdPrice.classList.toggle('hidden');
});
fourthBar.addEventListener('click', event => {
    fourthPrice.classList.toggle('hidden');
});

fifthBar.addEventListener('click', event => {
    fifthPrice.classList.toggle('hidden');
});
sixthBar.addEventListener('click', event => {
    sixthPrice.classList.toggle('hidden');
});
seventhBar.addEventListener('click', event => {
    seventhPrice.classList.toggle('hidden');
})