var express = require("express");
var router = express.Router();
var usersController = require("../controllers/usersController");
var middles = require("../middleware/middles");

const { check, validationResult, body } = require('express-validator');


router.get("/login", usersController.loginForm);
router.post("/login", usersController.login);

router.get("/register", usersController.registroForm);
router.post("/register", middles.CargarAvatar, [
    check('email').isEmail().withMessage('Debe poner un email válido'),
    check('contrasenia').isLength({ min: 8 }).withMessage('Debe poner una contraseña de 8 caracteres')
],
     usersController.registrarse);

//router.get("/:id/edit", usersController.FormEdicion);
//router.put("/:id", usersController.Editando);

router.get("/profile", usersController.profile);
router.get("/logout", usersController.logout )



module.exports = router;
