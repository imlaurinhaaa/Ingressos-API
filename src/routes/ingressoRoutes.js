const express = require("express");
const router = express.Router();
const ingressoController = require("../controllers/ingressoController");

router.get("/ingressos", ingressoController.getAllIngressos);
router.get("/ingressos/:id", ingressoController.getIngresso);

module.exports = router;