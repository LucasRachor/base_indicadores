const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

console.log('usuarioController.listar:', typeof usuarioController.listar)


const autenticar = require('../middleware/authMiddleware');

console.log('typeof autenticar:', typeof autenticar);

const verificarAdmin = require('../middleware/verificarAdmin');

router.get('/', autenticar, usuarioController.listar);
router.post('/', autenticar, verificarAdmin, usuarioController.criar);
router.put('/:id', autenticar, verificarAdmin, usuarioController.editar);
router.patch('/:id/reset-senha', autenticar, verificarAdmin, usuarioController.resetarSenha);

module.exports = router;