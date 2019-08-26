require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const pg = require('pg');

const Client = pg.Client;
const client = new Client(process.env.DATABASE_URL);
client.connect();

const app = express();
const PORT = process.env.PORT;
app.use(morgan('dev'));
app.use(cors());
app.use(express.static('public'));
app.use(express.json());


app.get('/api/characters', (req, res) => {
    client.query(`
        SELECT
            p.name,
            p.number_games,
            p.player_character,
            p.games_id,
            g.name as game,
            p.img 
        FROM people p
        JOIN games g
        ON p.game_id = g.id;
    `)
        .then(result => {
            res.json(result.rows);
        })
        .catch(err => {
            res.status(500).json({
                error: err.message || err
            });
        });
});

app.get('/api/characters/:id', (req, res) => {
    const id = req.params.id;

    client.query(`
        SELECT
            p.*,
            g.name as game
        FROM people p
        JOIN games g
        ON p.game_id = g.id
        WHERE p.id = $1
    `,
    [id])
        .then(result => {
            const people = result.row[0];
            if(!people) {
                res.status(404).json({
                    error: `character id ${id} does not exist`
                });
            } else {
                res.json(result.rows[0]);
            }
        })
        .catch(err => {
            res.status(500).json({
                error: err.message || err
            });
        });
});

app.post('/api/characters', (req, res) => {
    const people = req.body;
    client.query(`
        INSERT INTO people (name, number_games, player_character, games, img)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
        `,
    [people.name, people.number_games, people.player_character, people.games, people.img])
        .then(result => {
            res.json(result.rows[0]);
        })
        .catch(err => {
            res.status(500).json({
                error: err.message || err
            });
        });
});

app.get('/api/games', (req, res) => {
    client.query(`
        SELECT
            id,
            name
        FROM games
    `)
        .then(result => {
            res.json(result.rows);
        })
        .catch(err => {
            res.status(500).json({
                error: err.message || err
            });
        });
});

app.listen(PORT, () => {
    console.log('server running on PORT', PORT);
});