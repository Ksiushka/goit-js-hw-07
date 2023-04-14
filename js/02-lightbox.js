import { galleryItems } from './gallery-items.js';
// Change code below this line

const imagesContainer = document.querySelector(".gallery");
const imagesMarkup = createPictureGallery(galleryItems);
imagesContainer.insertAdjacentHTML("beforeend", imagesMarkup);



function createPictureGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
             <a class="gallery__link" href="${original}">
                <img 
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                />
             </a>
        </li>`;
    }).join("");
    
}

imagesContainer.insertAdjacentHTML("beforeend", imagesMarkup);
imagesContainer.addEventListener('click', onClick);


function onClick(evt) {
    evt.preventDefault()
 new SimpleLightbox('.gallery a', {  captionsData: 'alt',  captionDelay: 250,}); 

gallery.on('show.simplelightbox', function () {
	
})
};



