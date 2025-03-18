CREATE DATABASE evento;

\c evento;

CREATE TABLE ingressos (
    id SERIAL PRIMARY KEY,
    evento VARCHAR(255) NOT NULL,
    local_evento VARCHAR(255) NOT NULL,
    data_evento DATE NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    quantidade_disopnivel INTEGER NOT NULL
);

INSERT INTO ingressos (evento, local_evento, data_evento, categoria, preco, quantidade_disopnivel) VALUES
('Short n Sweet', 'Allianz Parque', '2025-10-25', 'Pista VIP', 270.00, 15),
('Short n Sweet', 'Allianz Parque', '2025-10-25', 'Arquibancada', 95.00, 35),
('Short n Sweet', 'Allianz Parque', '2025-10-25', 'Camarote', 390.00, 30);