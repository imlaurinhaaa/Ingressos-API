const pool = require("../config/database");

const getIngressos = async () => {
    const result = await pool.query("SELECT * FROM ingressos");
    return result.rows;
};

const getIngressoById = async (id) => {
    const result = await pool.query("SELECT * FROM ingressos WHERE id = $1", [id]);
    return result.rows[0];
};

const addIngresso = async (evento, local_evento, data_evento, categoria, preco, quantidade_disponivel) => {
    const result = await pool.query(
        "INSERT INTO ingressos (evento, local_evento, data_evento, categoria, preco, quantidade_disponivel) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
        [evento, local_evento, data_evento, categoria, preco, quantidade_disponivel]
    );
    return result.rows[0];
};

const updateIngresso = async (id, quantidade_disponivel) => {
    const result = await pool.query(
        "UPDATE ingressos SET quantidade_disponivel = $1 WHERE id = $2 RETURNING *",
        [quantidade_disponivel, id]
    );
    return result.rows[0];

};

const deleteIngresso = async (id) => {
    const result = await pool.query("DELETE FROM ingressos WHERE id = $1 RETURNING *", [id]);
    if (result.rowCount === 0) {
        return { error: "Ingresso não encontrado." };
    }
    return { message: "Ingresso deletado com sucesso." };
};

const vendaIngresso = async (id, quantidade) => {
    const ingresso = await getIngressoById(id);
    if (!ingresso) {
        return { error: "Ingresso não encontrado." };
    }
    if (ingresso.quantidade_disponivel <= 0) {
        return { error: "Quantidade insuficiente de ingressos." };
    }
    if (quantidade = 0) {
        return { error: "Quantidade inválida." };
    }
    const result = await pool.query(
        "UPDATE ingressos SET quantidade_disponivel = $1 WHERE id = $2 RETURNING *",
        [ingresso.quantidade_disponivel - quantidade, id]
    );
    return result.rows[0];
}

module.exports = { getIngressos, getIngressoById, addIngresso, updateIngresso, deleteIngresso, vendaIngresso };