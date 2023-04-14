import { galleryItems } from './gallery-items.js';
// Change code below this line
const imagesContainer = document.querySelector(".gallery");
const imagesMarkup = galleryItems.map(({ preview, original, description }) => 
`<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
       src="${preview}"
       data-source="${original}"
       alt="${description}"
      
    />
  </a>
</li>`)
imagesContainer.insertAdjacentHTML("beforeend", imagesMarkup.join(''));
imagesContainer.addEventListener('click', onClick)

function onClick(evt) {
    evt.preventDefault()

    const currentItem = evt.target.closest("img").dataset.source;
    if (!currentItem) {
        return;
    }

    const instance = basicLightbox.create(
    `<div>
    <img src="${currentItem}" width="300" />
    </div>`, { closable: true });
    instance.show();
}


    



// const imagesContainer = document.querySelector(".gallery");
//  const imagesMarkup = createPictureGallery(galleryItems);
// imagesContainer.insertAdjacentHTML("beforeend", imagesMarkup);

// document.querySelectorAll(".gallery__image").forEach((elem) => {
//     elem.addEventListener('click', () => onImageClick(elem));
//     //  elem.preventDefault()
// })

// function onImageClick(elem) {  
//     // elem.preventDefault();
//     const instance = basicLightbox.create(`<img src="${elem.dataset.source}" />`, { closable: true });
//     instance.show(() => {
//         window.addEventListener('keydown', (event) => {
//            
//         console.log("key pressed: " + event.key)
//             if (event.key === 'Escape') {
//                 instance.close(() => {
//                     // window.removeEventListener()
//                 })
//             }        
//         })
//     })    
// };

// function createPictureGallery(galleryItems) {
//     return galleryItems.map(({ preview, original, description }) => {
//         return `<div class="gallery__item">
//              <a class="gallery__link" href="${original}">
//                 <img 
//                     class="gallery__image"
//                     src="${preview}"
//                     data-source="${original}"
//                     alt="${description}"
//                 />
//              </a>
//         </div>`;
//     }).join("");
    
// }









