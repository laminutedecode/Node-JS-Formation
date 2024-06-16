DELIMITER //

//*Cette instruction définit un délimiteur temporaire pour la procédure. Cela est nécessaire lorsque vous avez des blocs de code à l'intérieur de votre procédure stockée. Dans ce cas, le délimiteur est changé temporairement en // plutôt que le délimiteur par défaut ;.

CREATE PROCEDURE usp_book_add_or_edit(
    IN p_id INT,
    IN p_nom VARCHAR(255),
    IN p_stock INT,
    IN p_code VARCHAR(255),
    IN p_status VARCHAR(255)
)

//*Cela déclare une nouvelle procédure stockée nommée usp_book_add_or_edit. Elle prend cinq paramètres en entrée : p_id, p_nom, p_stock, p_code, et p_status, de types INT, VARCHAR(255), INT, VARCHAR(255), et VARCHAR(255) respectivement.

BEGIN

//*C'est le début du bloc de code de la procédure. Toutes les instructions de la procédure sont placées entre le BEGIN et le END.

    DECLARE v_count INT;

    //*Cette déclaration crée une variable locale v_count de type INT pour stocker le nombre de livres correspondant à l'ID fourni.

    -- Vérifier si le livre existe déjà
    SELECT COUNT(*) INTO v_count FROM livres WHERE id = p_id;

      //*Cette instruction SQL compte le nombre de lignes dans la table livres où l'ID correspond à la valeur fournie en entrée (p_id). Le résultat est stocké dans la variable v_count.

    IF v_count > 0 THEN

 //* Cela commence une structure conditionnelle. Si le nombre de livres avec l'ID spécifié est supérieur à zéro, cela signifie que le livre existe déjà dans la base de données. Dans ce cas, la procédure exécute la section UPDATE, sinon elle exécute la section INSERT.

        -- Le livre existe, le mettre à jour
        UPDATE livres
        SET nom = p_nom, stock = p_stock, code = p_code, status = p_status
        WHERE id = p_id;

         //*Si le livre existe déjà, cette instruction met à jour les colonnes nom, stock, code, et status de la table livres avec les valeurs fournies en entrée, où l'ID correspond à p_id.

    ELSE
        -- Le livre n'existe pas, l'ajouter
        INSERT INTO livres (nom, stock, code, status)
        VALUES (p_nom, p_stock, p_code, p_status);

  //*Si le livre n'existe pas (c'est-à-dire que le nombre de livres avec l'ID spécifié est égal à zéro), cette instruction ajoute une nouvelle ligne à la table livres avec les valeurs fournies en entrée pour les colonnes nom, stock, code, et status.

    END IF;
END //

  //*END: Marque la fin du bloc de code de la procédure.

DELIMITER ;








