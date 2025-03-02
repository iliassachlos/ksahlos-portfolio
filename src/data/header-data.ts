// src/data/header-data.ts
import { HeaderCategoriesEnum, IHeaderData } from '../interfaces/global.interface';

export const navigationData: IHeaderData[] = [
    {
        title: 'Home',
        url: '/',
        category: HeaderCategoriesEnum.GENERAL
    },
    {
        title: 'About',
        url: '/about',
        category: HeaderCategoriesEnum.GENERAL
    },
    {
        title: 'Minimalist',
        url: '/collection/minimalist',
        category: HeaderCategoriesEnum.GALLERY
    },
    {
        title: 'Minimalist BW',
        url: '/collection/minimalist-bw',
        category: HeaderCategoriesEnum.GALLERY
    },
    {
        title: 'Abstract',
        url: '/collection/abstract',
        category: HeaderCategoriesEnum.GALLERY
    },
    {
        title: 'Local Art',
        url: '/local-art',
        category: HeaderCategoriesEnum.GALLERY
    },
    {
        title: 'Black And White',
        url: '/black-and-white',
        category: HeaderCategoriesEnum.GALLERY
    },
    {
        title: 'Contemporary',
        url: '/contemporary',
        category: HeaderCategoriesEnum.GALLERY
    },
    {
        title: 'Impressionism',
        url: '/impressionism',
        category: HeaderCategoriesEnum.GALLERY
    },
    {
        title: 'Lesvos Island',
        url: '/lesvos-island',
        category: HeaderCategoriesEnum.GALLERY
    },
    {
        title: 'Minimal',
        url: '/minimal',
        category: HeaderCategoriesEnum.GALLERY
    },
    {
        title: 'Seascape',
        url: '/seascape',
        category: HeaderCategoriesEnum.GALLERY
    },
    {
        title: 'Surrealism',
        url: '/surrealism',
        category: HeaderCategoriesEnum.GALLERY
    },
    {
        title: 'Wildlife',
        url: '/wildlife',
        category: HeaderCategoriesEnum.GALLERY
    },
    {
        title: 'Pricing',
        url: '/pricing',
        category: HeaderCategoriesEnum.GENERAL
    },
    {
        title: 'Contact',
        url: '/contact',
        category: HeaderCategoriesEnum.GENERAL
    },
    {
        title: 'Exhibits',
        url: '/exhibits',
        category: HeaderCategoriesEnum.GENERAL
    },
];
