const { BidRepository } = require("../repository");


class BidService {
    constructor() {
        this.BidRepository = new BidRepository();
    }
    async create(data) {
        try {
            const response = await this.BidRepository.create(data);
            return response;
        }
        catch (error) {
            throw error;
        }
    }
}
module.exports = BidService