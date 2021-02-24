const { fetchBasketFromDB, saveToDB, removeItem, addItem, clearBasket } = require('../utils/basketUtils/basketUtilsExport')



const addItemToBasket = async (req, res, next) => {
    console.log('in the add item controller')
    console.log(req.body)
    const { sessionID, basket } = req.body
    console.log(sessionID, '<< session ID')
    console.log(basket, "basket")
    return []
}

const getBasket = async (req, res, next) => {


}






const removeItemFromBasket = async (req, res) => {


}

const emptyBasket = async (req, res) => {


}


module.exports = { addItemToBasket, removeItemFromBasket, emptyBasket, getBasket }