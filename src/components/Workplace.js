import { useState } from "react";
import List from "./List";

export default function Workplace() {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [rectangleArray, setRectangleArray] = useState("");

  const rectangles = [{ w: "100px", h: "100px", c: "red" }];
  rectangles.push({ w: "200px", h: "300px", c: "cyan" });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    rectangles.push({ w: width + "px", h: height + "px", c: "blue" });
    console.log(rectangles);
  };

  return (
    <>
      <br />
      <form onSubmit={handleFormSubmit}>
        <label>
          Dimensions:
          <input
            type="text"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
          <input
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <List rectangles={rectangles} />
    </>
  );
}
