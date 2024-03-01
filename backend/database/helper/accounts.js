const pool = require('../client');

const accounts = {
    create: 
        async ({id_user, lastdigits, name}) => {

            try {
                const query = `
                    INSERT INTO accounts (id_user, lastdigits, name)
                    VALUES ($1, $2, $3)
                    RETURNING *;
                `;
                const values = [id_user, lastdigits, name];
                const { rows } = await pool.query(query, values);
                return rows[0];
            } catch (error) {
                console.error(error);
            }
        },
    get: {
        byUser: 
            async (id_user) => {
                try {
                    const query = `
                        SELECT * FROM accounts
                        WHERE id_user = $1;
                    `;
                    const values = [id_user];
                    const { rows } = await pool.query(query, values);
                    return rows;
                } catch (error) {
                    console.error(error);
                }
            },
        _byId: 
        async (id) => {
            try {
                const query = `
                    SELECT * FROM accounts
                    WHERE id_account = $1;
                `;
                const values = [id];
                const { rows } = await pool.query(query, values);
                return rows[0];
            } catch (error) {
                console.error(error);
            }
        }
    },
};

module.exports = accounts;