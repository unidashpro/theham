'use strict';
import photos from './variables.js';
import { createPhotoHover } from './createPhotoHover.js';
const photoTabsWrapper = document.querySelector('.photos-container').querySelector('.tabs');
const photoPlace = document.querySelector('.photos-grid');
const loadButton = document.querySelector('.work-button');
const loadAnimation = document.querySelector('.centered');
let counter = 0;
let prevTarget = photoTabsWrapper.children[0];

// TODO переделать массив с фото в объект, добавить тег ключ который будет выводиться на картинку при ховере
// Ключ можно вытащить из пути картинки

function createWorkGrid(atr, more = false) {
    if (!more) {
        photoPlace.innerHTML = '';
        counter = 0;
    }

    for (let i = 0; i < 12; i++) {
        photoPlace.innerHTML += `
        <div class="photos-grid-item">
        <img src="./assets/img/${photos[atr][counter]}" alt="Our Work Images">
        ${createPhotoHover(photos[atr][counter])}
        </div>
        `;
        if (counter === photos[atr].length - 1) {
            loadButton.style.visibility = 'hidden';
            break;
        }
        counter++;
    }
}

const createTabs = () => {
    prevTarget.classList?.add('active');
    [...photoTabsWrapper.children].forEach(e => e.setAttribute('data-about', e.innerText));
    let dataAtr = prevTarget.getAttribute('data-about');
    createWorkGrid(dataAtr);

    photoTabsWrapper.addEventListener('click', e => {
        if (e.target.classList.contains('tabs-list')) {
            if (prevTarget !== e.target) {
                prevTarget?.classList.remove('active');
                prevTarget = e.target;
                loadButton.style.visibility = 'visible';
            }
            e.target?.classList.add('active');
            dataAtr = e.target.getAttribute('data-about');
            createWorkGrid(dataAtr);
        }
    });
};

loadButton.addEventListener('click', () => {
    loadButton.style.visibility = 'hidden';
    loadAnimation.style.visibility = 'visible';
    setTimeout(() => {
        loadButton.style.visibility = 'visible';
        loadAnimation.style.visibility = 'hidden';
        [...photoTabsWrapper.children].forEach(e => e.classList.contains('active') && createWorkGrid(e.getAttribute('data-about'), true));
    }, 2000);
});

export const createPhotoTabs = () => {
    // console.log(photos.test());
    createTabs();
};
