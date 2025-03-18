const express = require("express");
const router = express.Router();
const ingressoController = require("../controllers/ingressoController");


router.get("/ingressos", ingressoController.getAllIngressos);
router.post("/ingressos", ingressoController.addIngresso);
router.get("/ingressos/:id", ingressoController.getIngresso);
router.put("/ingressos/:id", ingressoController.updateIngresso);


module.exports = router;