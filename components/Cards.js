// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

let cardCreate = (data) => {

    let card = document.createElement('div');
    let headL = document.createElement('div');
    let authorCont = document.createElement('div');
    let imageCont = document.createElement('div');
    let imgUrl = document.createElement('img');
    let authorNme = document.createElement('span');

    card.classList.add('card');
    headL.classList.add('headline');
    authorCont.classList.add('author');
    imageCont.classList.add('img-container');

    headL.textContent = data.headline;
    imgUrl.src = data.authorPhoto;
    authorNme.textContent = data.authorName; 

    card.appendChild(headL);
    card.appendChild(authorCont);
    authorCont.appendChild(imageCont);
    authorCont.appendChild(authorNme);
    imageCont.appendChild(imgUrl);

    card.addEventListener('click', console.log(headL))

    return card;
}

const cards = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(res => {
    console.log(res);
    const articles = res.data.articles
    for(var x in articles){
        articles[x].forEach(newArticles => {
            cards.appendChild(cardCreate(newArticles))
        })
    }
});

