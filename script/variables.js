export const tabsWrapper = document.querySelector('.tabs');
export const tabsContent = document.querySelector('.tabs-content');

const photos = {
    'Graphic Design': [
        'graphic design/1.jpg',
        'graphic design/2.jpg',
        'graphic design/3.jpg',
        'graphic design/4.jpg',
        'graphic design/5.jpg',
        'graphic design/6.jpg',
        'graphic design/7.jpg',
        'graphic design/8.jpg',
        'graphic design/9.jpg',
        'graphic design/10.jpg',
        'graphic design/11.jpg',
        'graphic design/12.jpg',
    ],
    'Web Design': [
        'web design/1.jpg',
        'web design/2.jpg',
        'web design/3.jpg',
        'web design/4.jpg',
        'web design/5.jpg',
        'web design/6.jpg',
        'web design/7.jpg',
        'web design/8.jpg',
        'web design/9.jpg',
        'web design/10.jpg',
        'web design/11.jpg',
        'web design/12.jpg',
    ],
    'Landing Pages': [
        'landing page/1.jpg',
        'landing page/2.jpg',
        'landing page/3.jpg',
        'landing page/4.jpg',
        'landing page/5.jpg',
        'landing page/6.jpg',
        'landing page/7.jpg',
        'landing page/8.jpg',
        'landing page/9.jpg',
        'landing page/10.jpg',
        'landing page/11.jpg',
        'landing page/12.jpg',
    ],
    Wordpress: [
        'wordpress/1.jpg',
        'wordpress/2.jpg',
        'wordpress/3.jpg',
        'wordpress/4.jpg',
        'wordpress/5.jpg',
        'wordpress/6.jpg',
        'wordpress/7.jpg',
        'wordpress/8.jpg',
        'wordpress/9.jpg',
        'wordpress/10.jpg',
        'wordpress/11.jpg',
        'wordpress/12.jpg',
    ],
    // // test: [...this['Graphic Design'], ...this['Landing Pages']],
    // test: function () {
    //     return [...this.Wordpress];
    // },
    // // new: this.test(),
};

let all = [];

const additionalPhotos = [
    'additional/13.jpg',
    'additional/14.jpg',
    'additional/15.jpg',
    'additional/16.jpg',
    'additional/17.jpg',
    'additional/18.jpg',
    'additional/19.jpg',
    'additional/20.jpg',
    // 'additional/21.jpg',
    // 'additional/22.jpg',
    // 'additional/23.jpg',
    // 'additional/24.jpg',
];

for (const [key, value] of Object.entries(photos)) {
    all.push(...value);
    value.push(...additionalPhotos);
}

photos.All = [...all, ...additionalPhotos];

export default photos;

export const postInfo = [
    {
        user: 'admin',
        title: 'Amazing blog post',
        image: './assets/img/news/bn1.png',
        href: '#',
        commentQty: '2',
        day: '12',
        month: 'Feb',
    },
    {
        user: 'admin',
        title: 'Amazing blog post',
        image: './assets/img/news/bn2.png',
        href: '#',
        commentQty: '2',
        day: '12',
        month: 'Feb',
    },
    {
        user: 'admin',
        title: 'Amazing blog post',
        image: './assets/img/news/bn3.png',
        href: '#',
        commentQty: '2',
        day: '12',
        month: 'Feb',
    },
    {
        user: 'admin',
        title: 'Amazing blog post',
        image: './assets/img/news/bn4.png',
        href: '#',
        commentQty: '2',
        day: '12',
        month: 'Feb',
    },
    {
        user: 'admin',
        title: 'Amazing blog post',
        image: './assets/img/news/bn5.png',
        href: '#',
        commentQty: '2',
        day: '12',
        month: 'Feb',
    },
    {
        user: 'admin',
        title: 'Amazing blog post',
        image: './assets/img/news/bn6.png',
        href: '#',
        commentQty: '2',
        day: '12',
        month: 'Feb',
    },
    {
        user: 'admin',
        title: 'Amazing blog post',
        image: './assets/img/news/bn7.png',
        href: '#',
        commentQty: '2',
        day: '12',
        month: 'Feb',
    },
    {
        user: 'admin',
        title: 'Amazing blog post',
        image: './assets/img/news/bn8.png',
        href: '#',
        commentQty: '2',
        day: '12',
        month: 'Feb',
    },
];

export const feedbackInfo = [
    {
        user: 'HASAN ALI',
        position: 'UX Designer',
        quote: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.',
        userImg: './assets/img/feedback/azuki1.jpg',
    },
    {
        user: 'WALTER WHITE',
        position: 'Drug Dealer',
        quote: 'You clearly don’t know who you’re talking to, so let me clue you in. I am not in danger, Skyler. I am the danger. A guy opens his door and gets shot, and you think that of me? No! I am the one who knocks!',
        userImg: './assets/img/feedback/azuki2.jpg',
    },
    {
        user: 'DON VITO CORLEONE',
        position: 'The Godfather',
        quote: 'They made me an offer I couldn’t refuse. Friendship is everything. Friendship is more than talent. It is more than the government. It is almost the equal of family. Great men are not born great, they grow great.',
        userImg: './assets/img/feedback/azuki3.jpg',
    },
    {
        user: 'HASAN ALI',
        position: 'UX Designer',
        quote: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.',
        userImg: './assets/img/feedback/azuki4.jpg',
    },
];

export const galleryImages = [
    './assets/img/gallery/vanglo-house-1.png',
    './assets/img/gallery/skyscraper.png',
    [
        ['./assets/img/gallery/ringve-museum.png', 'width-s'],
        ['./assets/img/gallery/Kids-Store-Lighting.png', 'width-s'],
        ['./assets/img/gallery/swiming-pool.png', 'width-xs'],
        ['./assets/img/gallery/Kids-Store.png', 'width-xs'],
        ['./assets/img/gallery/vanglo-house-4.png', 'width-xs'],
        ['./assets/img/gallery/Kids-Store-Lighting.png', 'width-xs'],
        ['./assets/img/gallery/vanglo-house-3.png', 'width-xs'],
        ['./assets/img/gallery/hourses.png', 'width-xs'],
        ['./assets/img/gallery/vanglo-house-1.png', 'width-xs'],
        ['./assets/img/gallery/billionares.png', 'width-xs'],
        ['./assets/img/gallery/Brazil-staduims.png', 'width-xs'],
    ],
    './assets/img/gallery/vanglo-house-2.png',
    './assets/img/gallery/interior.png',
    './assets/img/gallery/arch.png',
    './assets/img/gallery/ringve-museum.png',
    './assets/img/gallery/vanglo-house-1.png',
    './assets/img/gallery/bicycle.jpg',
    './assets/img/gallery/car-heart.jpg',
    './assets/img/gallery/city-night.jpg',
    './assets/img/gallery/tower.jpg',
    './assets/img/gallery/cup.jpg',
    './assets/img/gallery/deer.jpg',
    './assets/img/gallery/sweets.jpg',
    './assets/img/gallery/trashcan.jpg',

    './assets/img/gallery/child.jpg',
    './assets/img/gallery/cafe.jpg',
    './assets/img/gallery/records.jpg',
    './assets/img/gallery/cofee.jpg',
    './assets/img/gallery/bird.jpg',
    './assets/img/gallery/cat.jpg',
    './assets/img/gallery/book.jpg',
    './assets/img/gallery/gift.jpg',
];
