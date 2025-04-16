const express = require('express');
const router = express.Router();
const jornadaController = require('../controllers/jornadaController');

router.post('/verificar-ou-criar', jornadaController.verificarOuCriarJornada);

module.exports = router;
