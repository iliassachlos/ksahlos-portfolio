export interface IHeaderData {
    title: string;
    url: string;
    submenu?: IHeaderData[];
}

export interface IDocData {
    title: string;
    desc: string;
    number: number;
    url: string;
    visibility: boolean;
}

export interface IPhoto extends IDocData {
    id: string;
}

export interface IExhibitsData {
    name: string;
    coordinates: [number, number];
}

export interface IExhibits extends IExhibitsData {
    id: string;
}

export interface ICollectionCategories {
    title: string;
    imageUrl: string
    redirectionUrl: string
}

