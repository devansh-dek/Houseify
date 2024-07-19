const { BidService } = require("../services")

const bidService = new BidService();

const create = async (req, res) => {
    try {
        const bid = {
            username: req.body.username,
            price: req.body.price,
            listingId: req.body.listingId
        }
        const response = await bidService.create(bid);
        return res.status(201).json({
            data: response,
            success: true
        })
    }
    catch (error) {
        return res.status(401).json({
            message: error.message,
            success: false
        })
    }
}


module.exports = {
    create
}