function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] == 9) {
      digits[i] = 0;
    } else {
      digits[i]++;
      return digits;
    }
  }
  let newDigits = [...Array(digits.length + 1)].map(() => 0);
  newDigits[0] = 1;
  return newDigits;
}
