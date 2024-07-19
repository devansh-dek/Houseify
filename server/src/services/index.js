const BidService = require('./bid-service');
const ListingService = require('./listing-service');

module.exports = {
    UserService: require('./user-service'),
    ListingService,
    BidService
}