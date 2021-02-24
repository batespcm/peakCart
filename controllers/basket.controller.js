const { fetchBasketFromDB, saveToDB, removeItem, addItem, clearBasket } = require('../utils/basketUtils/basketUtilsExport')

const getBasket = async (req, res, next) => {


}



const addItemToBasket = async (req, res, next) => {
}



const removeItemFromBasket = async (req, res) => {


}

const emptyBasket = async (req, res) => {


}


module.exports = { addItemToBasket, removeItemFromBasket, emptyBasket, getBasket }