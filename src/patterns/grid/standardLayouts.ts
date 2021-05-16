import { GridSpacing, StandardLayout } from "./types";

/**
 * specific use cases of GridPlacements class can compute spacingInRow, spacingBetweenRows, and stagger based on a single
 * spacing variable
 */
const LAYOUTS = {
  /**
   * spacing is the same between rows and columns in a square grid and there is no stagger ( so columns are aligned )
   */
  square: (spacing: number): GridSpacing => ({
    spacing,
    spacingBetweenRows: spacing,
    stagger: 0,
  }),
  /**
   * passed in spacing amount is always horizontal, but note that that spacing along the diagonal will be less than this
   * amount - it will be divided by Math.sqrt(2)
   */
  diagonal: (spacing: number): GridSpacing => ({
    spacing,
    spacingBetweenRows: 0.5 * spacing,
    stagger: 0.5 * spacing,
  }),
  /**
   * spacing represents each side of the triangle
   */
  triangular: (spacing: number): GridSpacing => ({
    spacing,
    spacingBetweenRows: 0.5 * spacing * Math.sqrt(3),
    stagger: 0.5 * spacing,
  }),
};

/**
 * switch between the standard layouts to get spacing
 */
export const getLayoutSpacing = ({
  layout,
  spacing,
}: StandardLayout): GridSpacing => {
  return LAYOUTS[layout](spacing);
};
