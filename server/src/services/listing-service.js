const { ListingRepository } = require("../repository");


class ListingService {
    constructor() {
        this.ListingRepository = new ListingRepository();
    }
    async create(data) {
        try {
            console.log("the data is ", data);
            const result = await this.ListingRepository.create(data);
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async findById(id) {
        try {
            const response = await this.ListingRepository.getById(id);
            return response;
        }
        catch (error) {
            throw error;
        }
    }


}
module.exports = ListingService