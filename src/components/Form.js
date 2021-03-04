import { useState } from "react";
import InfoIcon from "@material-ui/icons/Info";
import Tooltip from "@material-ui/core/Tooltip";

import "./Form.css";
import Workspace from "./Workspace";
import RandomColor from "../helpers/RandomColor";

export default function Form(props) {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [rectanglesItems, setRectanglesItems] = useState([]);
  const [dimensionsError, setDimensionsError] = useState("");

  const [sheetWidth, setSheetWidth] = useState(2000);
  const sheetHeight = 2000;

  function Validation() {
    if (
      isNaN(width) ||
      isNaN(height) ||
      width <= 0 ||
      height <= 0 ||
      width === null ||
      height === null
    ) {
      setDimensionsError("Enter correct dimensions");
      return false;
    }
    if (width > sheetWidth || height > sheetHeight) {
      setDimensionsError("Dimensions too big");
      return false;
    }
    return true;
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setDimensionsError("");
    Validation();
    if (Validation()) {
      setRectanglesItems([
        ...rectanglesItems,
        {
          w: width / 2,
          h: height / 2,
          c: RandomColor(),
        },
      ]);
    }
  };

  return (
    <>
      <br />
      <form onSubmit={handleFormSubmit}>
        <label>
          <p>Rectangle dimensions:</p>
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
        {{ dimensionsError } ? (
          <p style={{ color: "crimson" }}>{dimensionsError}</p>
        ) : null}
        <br />
        <input type="submit" value="Add a rectangle" />
        <Tooltip
          title="Some rectangles may appear invisible. That's because the color of
            the figures probably matches the background color."
        >
          <InfoIcon />
        </Tooltip>
      </form>
      <p>
        Current space: {sheetWidth} x {sheetHeight}
      </p>
      <Workspace rectangles={rectanglesItems} />
    </>
  );
}
