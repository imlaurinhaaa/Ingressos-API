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
};

const addIngresso = async (req, res) => {
    try {
        const { evento, local_evento, data_evento, categoria, preco, quantidade_disponivel } = req.body;
        const newIngresso = await ingressoModel.addIngresso(evento, local_evento, data_evento, categoria, preco, quantidade_disponivel);
        res.status(201).json(newIngresso);
    } catch (error) {
        if (error.code === "23505") {
            return res.status(400).json({ message: "Ingresso já cadastrado." });
        }
        res.status(404).json({ message: "Erro ao criar Ingresso." });
    }
};

const updateIngresso = async (req, res) => {
    try {
        const { quantidade_disponivel } = req.body;
        const updatedIngresso = await ingressoModel.updateIngresso(req.params.id, quantidade_disponivel);
        if (!updatedIngresso) {
            return res.status(404).json({ message: "Ingresso não encontrado." });
        }
        res.json(updatedIngresso);
    } catch (error) {
        res.status(404).json({ message: "Erro ao atualizar Ingresso." });
    }
};


module.exports = { getAllIngressos, getIngresso, addIngresso, updateIngresso };