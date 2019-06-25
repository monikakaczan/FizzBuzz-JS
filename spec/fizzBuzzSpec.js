describe("FizzBuzz", function() {
  fizzbuzz = new FizzBuzz();
});
  it("Should return fizz if div by 3", function() {
    expect(fizzbuzz.divby3(3)).toBe(true);
  });

  it("Should return buzz if div by 5", function(){
    expect(fizzbuzz.divby5(5)).toBe(true);
  });

  it("Should return FizzBuzz if div by 3 and 5", function() {
    expect(fizzbuzz.div3and5(15)).toBe(true);
  });

  it("Returns a number if not div by 3", function() {
    expect(fizzbuzz.divby3(7)).toBe(false);
  });

 it("returns a number if not divisible by any", function(){
   expect(fizzbuzz.output(13)).toBe(13);
 });
