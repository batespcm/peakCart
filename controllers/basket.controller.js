const basket = require('../models/basket')

const addItemToBasket = (req, res, next) => {
    const { id } = req.body
}

const removeItemFromBasket = (req, res) => {

    console.log("you have reached the removeItemFromBasket Controller")

}

const emptyBasket = (req, res) => {

    console.log("you have reached the emptyBasket Controller")
    return basket
}

module.exports = { addItemToBasket, removeItemFromBasket, emptyBasket }