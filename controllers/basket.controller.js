const basket = require('../models/basket')

const addItemToBasket = (req, res, next) => {
    console.log(req.body, "req body in controller")
    const { id } = req.body
    console.log(id, "id in controller")
    console.log("CONTROLLER you have reached the addItemToBasket Controller")
    return { basket }
}

const removeItemFromBasket = (req, res) => {

    console.log("you have reached the removeItemFromBasket Controller")

}

const emptyBasket = (req, res) => {

    console.log("you have reached the emptyBasket Controller")
    return basket
}

module.exports = { addItemToBasket, removeItemFromBasket, emptyBasket }