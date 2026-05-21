import penne from "./penne.jpeg";
import coloredSticks from "./colored-sticks.jpeg";
import fusilli from "./fusilli.jpeg";
import macaroniElbow from "./macaroni-elbow.jpeg";
import pappardelle from "./pappardelle.jpeg";
import flowerPasta from "./flower-pasta.jpeg";
import glostaPohaForest from "./glosta-poha-forest.jpeg";
import glostaPohaLifestyle from "./glosta-poha-lifestyle.jpeg";
import coloredPastaBulk from "./colored-pasta-bulk.jpeg";
import makhana from "./makhana.jpeg";

export type ProductImage = {
  src: string;
  label: string;
  category: "Poha" | "Pasta" | "Macaroni" | "Vermicelli" | "Makhana";
};

export const productImages: ProductImage[] = [
  { src: glostaPohaLifestyle, label: "Glosta Poha — Lifestyle", category: "Poha" },
  { src: glostaPohaForest, label: "Glosta Poha Pack", category: "Poha" },
  { src: penne, label: "Penne Pasta", category: "Pasta" },
  { src: fusilli, label: "Fusilli Spirals", category: "Pasta" },
  { src: pappardelle, label: "Pappardelle Ribbons", category: "Pasta" },
  { src: coloredSticks, label: "Tri-Colour Pasta Sticks", category: "Pasta" },
  { src: flowerPasta, label: "Flower Shape Pasta", category: "Pasta" },
  { src: coloredPastaBulk, label: "Colour Mix — Bulk", category: "Pasta" },
  { src: macaroniElbow, label: "Elbow Macaroni", category: "Macaroni" },
  { src: makhana, label: "Premium Makhana", category: "Makhana" },
];

export {
  penne,
  coloredSticks,
  fusilli,
  macaroniElbow,
  pappardelle,
  flowerPasta,
  glostaPohaForest,
  glostaPohaLifestyle,
  coloredPastaBulk,
  makhana,
};
