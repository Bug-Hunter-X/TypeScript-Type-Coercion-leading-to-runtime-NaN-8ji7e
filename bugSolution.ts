function add(a: number, b: number): number {
  //Input validation to ensure both inputs are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both inputs must be numbers');
  }
  return a + b;
}

//Now this will throw an error at runtime
try {
  let result = add("1", 2);
  console.log(result);
} catch (error) {
  console.error(error);
}

//Alternative solution using type assertion (use cautiously)
function add2(a: number, b: number): number {
  return a + b;
}
let result2 = add2(Number("1"), 2); //Explicitly converting string to number
console.log(result2); 