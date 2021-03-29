export default function isRealNumber(a) {
  if (!isNaN(a) && a > 0 && a != null && a % 1 == 0) {
    return true;
    //first form fields works correctly, second doesn't (math.sign()?)
  }
}
