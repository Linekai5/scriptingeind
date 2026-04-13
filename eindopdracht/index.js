// index.js
import express from 'express';
import { getBezoekers, addBezoeker, updateBezoeker, deleteBezoeker } from './src/bezoekers.js';

const app = express();
const PORT = 3001;

app.use(express.json());

// --- VOEG DIT STUKJE TOE ---
app.get('/', (req, res) => {
    res.send('De server werkt! Ga naar /bezoekers voor de data.');
});
// ---------------------------

app.get('/bezoekers', getBezoekers);
app.post('/bezoekers', addBezoeker);
app.put('/bezoekers/:id', updateBezoeker);
app.delete('/bezoekers/:id', deleteBezoeker);

app.listen(PORT, () => {
    console.log(`Server draait op http://localhost:${PORT}`);
});