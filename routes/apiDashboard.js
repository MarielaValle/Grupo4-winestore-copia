var express = require('express');
var router = express.Router();



const apiDashboardController = require('../controllers/apiDashboardController');
/* GET home page. */

router.get('/', apiDashboardController.raiz);

router.get('/cantidadProductos', apiDashboardController.cantidadProductos);

router.get('/cantidadUsuarios', apiDashboardController.cantidadUsuarios);

router.get('/variedad', apiDashboardController.variedad);


router.get('/sumatoriaPrecios', apiDashboardController.sumatoriaPrecios);




router.get('/colorTinto', apiDashboardController.colorTinto);

router.get('/colorBlanco', apiDashboardController.colorBlanco);

router.get('/categoriaPremium', apiDashboardController.categoriaPremium);

router.get('/categoriaClasico', apiDashboardController.categoriaClasico);

router.get('/precioMaximo', apiDashboardController.precioMax);

router.get('/precioMinimo', apiDashboardController.precioMin);


module.exports = router;