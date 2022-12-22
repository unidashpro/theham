import { feedbackInfo } from './variables.js';
const carouselPhotosPlace = document.querySelector('.carousel-image-wrapper');
const feedbackBlock = document.querySelector('.feedback-block');
const sliderButtons = document.querySelectorAll('.change-photo-btn');
let prevTarget;
let counter = 0;

function addPhotos() {
    feedbackInfo.forEach(({ userImg }, index) => {
        carouselPhotosPlace.innerHTML += `<img src="${userImg}" class="feedback-carousel-image" data-key="${index}">`;
    });
}

function createQuoteImage() {
    return `<img src="./assets/icons/quote-icon.png" alt="quote" width="44px" height="30px">`;
}

function showFullQuote(elem) {
    feedbackBlock.style.opacity = '0';
    setTimeout(() => {
        feedbackBlock.innerHTML = `
        ${createQuoteImage()}
        <p class="quote-text">
          ${elem.quote}
        </p>
                    <div class="quote-details">
                        <p class="quote-author">${elem.user}</p>
                        <p class="quote-author-position">${elem.position}</p>
                    </div>
        <img src="${elem.userImg}" class="feedback-image">`;
        feedbackBlock.style.opacity = '1';
    }, 250);
}

function changeQuoteButton() {
    sliderButtons.forEach(btn => {
        btn.addEventListener('click', e => {
            if (e.target.dataset.key === 'right') {
                if (counter === 3) {
                    counter = -1;
                }
                counter++;
            } else {
                if (counter === 0) {
                    counter = 4;
                }
                counter--;
            }
            [...carouselPhotosPlace.children].forEach(elem => {
                if (+elem.dataset.key !== counter) {
                    elem.classList.remove('active');
                } else {
                    elem.classList.add('active');
                    prevTarget = elem;
                }
            });
            showFullQuote(feedbackInfo[counter]);
        });
    });
}

function changeQuote() {
    const elems = carouselPhotosPlace.children;
    elems[0].classList.add('active');
    prevTarget = elems[0];
    carouselPhotosPlace.addEventListener('click', e => {
        if (e.target?.classList?.contains('feedback-carousel-image')) {
            if (e.target !== prevTarget) {
                prevTarget?.classList?.remove('active');
                prevTarget = e.target;
            }
            e.target?.classList.add('active');
            counter = +e.target.getAttribute('data-key');
            showFullQuote(feedbackInfo[counter]);
        }
    });
}

export const createSlider = () => {
    addPhotos();
    changeQuote();
    changeQuoteButton();
};
