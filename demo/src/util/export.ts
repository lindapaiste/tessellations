/**
 * Save an svg element as a .svg file.
 *
 * Based on: https://stackoverflow.com/a/38481556/10431574
 *
 * Don't need to parse styles because all styling (color, position, etc.) is applied to the svg directly.
 *
 * Note: could generate the `href` and use in React, but don't want to have to compute on every change.
 * Only need to compute when clicked.
 */
export const downloadSVG = (svg: SVGElement, fileName = "pattern"): void => {
  // first create a clone of our svg node so we don't mess the original one
  const clone = svg.cloneNode(true);

  // create a doctype
  const svgDocType = document.implementation.createDocumentType(
    "svg",
    "-//W3C//DTD SVG 1.1//EN",
    "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"
  );
  // a fresh svg document
  const svgDoc = document.implementation.createDocument(
    "http://www.w3.org/2000/svg",
    "svg",
    svgDocType
  );
  // replace the documentElement with our clone
  svgDoc.replaceChild(clone, svgDoc.documentElement);
  // get the data
  const svgData = new XMLSerializer().serializeToString(svgDoc);

  // add and click a hidden link
  // note: might not need to be appended to document, depending on browser: https://stackoverflow.com/a/38019175/10431574
  const a = document.createElement("a");
  a.href = `data:image/svg+xml; charset=utf8, ${encodeURIComponent(
    svgData.replace(/></g, ">\n\r<")
  )}`;
  a.download = `${fileName}.svg`;
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
