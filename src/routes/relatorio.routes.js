const express = require('express');
const router = express.Router();

const controller = require('../controllers/relatorio.controller');
const itemcontroller = new controller();

router.post('/inserir', itemcontroller.relatorio_inserir);
router.get('/listar', itemcontroller.relatorio_listar);
router.get('/buscar-ultimo', itemcontroller.relatorio_buscar_ultimo);

module.exports = router;
