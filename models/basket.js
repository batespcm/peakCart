const testdata = require('../db/data');

let storeData = testdata.productsData

// A basket that can additems to key of id from req.body

// A basket that checks for duplicates/multiples and has a quantity count

// A basket that returns a weight from the id

// A basket that returns a title from the id

// A basket that calculates a total

// BONUS

// A basket that is capped at 10kg 
// A basket that returns a delivery time in days
// What happens at 10kg does the order stop? Do we have 2 baskets? 


class Basket {

    constructor() {
        this.data = {}
        this.data.items = []
        this.data.totalPrice = 0
        this.data.totalWeight = 0
    }

    countProducts(productID = 0) {
        console.log(productID, "prod id in COUNTPRODUCTS")
        let found = false;
        this.data.items.forEach(item => {
            if (item.id === productID) {
                found = true;
            }
        });
        return found;
    }

    addToBasket(productID, quantity = 1) {
        if (!this.countProducts(productID))
            console.log(productID, "PRODUCTID in find product in BASKET")

        const productAdded = storeData.find(item => {
            if (item.id === productID) {
                let prod = {
                    id: item.id,
                    title: item.title,
                    weight: item.weight,
                    timeToDeliver: item.timeToDeliver,
                    price: item.price,
                    quantity: quantity


                }
                console.log(prod, "is prod building in basket")
                this.data.items.push(prod)
                this.calculateTotals()
            }
        });
        console.log(this.data.items, "ITEMS IN FIND AND ADD PRODUCT BASKET")
        console.log(this.data.totalWeight, "TOTAL WEIGHT IN FIND AND ADD PRODUCT BASKET")
        console.log(this.data.totalPrice, "TOTAL PRICE IN FIND AND ADD PRODUCT BASKET")
        return this.data.items
    }

    calculateTotals() {
        this.data.totals = 0;
        this.data.items.forEach(item => {
            let price = item.price;
            let quantity = item.quantity;
            let weight = item.weight
            let amount = price * quantity;
            let totalWeight = quantity * weight

            this.data.totalWeight += totalWeight
            this.data.totalPrice += amount;
        });
        console.log(this.data.totalPrice, this.data.totalWeight)
        this.data.totalWeight,
            this.data.totalPrice
    }

}





module.exports = new Basket;
