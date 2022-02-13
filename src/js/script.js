// show more text function
const readMore = document.querySelector('.more-click');
const text = document.querySelector('.text');

readMore.addEventListener('click',(e)=>{
    text.classList.toggle('show-more');
    if(readMore.innerHTML==='წაიკითხეთ სრულად'){
        readMore.innerHTML = 'შეამცირეთ ტექსტი';
    }
    else{
        readMore.innerHTML = 'წაიკითხეთ სრულად';
    }
})

const readMores = document.querySelector('.for-second-more');
const text2 = document.querySelector('.second-text-txt');

readMores.addEventListener('click',(e)=>{
    text2.classList.toggle('show-more');
    if(readMores.innerHTML==='წაიკითხეთ სრულად'){
        readMores.innerHTML = 'შეამცირეთ ტექსტი';
    }
    else{
        readMores.innerHTML = 'წაიკითხეთ სრულად';
    }
})
// end of show more text function