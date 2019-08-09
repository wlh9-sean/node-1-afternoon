const products = require('../products.json')

const getProduct = (request, response) => {
    const item = products.find(alert => alert.id == request.params.id)
    if(!item){
        return request.status(500).send('Item not available')
    }
    response.status(200).send(item)
}

module.exports = getProduct