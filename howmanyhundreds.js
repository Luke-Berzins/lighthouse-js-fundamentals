function howManyHundreds(num) {
  if (num < 100) {
    return 0;
  }
  else {var remainder = num % 100; 
    var amount = num - remainder;
  }
    return amount / 100; 
}
console.log(howManyHundreds(1234))