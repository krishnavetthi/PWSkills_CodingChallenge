/*
Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should use the map higher-order function to create a new object with the converted prices in Rupees.
*/

let items = {
    bread:20,
    butter : 5,
    eggs : 15,
    chicken : 20,
    fish : 25,
    water : 10
}

let newItems = {...items};
Object.entries(newItems).forEach(([key, val])=>{newItems[key] = val*80});
console.log(newItems);

let itemsList = [
    {item:'bread',rate:20},
    {item:'butter',rate:5},
    {item:'eggs',rate:15},
    {item:'fish',rate:25},];

let newItemsList = itemsList.map(({item,rate})=>({[item]:rate*80}));
console.log(newItemsList)