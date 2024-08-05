//using map add 1 to new prices
let prices = [99,199,299,399,499]
let newPrices = prices.forEachc((price) => price + 1)
console.log(prices)
console.log(newPrices) 


//using map convert the enames to uppercase
let names = ['john','jane','jim','jill']
let upperNames = names.map((name) => name.toUpperCase())
console.log(names)
console.log(upperNames)