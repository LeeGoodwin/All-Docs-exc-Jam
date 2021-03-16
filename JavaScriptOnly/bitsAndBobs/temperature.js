// Todays temperature in kelvin set as variable
const kelvin = 276;
// variable of kelvin - 273 to get celsius 
const celsius = kelvin - 273;
// converting celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//rounds off fahrenheit to int
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
console.log(`The temperature is ${celsius} degrees Celsius.`)
console.log(`The temperature is ${kelvin} degrees Kelvin.`)
