const express = require ('express');
const router = express.Router();
const colaboradorCtrl = require ('../controllers/colaborador.controller');

router.get('/', colaboradorCtrl.getColaborador);
router.post('/', colaboradorCtrl.createColaborador);
router.get('/:id',colaboradorCtrl.getUniqueColaborador);
router.put('/:id',colaboradorCtrl.editColaborador);
router.delete('/:id',colaboradorCtrl.deleteColaborador);

module.exports = router;
