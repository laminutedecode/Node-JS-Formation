const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Configurer la connexion à la base de données
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cuisine'
});

// Connecter à la base de données
db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données:', err);
  } else {
    console.log('Connecté à la base de données MySQL');
  }
});

// Middleware pour le parsing du corps des requêtes en JSON
app.use(express.json());

// Endpoint pour récupérer tous les produits
app.get('/produits', (req, res) => {
  const sql = 'SELECT * FROM produits';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'exécution de la requête SQL:', err);
      res.status(500).send('Erreur serveur');
    } else {
      res.json(result);
    }
  });
});

// Endpoint pour récupérer un produit par ID
app.get('/produits/:id', (req, res) => {
  const productId = req.params.id;
  const sql = `SELECT * FROM produits WHERE produit_id = ${productId}`;
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'exécution de la requête SQL:', err);
      res.status(500).send('Erreur serveur');
    } else {
      if (result.length === 0) {
        res.status(404).send('Produit non trouvé');
      } else {
        res.json(result[0]);
      }
    }
  });
});

// Endpoint pour créer un nouveau produit
app.post('/produits', (req, res) => {
  const { produit_name, produit_price } = req.body;
  const sql = `INSERT INTO produits (produit_name, produit_price) VALUES (?, ?)`;
  db.query(sql, [produit_name, produit_price], (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'exécution de la requête SQL:', err);
      res.status(500).send('Erreur serveur');
    } else {
      res.status(201).json({ message: 'Produit ajouté avec succès', produit_id: result.insertId });
    }
  });
});

// Endpoint pour mettre à jour un produit
app.put('/produits/:id', (req, res) => {
  const productId = req.params.id;
  const { produit_name, produit_price } = req.body;
  const sql = `UPDATE produits SET produit_name = ?, produit_price = ? WHERE produit_id = ?`;
  db.query(sql, [produit_name, produit_price, productId], (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'exécution de la requête SQL:', err);
      res.status(500).send('Erreur serveur');
    } else {
      if (result.affectedRows === 0) {
        res.status(404).send('Produit non trouvé');
      } else {
        res.json({ message: 'Produit mis à jour avec succès' });
      }
    }
  });
});

// Endpoint pour supprimer un produit
app.delete('/produits/:id', (req, res) => {
  const productId = req.params.id;
  const sql = `DELETE FROM produits WHERE produit_id = ?`;
  db.query(sql, [productId], (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'exécution de la requête SQL:', err);
      res.status(500).send('Erreur serveur');
    } else {
      if (result.affectedRows === 0) {
        res.status(404).send('Produit non trouvé');
      } else {
        res.json({ message: 'Produit supprimé avec succès' });
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}`);
});
