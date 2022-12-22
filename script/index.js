'use strict';
import { changeTabs } from './changeTabs.js';
import { createPhotoTabs } from './createPhotoTabs.js';
import { createNews } from './createNews.js';
import { createSlider } from './createSlider.js';
import { createGallery } from './createGallery.js';

changeTabs();
createPhotoTabs();
createNews();
createSlider();
createGallery();

var elem = document.querySelector('.grid-masonry');
var msnry = new Masonry(elem, {
    // options
    itemSelector: '.grid-masonry-item',
    columnWidth: 20,
});
