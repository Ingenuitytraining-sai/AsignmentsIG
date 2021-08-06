export type Assets = {
    baseUrl: string;
    images: { key: string, url: string }[];
};
export default {
    baseUrl: './assets/',
    images: [
        {
            key: 'gold',
            url: 'img/gold.png',
        },

    ],
};