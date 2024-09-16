const express = require('express');
const router = express.Router();

const controller = require('../controllers/conjunto.controller');
const itemcontroller = new controller();

router.post('/inserir', itemcontroller.conjunto_inserir);
router.get('/listar', itemcontroller.conjunto_listar);
router.get('/buscar/:id', itemcontroller.conjunto_buscar);
router.put('/atualizar/:id', itemcontroller.conjunto_atualizar);
router.delete('/delete/:id', itemcontroller.conjunto_remover);

router.put('/adicionar_peca/:id', itemcontroller.conjunto_adicionar_peca);
router.put('/remover_peca/:id', itemcontroller.conjunto_remover_peca);

module.exports = router;
