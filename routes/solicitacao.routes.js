const express = require('express');
const router = express.Router();

const controller = require('../controllers/solicitacao.controller');
const itemcontroller = new controller();

router.post('/inserir', itemcontroller.solicitacao_inserir);
router.get('/listar', itemcontroller.solicitacao_listar);
router.get('/buscar/:id', itemcontroller.solicitacao_buscar);
router.put('/atualizar/:id', itemcontroller.solicitacao_atualizar);
router.delete('/delete/:id', itemcontroller.solicitacao_remover);

module.exports = router;
