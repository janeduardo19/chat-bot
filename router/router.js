const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.get('/PesquisandoRepositorio/Takeblip', controller.pesquisarRespositorios);

module.exports = router;
