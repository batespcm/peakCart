const Basket = require('../models/basket')

const addItemToBasket = (req, res, next) => {
    const { productID } = req.body
    Basket.addToBasket(productID).then(prod => {
        console.log(prod, "prod in add to basket controller")
        res.status(200).send({ prod })
    })


}

const removeItemFromBasket = (req, res) => {

    console.log("you have reached the removeItemFromBasket Controller")

}

const emptyBasket = (req, res) => {

    console.log("you have reached the emptyBasket Controller")
    return basket
}

module.exports = { addItemToBasket, removeItemFromBasket, emptyBasket }