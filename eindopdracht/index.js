// index.js
import express from 'express';
import { getBezoekers, addBezoeker, updateBezoeker, deleteBezoeker } from './src/bezoekers.js';

// Maak server aan
const app = express();
const PORT = 3001; // Poortnummer ingesteld op 3001 [cite: 118]

// Middleware om JSON data uit verzoeken te kunnen lezen [cite: 118]
app.use(express.json());

// Routes definiëren
app.get('/bezoekers', getBezoekers);            // READ
app.post('/bezoekers', addBezoeker);            // CREATE
app.put('/bezoekers/:id', updateBezoeker);      // UPDATE
app.delete('/bezoekers/:id', deleteBezoeker);   // DELETE

// Start server
app.listen(PORT, () => {
    console.log(`Webserver draait op poort ${PORT} en is klaar voor de eindopdracht!`);
});