import "./Workspace.css";

export default function Workspace(props) {
  const rectangles = props.rectangles;
  const listRectangles = rectangles.map((rectangle) => (
    <div
      style={{
        width: rectangle.w,
        height: rectangle.h,
        background: rectangle.c,
        display: "inline-block",
        float: "left",
        position: "relative",
      }}
    >
      {2 * rectangle.w} x {2 * rectangle.h}
    </div>
  ));

  return (
    <>
      <div className="workspace">{listRectangles}</div>
    </>
  );
}
