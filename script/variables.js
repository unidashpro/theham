export const tabsWrapper = document.querySelector('.tabs');
export const tabsContent = document.querySelector('.tabs-content');

export const photos = {
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
    All: function () {
        return [...this['Graphic Design'], ...this['Web Design'], ...this['Landing Pages'], ...this.Wordpress];
    },
};

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
        userImg: './assets/img/feedback/dictator.png',
    },
    {
        user: 'WALTER WHITE',
        position: 'Drug Dealer',
        quote: 'You clearly don???t know who you???re talking to, so let me clue you in. I am not in danger, Skyler. I am the danger. A guy opens his door and gets shot, and you think that of me? No! I am the one who knocks!',
        userImg: './assets/img/feedback/bing1.png',
    },
    {
        user: 'DON VITO CORLEONE',
        position: 'The Godfather',
        quote: 'They made me an offer I couldn???t refuse. Friendship is everything. Friendship is more than talent. It is more than the government. It is almost the equal of family. Great men are not born great, they grow great.',
        userImg: './assets/img/feedback/borat.png',
    },
    {
        user: 'HERMIONA GRAY',
        position: 'UX Designer',
        quote: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.',
        userImg: './assets/img/feedback/pt.png',
    },
];

export const galleryImages = [
    './assets/img/gallery/vanglo-house-1.webp',
    './assets/img/gallery/skyscraper.webp',
    [
        ['./assets/img/gallery/ringve-museum.webp', 'width-s'],
        ['./assets/img/gallery/Kids-Store-Lighting.webp', 'width-s'],
        ['./assets/img/gallery/swiming-pool.webp', 'width-xs'],
        ['./assets/img/gallery/Kids-Store.webp', 'width-xs'],
        ['./assets/img/gallery/vanglo-house-4.webp', 'width-xs'],
        ['./assets/img/gallery/Kids-Store-Lighting.webp', 'width-xs'],
        ['./assets/img/gallery/vanglo-house-3.webp', 'width-xs'],
        ['./assets/img/gallery/hourses.webp', 'width-xs'],
        ['./assets/img/gallery/vanglo-house-1.webp', 'width-xs'],
        ['./assets/img/gallery/billionares.webp', 'width-xs'],
        ['./assets/img/gallery/Brazil-staduims.webp', 'width-xs'],
    ],
    './assets/img/gallery/vanglo-house-2.webp',
    './assets/img/gallery/interior.webp',
    './assets/img/gallery/arch.webp',
    './assets/img/gallery/ringve-museum.webp',
    './assets/img/gallery/vanglo-house-1.webp',
    './assets/img/gallery/bicycle.webp',
    './assets/img/gallery/car-heart.webp',
    './assets/img/gallery/city-night.webp',
    './assets/img/gallery/tower.webp',
    './assets/img/gallery/cup.webp',
    './assets/img/gallery/deer.webp',
    './assets/img/gallery/sweets.webp',
    './assets/img/gallery/trashcan.webp',
    './assets/img/gallery/child.webp',
    './assets/img/gallery/cafe.webp',
    './assets/img/gallery/records.webp',
    './assets/img/gallery/cofee.webp',
    './assets/img/gallery/bird.webp',
    './assets/img/gallery/cat.webp',
    './assets/img/gallery/book.webp',
    './assets/img/gallery/gift.webp',
];
