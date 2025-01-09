# CRUD API - Nodje.js & Express

Dit project is een API gebouwd met Node.js, Express en MySQL. Het biedt CRUD-functionaliteiten voor gebruikersbeheer, zoekfunctionaliteit, sortering en geavanceerde validatie.

## Functionaliteiten

De API voldoet aan alle minimumvereisten en bevat de volgende extra functionaliteiten:
- Zoeken op meerdere velden: Zoek gebruikers op naam of e-mail met de parameter ?search=term.
- Resultaten sorteren: Sorteer gebruikers op velden zoals name of createdAt in oplopende (asc) of aflopende (desc) volgorde.
- Geavanceerde validatie:
  - end_date mag niet vóór start_date liggen.
  - Telefoonnummer moet voldoen aan het formaat +32 444 44 44 44.

## Vereisten

Om dit project lokaal te draaien en testen, heb je volgende tools nodig:
- Node.js (versie 20 of hoger)
- MySQL (met MySQL Workbench)
- Postman (om de POST, PUT en DELETE endpoints te testen)

## Installatie
### 1. Repository clonen
- Clone de repository en navigeer naar de projectmap:
git clone https://github.com/EHBnyomathys/Project2.git
cd Project2
### 2. Afhankelijkheden installeren
- Installeer de benodigde Node.js-pakketten:
npm install
### 3. .env instellen
- Maak een .env bestand aan in de hoofdmap en voeg de volgende configuratie toe:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root
DB_NAME=project2
PORT=3000
### 4. Database aanmaken
- Maak een database aan in MySQL Workbench
CREATE DATABASE project2;
- Zorg ervoor dat je gebruiker voldoende rechten heeft:
GRANT ALL PRIVILEGES ON project2.* TO 'project2_user'@'localhost';
FLUSH PRIVILEGES;
### 5. Database synchroniseren
- Synchroniseer de database en maak de benodigde tabellen aan:
node -e "require('./config/database').sync({ alter: true })"
### 6. Server starten
- start de server:
npm run start
- bezichtig de API door naar de root pagina te gaan in je browser of via tools zoals Postman:
http://localhost:3000

## Belangrijke endpoints
### Gebruiksbeheer
Method	Endpoint	Beschrijving
GET	/api/users	Haal alle gebruikers op
GET	/api/users/:id	Haal een specifieke gebruiker op
POST	/api/users	Voeg een nieuwe gebruiker toe
PUT	/api/users/:id	Update een bestaande gebruiker
DELETE	/api/users/:id	Verwijder een bestaande gebruiker
### Extra functionaliteiten
Functionaliteit	Queryparameters	Voorbeeld
Zoeken	?search=<term>	/api/users?search=Alice
Sorteren	`?sortBy=<veld>&sortOrder=asc	desc`
Paginatie	?limit=<aantal>&offset=<aantal>	/api/users?limit=10&offset=0

## Bronvermelding
- Backend Web TI2 cursus: https://canvas.ehb.be/courses/40595
Enkele videos die me hebben geholpen tijdens het project:
- MySQL en MySQL Workbench installeren: https://www.youtube.com/watch?v=u96rVINbAUI
- Sequelize: https://www.youtube.com/watch?v=Crk_5Xy8GMA

## Auteur
Nyo Mathys
Dit project is gemaakt voor de opdracht Project 2 - Node.js voor het vak Backend Web TI2.