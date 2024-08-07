const express = require('express');
const router = express.Router();
const { UserController, ListingController, BidController } = require('../../controllers/index.js')
router.post('/createbid', BidController.create);
router.post('/createlisting', ListingController.create)
router.post('/signup', UserController.create);
router.post('/login', UserController.login);
router.get('/isAuthenticated', UserController.isAuthenticated);
module.exports = router;