import { StaticImageData } from "next/image";

export default interface Item {
    id: number;
    author: string;
    content: string;
    src: StaticImageData;
    tag: string[];
};