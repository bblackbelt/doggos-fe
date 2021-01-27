import { Breed } from '../breeds/Breed';


export interface Doggo {
    breeds: Breed[];
    height: number;
    id: string;
    url: string;
    width: number;
}
