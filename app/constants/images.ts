export const IMAGES = {
  PIZZA_COOL: '/assets/images/pizza-cool.svg',
  PIZZA_COOL_GRADIENT: '/assets/images/pizza-cool-gradient.svg',
  PIZZA_SLICE: '/assets/images/pizza-slice.png',
} as const;

export type ImageKeys = keyof typeof IMAGES;