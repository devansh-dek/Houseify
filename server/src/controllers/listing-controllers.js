const { ListingService } = require('../services/index');
const listingservice = new ListingService();

const create = async (req, res) => {
    try {
        const listing = {
            username: req.body.username,
            price: req.body.price,
            location: req.body.location,
            flooring: req.body.flooring,
            furnishing: req.body.furnishing,
            size: req.body.size
        }
        console.log("the listing is ", listing);

        const response = await listingservice.create(listing)
        return res.status(201).json({
            success: true,
            data: response
        })
    }
    catch (error) {
        // throw error;
        console.log("Error is ", error);
        return res.status(401).json({
            sucess: false,
            err: error.message
        })
    }
}
module.exports = {
    create
}