const pool = require('../client');

const users = {
    create: 
        async ({firstname, lastname, email, username, password}) => {
            try {
                const query = `
                    INSERT INTO users (firstname, lastname, email, username, password)
                    VALUES ($1, $2, $3, $4, $5)
                    RETURNING *;
                `;
                const values = [firstname, lastname, email, username, password];
                const { rows } = await pool.query(query, values);
                const timezone = await pool.query('SELECT CURRENT_TIMESTAMP;');
                return rows[0];
            } catch (error) {
                console.error(error);
            }
        },
    get:{
        byEmail: 
            async (email) => {
                try {
                    const query = `
                        SELECT * FROM users
                        WHERE email = $1;
                    `;
                    const values = [email];
                    const { rows } = await pool.query(query, values);
                    return rows[0];
                } catch (error) {
                    console.error(error);
                }
            },
        byUsername: 
            async (username) => {
                try {
                    const query = `
                        SELECT * FROM users
                        WHERE username = $1;
                    `;
                    const values = [username];
                    const { rows } = await pool.query(query, values);
                    return rows[0];
                } catch (error) {
                    console.error(error);
                }
            },
        _byId:
            async (id) => {
                try {
                    const query = `
                        SELECT * FROM users
                        WHERE id_user = $1;
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

module.exports = users;
