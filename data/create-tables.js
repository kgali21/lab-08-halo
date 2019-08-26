require('dotenv').config();

const pg = require('pg');
const Client = pg.Client;
const client = new Client(process.env.DATABASE_URL);

client.connect()
    .then(() => {
        return client.query(`
            CREATE TABLE people (
                    id SERIAL PRIMARY KEY NOT NULL,
                    name VARCHAR(256) NOT NULL,
                    number_games INTEGER NOT NULL,
                    player_character BOOLEAN NOT NULL,
                    games VARCHAR(256) NOT NULL,
                    img VARCHAR(256) NOT NULL
            );

        `);

    })
    .then(
        () => console.log('create table complete'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });