const progressBar = require('../helper/progressBar')
const bar = new progressBar('Seeding database');
const pool = require('./client');

async function dropExistingTables() {
    try {
        bar.updateMessage('Dropping existing tables');
        await pool.query(`
            DROP TABLE IF EXISTS users;
            DROP TABLE IF EXISTS accounts;
            DROP TABLE IF EXISTS transactions;
        `);
        for (let i = 0; i < 25; i+=5) {
            bar.increment(5);
            await new Promise((resolve) => setTimeout(resolve, 50));
        }
    } catch (error) {
        bar.stop('Error dropping tables', 'Failed!');
        console.error(error)
    }
}

async function createTables() {
    try {
        bar.updateMessage('Creating tables');
        for (let i = 0; i < 25; i+=5) {
            bar.increment(5);
            await new Promise((resolve) => setTimeout(resolve, 50));
        }
    } catch (error) {
        bar.stop('Error creating tables', 'Failed!');
        console.error(error)
    }
}

async function insertData() {
    try {
        bar.updateMessage('Inserting data');
        for (let i = 0; i < 25; i+=5) {
            bar.increment(5);
            await new Promise((resolve) => setTimeout(resolve, 50));
        }
    } catch (error) {
        bar.stop('Error inserting data', 'Failed!');
        console.error(error)
        
    }
}

async function seed(){
    try {
        bar.start();
        await dropExistingTables();
        await createTables();
        await insertData();
        bar.stop();
    } catch (error) {
        bar.stop('Error seeding the database', 'Failed!');
        console.error(error)
    }
}

module.exports = seed;