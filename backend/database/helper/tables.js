const pool = require('../client');
const balances = require('../helper/balances');
const accounts = require('../helper/accounts');

const tables = {
    createTable: 
        async({id_user, id_account, id_balance, name = "Untitled Table"}) => {
            try {
                if(!id_user)
                    throw new Error('id_user is required');
                if(!id_account)
                    id_account = await accounts.create({id_user});
                    id_account = id_account.id_account;
                if(!id_balance){
                    id_balance = await balances.create({id_account});
                    id_balance = id_balance.id_balance;
                }

                const query = `
                    INSERT INTO tables (id_user, id_account, id_balance, name)
                    VALUES ($1, $2, $3, $4)
                    RETURNING *;
                `;
                const values = [id_user, id_account, id_balance, name];
                const { rows } = await pool.query(query, values);
                return rows[0];
            } catch (error) {
                console.error(error);
            }
        },
};

module.exports = tables;