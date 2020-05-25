export {};

enum Months {
  Janualy = 1,
  Febrary,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Months.Janualy);
console.log(Months.Febrary);
console.log(Months.December);

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008800',
  BLUE = '#0000FF',
  BLACK = '#000000',
}

let green = COLORS.GREEN;
console.log({ green });

enum COLORS {
  YELLOW = '#FFFF00',
  GRAY = '#808080',
}
const yellow = COLORS.YELLOW;
