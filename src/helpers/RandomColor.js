export default function RandomColor() {
  return "#" + (Math.random().toString(16) + "000000").slice(2, 8);
}
