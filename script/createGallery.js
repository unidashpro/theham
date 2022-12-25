import { galleryImages } from './variables.js';

const galleryGrid = document.querySelector('.grid-masonry');
const modal = document.getElementById('myModal');
const modalImg = document.getElementById('img01');
const closeBtn = document.querySelector('.close-btn');
const loadButton = document.querySelector('.gallery-button');
const loadAnimation = document.querySelector('.gallery-animation');
let counter = 0;

export const createGallery = () => {
    for (let i = 0; i < 8; i++) {
        const elem = galleryImages[counter];
        const img = new Image();
        img.src = `${elem}`;
        setTimeout(() => {
            if (Array.isArray(elem)) {
                galleryGrid.innerHTML += `${createSubGrid(elem)}`;
            } else {
                galleryGrid.innerHTML += `<div class="grid-masonry-item bg-img width-l show-hidden" style="background-image: url(${elem}); height:${img.height / 2}px"></div>`;
            }
        }, 30);
        counter++;
    }
    if (counter >= galleryImages.length) loadButton.style.visibility = 'hidden';

    setTimeout(() => {
        const msnry = new Masonry(galleryGrid, {
            itemSelector: '.grid-masonry-item',
            columnWidth: '.width-l',
            gutter: 13,
        });

        document.querySelectorAll('.show-hidden').forEach(img => {
            if (!img.firstChild) {
                let size = img.classList.contains('width-xs') ? `small-icon` : ``;

                img.insertAdjacentHTML(
                    'beforeend',
                    ` <div class="gallery-hidden">
                    <div class="hidden-search hidden-ico ${size}"></div>
                    <div class="hidden-modal hidden-ico ${size}"></div>
                </div>`
                );
            }
        });
    }, 1000);
    galleryGrid.addEventListener('click', tooltips);
};

closeBtn.addEventListener('click', () => (modal.style.display = 'none'));

loadButton.addEventListener('click', () => {
    loadButton.style.visibility = 'hidden';
    loadAnimation.style.visibility = 'visible';
    setTimeout(() => {
        loadButton.style.visibility = 'visible';
        loadAnimation.style.visibility = 'hidden';
        createGallery();
    }, 2000);
});

function drawSubGrid(arr) {
    let innerHtml = '';
    arr.forEach(elem => {
        innerHtml += `<div class="bg-img ${elem[1]} show-hidden" style="background-image: url(${elem[0]})"></div>`;
    });

    return innerHtml;
}

function createSubGrid(arr) {
    return `<div class="grid-masonry-item wrapper-masonry width-l">${drawSubGrid(arr)}</div>`;
}

function tooltips(e) {
    if (e.target.classList.contains('hidden-search')) {
        const img = e.target.closest('.show-hidden').style.backgroundImage.slice(5, -2);
        window.open(`https://www.google.com/search?q=${img.slice(img.lastIndexOf('/') + 1, -5).replaceAll('-', ' ') + ' photo'}`, '_blank').focus();
    }
    if (e.target.classList.contains('hidden-modal')) {
        const img = e.target.closest('.show-hidden').style.backgroundImage.slice(5, -2);
        modal.style.display = 'block';
        modalImg.src = img;
    }
}
