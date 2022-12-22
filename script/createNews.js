import { postInfo } from './variables.js';

const postPlace = document.querySelector('.blog-container');

export const createNews = () => {
    postInfo.forEach(elem => {
        postPlace.innerHTML += `
            <div class="blog-post">
                   <div class="photo-container">
                        <img src="${elem.image}" alt="blog-image">
                        <div class="post-date"><p>${elem.day}<br>${elem.month}</p></div>
                   </div>
                   <div class="news-text-container">
                            <a href="${elem.href}">${elem.title}</a>
                            <p>By ${elem.user}    |    ${elem.commentQty} comment</p>
                   </div>
            </div>
        `;
    });
};
