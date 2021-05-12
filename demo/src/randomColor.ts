import chroma from "chroma-js";

export const randomColor = (): string => chroma.random().hex();

export const randomHexes = (count: number): string[] => {
    return Array.from({length: count}, randomColor);
}
