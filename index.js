



function createCardElements (){
    const gallery = document.getElementById("mygallery");
    gallery.appendChild()
}

const imageArray = [
{ src: "Screenshot 2024-07-15 at 14.08.33.png", alt: "Image 1", title: "Image Title 1", description: "Description for Image 1"} ,
{ src: "Screenshot 2024-07-15 at 14.08.33.png", alt: "Image 2", title: "Image Title 2", description: "Description for Image 2" },
{ src: "Screenshot 2024-07-15 at 14.08.33.png", alt: "Image 1", title: "Image Title 1", description: "Description for Image 1"} ,
{ src: "Screenshot 2024-07-15 at 14.08.33.png", alt: "Image 1", title: "Image Title 1", description: "Description for Image 1"} ,
{ src: "Screenshot 2024-07-15 at 14.08.33.png", alt: "Image 1", title: "Image Title 1", description: "Description for Image 1"} ,
]
// Add more image objects here


const gallery = document.querySelector('.mygallery');

const galleryItems = imageArray.map(image => {

    const card = document.createElement('div');
      card.classList.add('card');

// front of the card 

// const item = document.createElement('div');
// item.classList.add('gallery-item');
// item.classList.add('stacked');
// item.classList.add('card-front');

// const img = document.createElement('img');
// img.classList.add('cardimage')
// img.src = image.src;
// img.alt = image.alt;


// const info = document.createElement('div');
// info.classList.add('info');

// const title = document.createElement('h2');
// title.textContent = image.title;

// const description = document.createElement('p');
// description.textContent = image.description;

// info.appendChild(title);
// info.appendChild(description);

// item.appendChild(img);
// item.appendChild(info);


// back of the card

const cardBack = document.createElement('div');
      cardBack.classList.add('card-back');

       cardBack.innerHTML = ` <h1>working well</h1>`

      
      card.appendChild(cardBack);
return card;
});

galleryItems.forEach(item => gallery.appendChild(item));