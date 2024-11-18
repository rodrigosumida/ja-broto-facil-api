const express = require('express');
const router = express.Router();

const controller = require('../controllers/planta.controller');
const itemcontroller = new controller();

router.post('/inserir', itemcontroller.planta_inserir);
router.get('/listar', itemcontroller.planta_listar);

module.exports = router;
