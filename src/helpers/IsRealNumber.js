export default function isRealNumber(a) {
  if (!isNaN(a) && a > 0 && a != null) {
    return true;
  }
}
