// grocery.ts
// this is a program that will define a class called Grocery

class Grocery {
    fullinfo: string;
    constructor ( public item: string, public qty: number, public price: number ) {
        this.fullinfo = item + qty + price
    }
}

interface GroceryItem {
    item: string;
    qty: number;
    price: number;
}

function getitem(item: GroceryItem) {
    return "Item is: " + item.qty + " " + item.item + " @ $" + item.price + " = " + item.qty * item.price + '<br>';
}

let listarray: Array<GroceryItem> = [{item: 'milk', qty: 2, price: 2.69}, {item: 'bread', qty: 1, price: 1.79}, {item: 'butter', qty: 4, price: 3.19}];

let paragraph = document.createElement('p')
paragraph.setAttribute('style', 'white-space: pre;')

for (let listitem of listarray) {
    // it is necessary to add this to itself to get it to space and not to just display the last item
    // in the array
    document.body.innerHTML = document.body.innerHTML + getitem(listitem);
}
