CREATE TABLE Livres (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50),
    stock INT,
    code VARCHAR(10),
    status VARCHAR(15)
);


INSERT INTO Livres (nom, stock, code, status)
VALUES
    ('Le Comte de Monte-Cristo', 50, 'ABC123', 'Disponible'),
    ('Les Misérables', 30, 'DEF456', 'En cours de réapprovisionnement'),
    ('LÉtranger', 20, 'GHI789', 'Indisponible');


