import * as Shapes from "./shapes";

/**
 * The lowercase names of all pre-defined shapes.
 */
export type ShapeName = Lowercase<keyof typeof Shapes>;

/**
 * Lookup a shape component by its name.
 * Expects the name to be lowercase, but is actually case-insensitive right now.
 * (Subject to change in the future).
 */
export const componentByName = (name: ShapeName) => {
    const found = Object.entries(Shapes).find(
        ([key]) => key.toLowerCase() === name.toLowerCase()
    );
    if ( ! found ) {
        throw new Error(`Invalid shape name ${name}. Name must be one of ${Object.keys(Shapes).map(s => s.toLowerCase()).join(", ")}.`);
    }
    return found[1];
}
