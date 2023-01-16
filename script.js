let inputName = document.getElementById("inputName");
let inputAuthor = document.getElementById("inputAuthor");
let inputCategory = document.getElementById("inputCategory");
let btn = document.getElementById("btn");

let cardsContainer = document.getElementById("cardsContainer");
let card = document.getElementById("card");


let imgBox = document.getElementById("imgBox");
let cardTitle = document.getElementById("cardTitle");
let cardDescription = document.getElementById("cardDescription");
let cardPrice = document.getElementById("cardPrice");
let cardRating = document.getElementById("cardRating");
let cardCategory = document.getElementById("cardCategory");
let authorName = document.getElementById("authorName");
let readMore = document.getElementById("readMore");



  async function getData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

  getData("./Books.json").then(data => {
    let arr = data.books
    console.table(arr)
    createCard(arr)
    filter(arr)

  });


  function createCard(arr){
    for(let i=0; i<arr.length; i++){
      let newCard = card.cloneNode(true)
      card.classList.add('new')
      // let readmore = document.createElement('a')
      // cardDescription.appendChild(readmore);
      cardsContainer.appendChild(newCard);
      cardTitle.innerHTML = arr[i].name
      cardPrice.innerHTML = arr[i].price + ' $'
      cardRating.innerHTML = arr[i].rating
      authorName.innerText = arr[i].author
      cardCategory.innerText = arr[i].category
      cardDescription.innerText = description(arr[i].discription)
      imgBox.style.backgroundImage = `url(${arr[i].image})`
      cardsContainer.children[1].style.display = 'none'
    
    
    
     
    
    }
  }

  function description(description){
    return description.slice(0,90)+'....'
    // console.log(typeof(description))
     
  }


 

function filter(arr){
  btn.addEventListener('click',()=>{
    Array.from(cardsContainer.children).forEach(element => {
      element.style.display = 'none'
    });
    if(inputName.value ||inputAuthor.value || inputCategory.value){
    for(let i=0; i<arr.length;i++){
        
        if(inputAuthor.value.toUpperCase()==arr[i].author.toUpperCase()){
          console.log(i+' '+arr[i].author.toUpperCase())
          cardsContainer.children[i+2].style.display = 'block'
        }
        if(inputName.value.toUpperCase()==arr[i].name.toUpperCase()){
          console.log(i+' '+arr[i].name.toUpperCase())
          Array.from(cardsContainer.children).forEach(element => {
            element.style.display = 'none'
          });
          cardsContainer.children[i+2].style.display = 'block'
        }
        if(inputCategory.value.toUpperCase()==arr[i].category.toUpperCase()){
          console.log(i+' '+arr[i].name.toUpperCase())
          cardsContainer.children[i+2].style.display = 'block'
          if(inputName.value.toUpperCase()==arr[i].name.toUpperCase()){
          Array.from(cardsContainer.children).forEach(element => {
            element.style.display = 'none'
          });
            console.log(i+' '+arr[i].author.toUpperCase())
            cardsContainer.children[i+2].style.display = 'block'
            break
          }
        }
      }
      
    }
  })
}

