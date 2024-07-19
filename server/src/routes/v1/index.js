const express = require('express');
const router = express.Router();
const { UserController } = require('../../controllers/index.js')

router.post('/signup', UserController.create);
router.post('/login', UserController.login);
router.get('/isAuthenticated', UserController.isAuthenticated);
module.exports = router;