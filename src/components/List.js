export default function List(props) {
  const rectangles = props.rectangles;
  const listItems = rectangles.map((rectangle) => (
    <li>
      {rectangle.w} x {rectangle.h}
    </li>
  ));

  return <> {listItems}</>;
}
