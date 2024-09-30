1) Ouvrir le terminal et effectuer la commande npm init

2) Créer la BDD et ajouter des valeurs

3) Installer via le terminal my-sql2 express et body parser via la commande : 

npm i mysql2 express body-parser

Express : Express.js, communément appelé Express, est un framework minimaliste et flexible pour construire des applications web côté serveur en utilisant Node.js. Il simplifie la gestion des routes, des requêtes et des réponses HTTP, permettant ainsi aux développeurs de créer rapidement des API et des applications web robustes. Express offre également des middleware, qui sont des fonctions intermédiaires qui peuvent être utilisées pour effectuer des opérations comme l'authentification, la validation des données, etc. Cela aide à organiser et à gérer le flux de traitement de la requête.

mysql2 : mysql2 est un module Node.js qui permet d'établir une connexion à une base de données MySQL. MySQL est un système de gestion de base de données relationnelles très répandu. Le module mysql2 facilite l'exécution de requêtes SQL sur la base de données, la récupération de données et la gestion des résultats. Il offre également des fonctionnalités avancées telles que la gestion des transactions, les requêtes préparées et la gestion des connexions.

body-parser : body-parser est un middleware pour Express.js qui facilite l'analyse des données envoyées dans le corps des requêtes HTTP. Lorsqu'un client (par exemple, un navigateur web) envoie des données POST ou PUT au serveur, ces données sont généralement incluses dans le corps de la requête. Le module body-parser permet de convertir ces données au format JSON, texte ou autre format utilisable en JavaScript. Cela simplifie le traitement des données envoyées par les utilisateurs, comme les formulaires, les données de formulaire JSON, etc.

4) Créer le fichier db.js

5) installer la dependance via le terminal nodemon: npm install -g nodemon@latest

Nodemon est un outil qui simplifie le processus de développement d'applications Node.js en surveillant les fichiers du projet pour les modifications. Lorsqu'il détecte une modification dans les fichiers sources de votre application, nodemon redémarre automatiquement le serveur. Cela évite la nécessité de redémarrer manuellement le serveur chaque fois que vous apportez des modifications au code, ce qui peut considérablement accélérer le processus de développement.

6) Créer fichierindex.js, employes.controlers et  emp.service

7) Installer npm i express-async-errors

8) création procedure

DELIMITER $$

CREATE PROCEDURE `employes_db`.`usp_employee_add_or_edit` (
IN _id INT,
IN _name VARCHAR(45),
IN _employee_code VARCHAR(45),
IN _salary INT
)
BEGIN
    IF _id = 0 THEN
        INSERT INTO employees(name, employee_code, salary)
        VALUES (_name, _employee_code, _salary);
    ELSE
        UPDATE employees
        SET name = _name,
            employee_code = _employee_code,
            salary = _salary
        WHERE id = _id;
    END IF;
    
    SELECT ROW_COUNT() AS 'affectedRows';
END$$

DELIMITER ;
