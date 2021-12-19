export const printify = (number, decPlaces = 2) => {
  // var orig = number;
  // var dec = decPlaces;
  // 2 decimal places => 100, 3 => 1000, etc
  decPlaces = Math.pow(10, decPlaces);

  // Enumerate num abbreviations
  var abbrev = ["k", "m", "b", "t"];

  // Go through the array backwards, so we do the largest first
  for (var i = abbrev.length - 1; i >= 0; i--) {
    // Convert array index to "1000", "1000000", etc
    var size = Math.pow(10, (i + 1) * 3);

    // If the num is bigger or equal do the abbreviation
    if (size <= number) {
      // Here, we multiply by decPlaces, round, and then divide by decPlaces.
      // This gives us nice rounding to a particular decimal place.
      number = Math.floor((number * decPlaces) / size) / decPlaces;

      // Handle special case where we round up to the next abbreviation
      if (number === 1000 && i < abbrev.length - 1) {
        number = 1;
        i++;
      }

      number = (number + "").slice(0, 5);

      let hasDot = (number + "").indexOf(".") > -1;

      if (hasDot) {
        while (number[number.length - 1] === "0") {
          number = number.slice(0, -1);
        }
      }

      const lastSymbol = number[number.length - 1];
      if (lastSymbol === ".") {
        number = number.slice(0, -1);
      }

      // console.log(number);
      // Add the letter for the abbreviation
      number += "" + abbrev[i];

      // We are done... stop
      break;
    }
  }

  return number;
};
