const basket = require('../model/basket')

const addItemToBasket = (req, res) => {
    console.log("CONTROLLER you have reached the addItemToBasket Controller")

}

const removeItemFromBasket = (req, res) => {

    console.log("you have reached the removeItemFromBasket Controller")

}

const emptyBasket = (req, res) => {

    console.log("you have reached the emptyBasket Controller")
}

module.exports = { addItemToBasket, removeItemFromBasket, emptyBasket }