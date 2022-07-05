import Engine from "./assets/Engine.jpg";
import service from "./assets/service.jpg";
import subaru from "./assets/subaru.jpg";
import tuning from "./assets/tuning.jpg";

export interface Product {
  image: any;
  title: string;
  text: string;
  detail: string;
  id: number;
  price: number;
  valuta: string;
}

// Array of objects that is all the chocolates on the page
export const mockedProducts: Product[] = [
  {
    image: Engine,
    title: "Motoroptimering",
    text: "Förbättra prestanda...",
    detail: "Förbättra prestanda",
    id: 1,
    price: 1000,
    valuta: "SEK",
  },
  {
    image: service,
    title: "Service",
    text: "Oljebyte, byte av bromskloss m.m...",
    detail: "Oljebyte, byte av bromskloss m.m",
    id: 2,
    price: 500,
    valuta: "SEK",
  },
  {
    image: tuning,
    title: "Motoroptimering",
    text: "Förbättra prestanda...",
    detail: "Förbättra prestanda",
    id: 3,
    price: 1000,
    valuta: "SEK",
  },
];
