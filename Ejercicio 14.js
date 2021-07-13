let numbers = [1, 45, 67, 3, 24, 120, 54, 78];

//console.log((numbers.filter(number=> number <=45)).sort((a,b)=> a-b))
//console.log(numbers.map(number=> number <= 45))
console.log(numbers.filter((number) => number <= 45).reduce((a, b) => a + b));
