
// Write a function that checks if a ticket is lucky
// A lucky ticket is a six-digit number whose first three digits add up to the last three digits

// Examples (Input --> Output)
// '005212' -> true
// '133700' -> true
// '123032' -> false

function checkTicket(number) {
  number = number.toString();
  let half = number.length / 2;
  let first = 0;
  let second = 0;
  for (let i = 0; i < half; i++) {
    first += +number[i];
  }
  for (let j = half; j < number.length; j++) {
    second += +number[j];
  }

  if (first != second) {
    return false;
  } else {
    return true;
  }
}

// For tests
export default checkTicket
