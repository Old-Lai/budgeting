const pool = require('../client');

const users = {
    createUser: 
        async (firstname, lastname, email, username, password) => {
            try {
                const query = `
                    INSERT INTO users (firstname, lastname, email, username, password)
                    VALUES ($1, $2, $3, $4, $5)
                    RETURNING *;
                `;
                const values = [firstname, lastname, email, username, password];
                const { rows } = await pool.query(query, values);
                const timezone = await pool.query('SELECT CURRENT_TIMESTAMP;');
                console.log(timezone.rows[0]);
                console.log(new Date());
                return rows[0];
            } catch (error) {
                console.error(error);
            }
        },
};

module.exports = users;
