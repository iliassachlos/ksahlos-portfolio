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
            // {
            //     title: 'Etherial',
            //     url: '/fine-art/etherial',
            // },
            {
                title: 'Essential',
                url: '/fine-art/essential',
            },
            {
                title: 'Illusion',
                url: '/fine-art/illusion',
            },
           
            {
                title: 'Escape',
                url: '/fine-art/escape',
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
