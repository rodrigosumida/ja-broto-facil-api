const express = require('express');
const router = express.Router();

const controller = require('../controllers/ferramenta.controller');
const itemcontroller = new controller();

router.post('/inserir', itemcontroller.ferramenta_inserir);
router.get('/listar', itemcontroller.ferramenta_listar);
router.get('/buscar/:id', itemcontroller.ferramenta_buscar);
router.put('/atualizar/:id', itemcontroller.ferramenta_atualizar);
router.delete('/delete/:id', itemcontroller.ferramenta_remover);

module.exports = router;
