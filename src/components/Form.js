import { useState } from "react";
import "./Form.css";
import Workspace from "./Workspace";
import InfoIcon from "@material-ui/icons/Info";

export default function Form(props) {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  var current = "#" + randomColor;

  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [rectanglesItems, setRectanglesItems] = useState([]);

  //if (w || h == 0 || null) dont display;
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setRectanglesItems([
      ...rectanglesItems,
      {
        w: width / 2,
        h: height / 2,
        c: current,
      },
    ]);
  };

  return (
    <>
      <br />
      <form onSubmit={handleFormSubmit}>
        <label>
          <p>Dimensions:</p>
          {"Width: "}
          <input
            type="text"
            placeholder="e.g. 200"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
          {" Height: "}
          <input
            type="text"
            placeholder="e.g. 100"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Add a rectangle" />
      </form>
      <p style={{ display: "block" }}>
        <InfoIcon /> Some rectangles may appear invisible. That's because the
        color of the figures probably matches the background color.
      </p>
      <Workspace rectangles={rectanglesItems} />
    </>
  );
}
