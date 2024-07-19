const CrudRepository = require("./crud-repository");
const { Listing } = require('../models')
class ListingRepository extends CrudRepository {
    constructor() {
        super(Listing)
    }
}

module.exports = ListingRepository;