module.exports = function toReadable (number) {
  const ones = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
  const tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");
    
  if (number < 20) return ones[number];

  let res = number % 10;
  
  if (number < 100) return tens[Math.floor(number / 10) - 2] + (res ? " " + ones[res]: "");
  if (number < 1000) return ones[Math.floor(number / 100)] +" hundred" + (number % 100 == 0 ? "": " " + toReadable(number % 100));
}
