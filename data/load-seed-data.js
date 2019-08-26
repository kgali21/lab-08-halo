require('dotenv').config();
const pg = require('pg');
const Client = pg.Client;
const people = require('./character');
const games = require('./games');

const client = new Client(process.env.DATABASE_URL);

client.connect()
    .then(() => {
        return Promise.all(
            games.map(game => {
                return client.query(`
                    INSERT INTO games (name)
                    VALUES ($1)
                    RETURNING *;
                `,
                [game])
                    .then(result => result.rows[0]);
            })
        );
    })
    .then(games => {
        return Promise.all(
            people.map(people => {
                const game = games.find(game => {
                    return game.name === people.type;
                });
                const gameId = game.id;

                return client.query(`
                INSERT INTO people (name, number_games, player_character, games, img)
                VALUES ($1, $2, $3, $4, $5);
                `,
                [people.name, people.number_games, people.player_character, gameId, people.img]);
            })
        );
    })
    .then(
        () => console.log('seed data load complete'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });