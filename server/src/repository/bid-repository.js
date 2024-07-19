const CrudRepository = require("./crud-repository");
const { Bid } = require('../models/index.js')
class BidRepository extends CrudRepository {
    constructor() {
        super(Bid);
    }



}

module.exports = BidRepository;