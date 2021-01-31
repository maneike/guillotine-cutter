import { useState } from "react";
import { useTheme } from "css-vars-hook";

import "./Playground.css";

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  get area() {
    return this.calcArea();
  }
  calcArea() {
    return this.height * this.width;
  }
}
/*
const tab = [rect1.area, rect2.area, rect3.area];
const sortedtab = tab.sort(function (tab, temp) {
  return tab - temp;
});
*/
/*


There are a few ways of doing this, so I'll just give an example of a simple to understand (if somewhat inefficient) method that should still give fairly decent results.

    Start by ordering your boxes from largest to smallest.
    Presume that your first box is going to be square (it won't end up that way, but it will end close). Take sqrt(area[1]) to get the length of its side. Take that width as the width you want for your first column.
    Given that width, fill as many more rows as you can in that column.
    Add up how much total area you have put in the column; resize its width to be match that (it will now be a little thinner).
    Repeat steps 1-3 for the rest of the available boxes. When you get to the point where the target width for your first box in the column is wider than the amount of space you have left, just use that width.
    The remaining boxes should cleanly fit into that remaining space in that column.

This will give you aligned columns, with varying height divisions. As an alternative, you can flip "row" and "column" to get constant row divisions with varying column splits.


*/

export default function Playground(props) {
  const rectangleMeasures = { boxWidth: "200px", boxHeight: "300px" };
  const [sheetWidth, setSheetWidth] = useState("");
  const [sheetHeight, setSheetHeight] = useState("");
  const [rectangleWidth, setRectangleWidth] = useState(
    rectangleMeasures.boxWidth
  );
  const [rectangleHeight, setRectangleHeight] = useState(
    rectangleMeasures.boxHeight
  );

  const { setRef, setVariable } = useTheme(rectangleMeasures);

  const handleSheetDimensionsSubmit = (e) => {
    e.preventDefault();
    alert(`Sheet dimensons: ${sheetWidth} x ${sheetHeight}`);
  };
  const handleRectangleDimensionsSubmit = (e) => {
    e.preventDefault();
    setVariable("boxWidth", rectangleWidth);
    setVariable("boxHeight", rectangleHeight);
  };
  return (
    <>
      <h1>{props.title}</h1>
      <div ref={setRef}>
        <form onSubmit={handleSheetDimensionsSubmit}>
          <label>
            Sheet dimensons:
            <input
              type="text"
              value={sheetWidth}
              onChange={(e) => setSheetWidth(e.target.value)}
            />
            <input
              type="text"
              value={sheetHeight}
              onChange={(e) => setSheetHeight(e.target.value)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <form onSubmit={handleRectangleDimensionsSubmit}>
          <label>
            Rectangle dimensons:
            <input
              type="text"
              value={rectangleWidth}
              onChange={(e) => setRectangleWidth(e.target.value)}
            />
            <input
              type="text"
              value={rectangleHeight}
              onChange={(e) => setRectangleHeight(e.target.value)}
            />
          </label>
          <input type="submit" value="+" />
        </form>
        <div className="boxes">
          <div
            className="demo-box"
            style={{
              background: "red",
              width: rectangleWidth,
              height: rectangleHeight,
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
