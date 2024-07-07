// /src/interfaces/global.interface.ts
export interface IHeaderData {
    title: string;
    url?: string;
    submenu?: IHeaderData[];
}

export interface IDocData {
    title: string;
    desc: string;
    number: number;
    url: string;
}

export interface IPhoto extends IDocData {
    id: string;
}

export interface ILocations {
    name: string;
    coordinates: [number, number];
}
