const express = require('express');
const {login,register, getCurrentUser} = require('../controllers/authController');
const { checkCurrentUser } = require('../middlewares/checkCurrentUser');

const router = express.Router()

router.route('/register').post(register)
router.route('/login').post(login);
router.route('/').get(checkCurrentUser,getCurrentUser);

module.exports = router