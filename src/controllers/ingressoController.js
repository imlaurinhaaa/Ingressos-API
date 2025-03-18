const ingressoModel = require("../models/ingressoModel");

const getAllIngressos = async (req, res) => {
    try {
        const ingressos = await ingressoModel.getIngressos();
        res.json(ingressos);
    } catch (error) {
        res.status(404).json({ message: "Erro ao buscar ingressos." });
    }
};

const getIngresso = async (req, res) => {
    try {
        const ingresso = await ingressoModel.getIngressoById(req.params.id);
        if (!ingresso) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }
        res.json(ingresso);
    } catch (error) {
        res.status(404).json({ message: "Erro ao encontrar ingresso" })
    }
}

module.exports = { getAllIngressos, getIngresso };