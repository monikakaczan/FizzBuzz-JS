function FizzBuzz() {};

FizzBuzz.prototype.divby3 = function(num) {
  return num % 3 === 0
};

FizzBuzz.prototype.divby5 = function(num) {
  return num % 5 === 0
};

FizzBuzz.prototype.div3and5 = function(num) {
  return num % 15 === 0
};

FizzBuzz.prototype.output = function(num){
  if(this.div3and5(num)){
    return "FizzBuzz"
  } else if (this.divby3(num)){
    return "Fizz"
  } else if (this.divby5(num)){
    return "Buzz"
  } else{
    return num
  }
};
