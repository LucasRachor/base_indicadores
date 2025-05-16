const express = require('express');
const router = express.Router();
const { register, login, userInfo } = require('../controllers/authController');
const extractEmailFromJWT = require('../middleware/extractInfo');

router.post('/register', register);
router.post('/login', login);
router.get('/me', extractEmailFromJWT, userInfo)

module.exports = router;

