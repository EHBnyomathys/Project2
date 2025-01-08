const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

dotenv.config();
const app = express();
app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);

app.get('/', (req, res) => {
    res.send(`
        <h1>Welkom bij Project2 - Node.js!</h1>
        <h2>Beschikbare Endpoints:</h2>
        <h3>Gebruikers Endpoints (/api/users)</h3>
        <ul>
            <li><strong>GET</strong> - <a href="/api/users">/api/users</a> → Haal alle gebruikers op</li>
            <li><strong>GET</strong> - <a href="/api/users/1">/api/users/:id</a> → Haal één gebruiker op via ID</li>
            <li><strong>POST</strong> - /api/users → Maak een nieuwe gebruiker aan</li>
            <li><strong>PUT</strong> - /api/users/:id → Update een gebruiker op basis van ID</li>
            <li><strong>DELETE</strong> - /api/users/:id → Verwijder een gebruiker op basis van ID</li>
            <li><strong>GET</strong> - <a href="/api/users/search?name=Alice">/api/users/search?name=Alice</a> → Zoek gebruikers op naam</li>
            <li><strong>GET</strong> - <a href="/api/users/paginate?limit=2&offset=0">/api/users/paginate?limit=2&offset=0</a> → Haal gebruikers op met paginering</li>
        </ul>
        
        <h3>Categorieën Endpoints (/api/categories)</h3>
        <ul>
            <li><strong>GET</strong> - <a href="/api/categories">/api/categories</a> → Haal alle categorieën op</li>
            <li><strong>GET</strong> - <a href="/api/categories/1">/api/categories/:id</a> → Haal één categorie op via ID</li>
            <li><strong>POST</strong> - /api/categories → Maak een nieuwe categorie aan</li>
            <li><strong>PUT</strong> - /api/categories/:id → Update een categorie op basis van ID</li>
            <li><strong>DELETE</strong> - /api/categories/:id → Verwijder een categorie op basis van ID</li>
        </ul>

        <h3>Extra Functionaliteiten</h3>
        <ul>
            <li><strong>Zoeken op Meerdere Velden:</strong> Vind eenvoudig gebruikers door te zoeken op zowel "naam" als "e-mail" met behulp van de zoekparameter "?search=term". Dit maakt gerichte zoekopdrachten mogelijk voor efficiënter resultaatbeheer.</li>
            <li><strong>Resultaten Sorteren:</strong> Sorteer gebruikers op specifieke velden zoals "naam" of "datum van aanmaak" met parameters zoals "?sortBy=name&sortOrder=asc". Hierdoor krijg je snel inzicht in de gegevens in de gewenste volgorde.</li>
            <li><strong>Geavanceerde Validatie:</strong> Gegevens worden zorgvuldig gecontroleerd, inclusief datumvalidatie (bijv. "end_date" mag niet vóór "start_date" liggen) en telefoonnummerformaten (bijv. "+32 444 44 44 44").</li>
        </ul>
        <h3>Algemene Informatie</h3>
        <ul>
            <li><strong>Serverstatus:</strong> Draaiend op poort ${process.env.PORT || 3000}</li>
            <li><strong>Database:</strong> Verbonden met MySQL</li>
        </ul>

        <p>Ik heb <a href="https://www.postman.com/">Postman</a> gebruikt om de POST, PUT en DELETE endpoints te testen.</p>
    `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server draait op poort ${PORT}`);
});
