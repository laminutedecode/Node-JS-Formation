// Attendre que le contenu du DOM soit chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', () => {
    // Récupérer des éléments du DOM et les stocker dans des variables
    const bookTable = document.getElementById('bookTable');
    const tbody = bookTable.querySelector('tbody');
    const ajouterButton = document.querySelector('.footer-tab button');
    const formulaireAjout = document.getElementById('formulaireAjout');
    const closeButtonAjout = formulaireAjout.querySelector('.closeButton');

    // Fonction pour afficher le formulaire d'ajout lors du clic sur le bouton Ajouter
    ajouterButton.addEventListener('click', () => {
        formulaireAjout.style.display = 'block';
    });

    // Fonction pour fermer le formulaire d'ajout lors du clic sur le bouton de fermeture
    closeButtonAjout.addEventListener('click', () => {
        formulaireAjout.style.display = 'none';
    });
    // Fonction pour générer une ligne de tableau pour un livre
function createTableRow(book) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${book.id}</td>
        <td>${book.nom}</td>
        <td>${book.stock}</td>
        <td>${book.code}</td>
        <td>${book.status}</td>
        <td>
            <button class="modifierButton" data-id="${book.id}">Modifier</button>
            <button class="supprimerButton" data-id="${book.id}">Supprimer</button>
        </td>
    `;
    return tr;
}

// Fonction pour charger les livres depuis la base de données de manière asynchrone
async function loadBooks() {
    // Effectuer une requête asynchrone pour obtenir la liste des livres depuis l'API
    const response = await fetch('/api/livres');
    const books = await response.json();
    
    // Effacer les lignes existantes dans le tableau
    tbody.innerHTML = '';
    
    // Parcourir la liste des livres et créer une nouvelle ligne pour chaque livre
    books.forEach(book => {
        const tr = createTableRow(book);
        tbody.appendChild(tr);
    });
}

// Charger les livres au chargement de la page
loadBooks();

// Fonction pour afficher le formulaire de modification avec les infos du livre sélectionné
function showModificationForm(book) {
    // Récupérer l'élément du formulaire de modification du DOM
    const formulaireModification = document.getElementById('formulaireModification');
    formulaireModification.style.display = 'block';

    // Remplir le formulaire avec les informations du livre
    document.getElementById('nomLivreModif').value = book.nom;
    document.getElementById('stockLivreModif').value = book.stock;
    document.getElementById('codeLivreModif').value = book.code;
    document.getElementById('statusLivreModif').value = book.status;

    // Ajouter un écouteur d'événement pour soumettre le formulaire de modification
    const modificationForm = document.getElementById('modificationForm');
    modificationForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        // Récupérer les valeurs du formulaire de modification
        const modifiedBook = {
            nom: document.getElementById('nomLivreModif').value,
            stock: document.getElementById('stockLivreModif').value,
            code: document.getElementById('codeLivreModif').value,
            status: document.getElementById('statusLivreModif').value,
        };
        // Envoyer la requête de modification à l'API
        await fetch(`/api/livres/${book.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(modifiedBook),
        });
        // Recharger la liste des livres après modification
        loadBooks();
        // Cacher le formulaire de modification
        formulaireModification.style.display = 'none';
    });
}

// Ajouter un écouteur d'événement au tableau pour gérer les clics sur les boutons Modifier et Supprimer
bookTable.addEventListener('click', async (event) => {
    const target = event.target;
    const bookId = target.dataset.id;

    // Gérer le clic sur le bouton Modifier
    if (target.classList.contains('modifierButton')) {
        // Effectuer une requête pour obtenir les détails du livre sélectionné depuis l'API
        const response = await fetch(`/api/livres/${bookId}`);
        const book = await response.json();
        // Afficher le formulaire de modification avec les informations du livre
        showModificationForm(book);
    }

    // Gérer le clic sur le bouton Supprimer
    if (target.classList.contains('supprimerButton')) {
        // Afficher une boîte de confirmation avant de supprimer le livre
        if (confirm('Voulez-vous vraiment supprimer ce livre?')) {
            // Effectuer une requête de suppression à l'API
            await fetch(`/api/livres/${bookId}`, { method: 'DELETE' });
            // Recharger la liste des livres après suppression
            loadBooks();
        }
    }
});

// Ajouter un écouteur d'événement pour soumettre le formulaire d'ajout
const ajoutForm = formulaireAjout.querySelector('form');
ajoutForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    // Récupérer les valeurs du formulaire d'ajout
    const newBook = {
        nom: document.getElementById('nomLivre').value,
        stock: document.getElementById('stockLivre').value,
        code: document.getElementById('codeLivre').value,
        status: document.getElementById('statusLivre').value,
    };
    // Envoyer la requête d'ajout à l'API
    await fetch('/api/livres', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBook),
    });
    // Recharger la liste des livres après ajout
    loadBooks();
    // Cacher le formulaire d'ajout
    formulaireAjout.style.display = 'none';
});
});
