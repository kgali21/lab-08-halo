require('dotenv').config();
const pg = require('pg');
const Client = pg.Client;
const people = require('./character');

const client = new Client(process.env.DATABASE_URL);

client.connect()
    .then(() => {
        return Promise.all(
            people.map(people => {

                return client.query(`
                INSERT INTO people (name, number_games, player_character, games, img)
                VALUES ($1, $2, $3, $4, $5);
                `,
                [people.name, people.number_games, people.player_character, people.games, people.img]);
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