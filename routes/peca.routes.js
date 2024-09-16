const express = require('express');
const router = express.Router();

const controller = require('../controllers/peca.controller');
const itemcontroller = new controller();

router.post('/inserir', itemcontroller.peca_inserir);
router.get('/listar', itemcontroller.peca_listar);
router.get('/listar_por_quantidade', itemcontroller.peca_listar_por_quantidade);
router.get('/buscar/:id', itemcontroller.peca_buscar);
router.put('/atualizar/:id', itemcontroller.peca_atualizar);
router.put('/atualizarestoque/:id', itemcontroller.peca_atualizar_estoque);
router.delete('/delete/:id', itemcontroller.peca_remover);

module.exports = router;
