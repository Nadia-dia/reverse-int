module.exports = function reverse (n) {
  let nStr = String(Math.abs(n));
  let reverseStr = '';

  for(let i = nStr.length - 1; i >= 0; --i) {
    reverseStr += nStr[i];
  }

  return Number(reverseStr);
}
