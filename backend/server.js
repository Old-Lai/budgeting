const express = require('express');
const cors = require('cors');
const pool = require('./database/client');
const seed = require('./database/seed');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

async function run() {
    try {
        const client = await pool.connect();
        console.log('Connected to the database');
        client.release();
        await seed();

        app.use(cors());
        app.use(express.json());

        app.use((err, req, res, next) => {
            res.status(500).send({
                status: 'error',
                name: err.name,
                message: err.message,
            });
        });

        const port = process.env.SERVER_PORT;
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error('Error connecting to the database');
        console.error(error);
    }
}

run();