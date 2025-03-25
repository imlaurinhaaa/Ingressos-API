const express = require("express");
const router = express.Router();
const ingressoController = require("../controllers/ingressoController");


router.get("/ingressos", ingressoController.getAllIngressos);
router.post("/ingressos", ingressoController.addIngresso);
router.post("/ingressos/venda", ingressoController.vendaIngresso);
router.get("/ingressos/:id", ingressoController.getIngresso);
router.put("/ingressos/:id", ingressoController.updateIngresso);
router.delete("/ingressos/:id", ingressoController.deleteIngresso);


module.exports = router;