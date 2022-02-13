// show more text function
const readMore = document.querySelector('.more-click');
const text = document.querySelector('.text');

if (readMore) {
    readMore.addEventListener('click',(e)=>{
        text.classList.toggle('show-more');
        if(readMore.innerHTML==='წაიკითხეთ სრულად'){
            readMore.innerHTML = 'შეამცირეთ ტექსტი';
        }
        else{
            readMore.innerHTML = 'წაიკითხეთ სრულად';
        }
    })
}

const readMores = document.querySelector('.for-second-more');
const text2 = document.querySelector('.second-text-txt');

if (readMores) {
    readMores.addEventListener('click',(e)=>{
        text2.classList.toggle('show-more');
        if(readMores.innerHTML==='წაიკითხეთ სრულად'){
            readMores.innerHTML = 'შეამცირეთ ტექსტი';
        }
        else{
            readMores.innerHTML = 'წაიკითხეთ სრულად';
        }
    })
}
// end of show more text function

// Form Validation

const sendButton = document.getElementById('sendButton');
sendButton.addEventListener('click', () => {
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');
    const emptyValue = [nameField, emailField, messageField].filter(item => !item.value);
    const filledValue = [nameField, emailField, messageField].filter(item => item.value);
    emptyValue.forEach(item => {
        item.classList.add('errorBorder');
        item.nextSibling.nextSibling.classList.remove('hidden');
    });
    filledValue.forEach(item => {
        item.classList.remove('errorBorder');
        item.nextSibling.nextSibling.classList.add('hidden');
    });
})
// End of Form Validation