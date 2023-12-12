function calculate(a, b) {
    return {
      add: function() {
        return a + b;
      },
      divide: function() {
        return a / b;
      },
      multiply: function() {
      return a * b;
      },
      substract: function() {
        return a - b;
      }
    }
  }
  const calculator = calculate(10, 5);
  console.log(calculator.add());
  console.log(calculator.substract());
  console.log(calculator.multiply());
  console.log(calculator.divide());