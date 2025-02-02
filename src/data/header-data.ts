// src/data/header-data.ts
import { IHeaderData } from '../interfaces/global.interface';

export const navigationData: IHeaderData[] = [
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'About',
        url: '/about',
    },
    {
        title: 'Fine Art',
        submenu: [
            {
                title: 'Minimalist',
                url: '/fine-art/minimalist',
            },
            {
                title: 'Minimalist BW',
                url: '/fine-art/minimalist-bw',
            },
            {
                title: 'Abstract',
                url: '/fine-art/abstract',
            },
            // {
            //     title: 'Escape',
            //     url: '/fine-art/escape',
            // },
            {
                title: 'Local Art',
                url: '/local-art',
            },
        ],
    },
    {
        title: 'Pricing',
        url: '/pricing',
    },
    {
        title: 'Contact',
        url: '/contact',
    },
    {
        title: 'Exhibits',
        url: '/exhibits',
    },
];
