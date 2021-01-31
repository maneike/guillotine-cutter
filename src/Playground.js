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

const rect1 = new Rectangle(30, 50);
const rect2 = new Rectangle(40, 50);
const rect3 = new Rectangle(10, 20);

const tab = [rect1.area, rect2.area, rect3.area];
const sortedtab = tab.sort(function (tab, temp) {
  return tab - temp;
});
const prettytab = sortedtab.toString();

let Sheet = { w: 10, h: 5 };
const Square = { w: 4, h: 4 };

let activities = [
  ["Work", 9],
  ["Eat", 1],
  ["Commute", 2],
  ["Play Game", 1],
  ["Sleep", 7],
];
console.table(activities);
// loop the outer array
for (let i = 0; i < activities.length; i++) {
  // get the size of the inner array
  var innerArrayLength = activities[i].length;
  // loop the inner array
  for (let j = 0; j < innerArrayLength; j++) {
    console.log("[" + i + "," + j + "] = " + activities[i][j]);
  }
}

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
  return (
    <>
      <h1>{props.title}</h1>
      <p>Here is where the magic will happen.</p>
      <p>Soon enough.</p>
    </>
  );
}
