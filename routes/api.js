const express = require ("express");
const router = express.Router();

// importa controlador 'apiController.js' da pasta: 
// ‘../controllers/apiController’
const apiController = require("../controllers/controller");

// url do teste será: http://localhost:5000/api/teste
router.get("/teste", apiController.test);

// TO-DO: listar Clientes
router.get("/list",apiController.details);

// TO-DO: atualizar Cliente
router.put("/update/:id",apiController.update);

// TO-DO: apagar Cliente
router.delete("/delete/:id",apiController.delete);

// TO-DO: registrar Cliente
router.post("/signup", apiController.signUp);

// TO-DO: Login do Cliente
router.post("/login", apiController.logIn);

module.exports = router;
