const { fetchBasketFromDB, saveToMockDB, removeItem, addItem, clearBasket } = require('../utils/basketUtils/basketUtilsExport')



const addItemToBasket = async (req, res, next) => {
    try {
        const { sessionID, item } = req.body
        const currentUserBasket = await fetchBasketFromDB(sessionID, item)
        const newBasket = await addItem(currentUserBasket, item)
        const checkoutBasket = await saveToMockDB(sessionID, newBasket)
        console.log(checkoutBasket, "checkoutBasket")
        res.send({ basket: newBasket })
    } catch (error) {
        return res.next(error)
    }
}


const getBasket = async (req, res, next) => {


}






const removeItemFromBasket = async (req, res) => {


}

const emptyBasket = async (req, res) => {


}


module.exports = { addItemToBasket, removeItemFromBasket, emptyBasket, getBasket }