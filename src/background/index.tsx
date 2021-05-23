import React, {
  createContext,
  forwardRef,
  PropsWithChildren,
  useContext,
} from "react";

export interface BackgroundProps {
  /**
   * Intrinsic width in pixels of the <svg> element.
   * Will also be used as the viewBox width.
   */
  width: number;
  /**
   * Intrinsic height in pixels of the <svg> element.
   * Will also be used as the viewBox height.
   */
  height: number;
  /**
   * [Optional] If provided, apply a background color to the svg element.
   */
  backgroundColor?: string;
  /**
   * [Optional] If provided, include a <title> element in the <svg>.
   * This is hidden from view and is the equivalent of the "alt"
   * property of an image.
   */
  title?: string;
}

/**
 * Create the BackgroundContext with an arbitrary default size to use
 * if the useBackgroundSize is called invalidly (outside of a Provider).
 */
const BackgroundContext = createContext<BackgroundProps>({
  width: 100,
  height: 100,
});

/**
 * Hook can access the size of the current background.
 */
export const useBackgroundSize = (): BackgroundProps =>
  useContext(BackgroundContext);

/**
 * Also accepts and passes through any props of the underlying <svg> element.
 */
type Props = PropsWithChildren<BackgroundProps & JSX.IntrinsicElements["svg"]>;

/**
 * Creates an svg element with a set background color.
 * Uses a context provider so that descendent elements can find out about
 * the size of the background/viewbox where they are placed.
 *
 * Forwards a ref to the underlying DOM <svg> element.
 *
 * TODO: investigate pros and cons of setting the background via style: backgroundColor vs <rect>
 */
export const Background = forwardRef<SVGSVGElement, Props>(
  ({ children, ...props }, ref) => {
    const { width, height, backgroundColor, title, ...rest } = props;
    return (
      <BackgroundContext.Provider value={props}>
        <svg
          {...rest}
          ref={ref}
          viewBox={`0 0 ${width} ${height}`}
          width={width}
          height={height}
          style={{
            overflow: "hidden",
            ...rest.style,
          }}
        >
          {title !== undefined && <title>{title}</title>}
          {backgroundColor !== undefined && (
            <rect width={width} height={height} fill={backgroundColor} />
          )}
          {children}
        </svg>
      </BackgroundContext.Provider>
    );
  }
);
