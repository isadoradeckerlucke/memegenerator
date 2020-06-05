const form = document.querySelector('#make-meme');
const topText = document.querySelector('#top-text');
const bottomText = document.querySelector('#bottom-text');
const memeImg = document.querySelector('#img-link');
const results = document.querySelector('#meme-display');



form.addEventListener('submit', function(e){
    e.preventDefault();

    if (memeImg.value === '' || bottomText.value === '' || topText.value === ''){
        return;
    }

    parent = document.createElement('div');
    parent.classList += 'parent'
    const meme = document.createElement('img');
    meme.src = memeImg.value;    

    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'remove meme'
    removeBtn.classList += 'remove-button'

    const topMemeText = document.createElement('div');
    topMemeText.innerText = topText.value;
    topMemeText.classList += 'top-text-display'

    const bottomMemeText = document.createElement('div');
    bottomMemeText.innerText = bottomText.value;
    bottomMemeText.classList += 'bottom-text-display'

    results.appendChild(parent)
    parent.appendChild(meme);
    parent.appendChild(topMemeText);
    parent.appendChild(bottomMemeText);
    parent.appendChild(removeBtn);

    topText.value = '';
    bottomText.value = '';
    memeImg.value = '';
})

results.addEventListener('click', function(event){//remove meme when button is clicked
    if(event.target.tagName ==='BUTTON'){
        event.target.parentElement.remove()
    }
})
