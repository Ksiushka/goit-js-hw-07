import { galleryItems } from './gallery-items.js';
// Change code below this line

const imagesContainer = document.querySelector(".gallery");
const imagesMarkup = createPictureGallery(galleryItems);
imagesContainer.insertAdjacentHTML("beforeend", imagesMarkup);

// const list = document.querySelector('.gallery');
// const markup = galleryItems.map(url => `<img src="${url}" loading="lazy" alt="pic" width="300"></img>`);
// list.innerHTML = markup.join('');

function createPictureGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img 
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`;
    }).join("");
}
console.log(imagesMarkup);

const instance = basicLightbox.create(`
	<h1>Not closable</h1>
	<p>It's not possible to close this lightbox with a click.</p>
`, {
	closable: false
})

// const gallery = document.querySelector('.gallery');
// gallery.addEventListener("click", imagesGallery);

// console.log(gallery);
// const listWithId = document.querySelector('#categories');
// console.log('Number of categories:', listWithId.children.length);

