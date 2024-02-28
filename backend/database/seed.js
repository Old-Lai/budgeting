const progressBar = require('../helper/progressBar')
const bar = new progressBar('Seeding database');
const pool = require('./client');
const { users } = require('./helper');

async function dropExistingTables() {
    try {
        bar.updateMessage('Dropping existing tables');
        await pool.query(`
            DROP TABLE IF EXISTS transactions;
            DROP TABLE IF EXISTS categories;
            DROP TABLE IF EXISTS tables;
            DROP TABLE IF EXISTS balances;
            DROP TABLE IF EXISTS accounts;
            DROP TABLE IF EXISTS users;
        `);
        bar.increment(25);
    } catch (error) {
        bar.stop('Error dropping tables', 'Failed!');
        console.error(error);
    }
}

async function createTables() {
    try {
        bar.updateMessage('Creating tables'); 
        await pool.query(`
            CREATE TABLE users (
                id_user UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                firstname VARCHAR(100) NOT NULL,
                lastname VARCHAR(100) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                username VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
                enabled BOOLEAN DEFAULT TRUE
            );

            CREATE TABLE accounts (
                id_account UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                id_user UUID REFERENCES users(id_user),
                lastdigits VARCHAR(4),
                name VARCHAR(100) NOT NULL,
                enabled BOOLEAN DEFAULT TRUE
            );

            CREATE TABLE balances (
                id_balance UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                id_account UUID REFERENCES accounts(id_account),
                statement_start DATE NOT NULL,
                statement_end DATE,
                beginning_bal DECIMAL(20, 2) NOT NULL,
                ending_bal DECIMAL(20, 2) NOT NULL,
                enabled BOOLEAN DEFAULT TRUE
            );

            CREATE TABLE tables (
                id_table UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                id_user UUID REFERENCES users(id_user),
                id_account UUID REFERENCES accounts(id_account),
                id_balance UUID REFERENCES balances(id_balance),
                name VARCHAR(255) DEFAULT 'Untitled Table' NOT NULL,
                enabled BOOLEAN DEFAULT TRUE
            );

            CREATE TABLE categories (
                id_category UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                id_user UUID REFERENCES users(id_user),
                name VARCHAR(255) NOT NULL,
                enabled BOOLEAN DEFAULT TRUE
            );

            CREATE TABLE transactions (
                id_transaction UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                id_table UUID REFERENCES tables(id_table),
                id_category UUID REFERENCES categories(id_category),
                date DATE NOT NULL,
                amount DECIMAL(20, 2) NOT NULL,
                name VARCHAR(255) NOT NULL,
                description VARCHAR(255),
                enabled BOOLEAN DEFAULT TRUE
            );

        `);
        bar.increment(25);
    } catch (error) {
        bar.stop('Error creating tables', 'Failed!');
        console.error(error)
    }
}

async function insertData() {
    try {
        bar.updateMessage('Inserting data');
        const user = await users.createUser('John', 'Doe', 'admin@admin.com', 'admin', 'admin');
        console.log(user);
        bar.increment(25);
    } catch (error) {
        bar.stop('Error inserting data', 'Failed!');
        console.error(error);
        
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
        console.error(error);
    }
}

module.exports = seed;