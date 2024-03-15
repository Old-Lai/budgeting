const pool = require('../client');

function removeTime(rows){
    //edits the reference directly, no need to return
    rows.map(row => {
        row.statement_start = new Date(row.statement_start).toISOString().split('T')[0];
        row.statement_end = new Date(row.statement_end).toISOString().split('T')[0];
        row.statement_end === '1970-01-01' ? row.statement_end = undefined : row.statement_end;
    });
}

const balances = {
    create:
        async ({id_account, statement_start = new Date(), statement_end=undefined, beginning_bal=0, ending_bal=0}) => {
            try {
                const query = `
                    INSERT INTO balances (id_account, statement_start, statement_end, beginning_bal, ending_bal)
                    VALUES ($1, $2, $3, $4, $5)
                    RETURNING *;
                `;
                const values = [id_account, statement_start,statement_end, beginning_bal, ending_bal];
                const { rows } = await pool.query(query, values);
                //removes time from date
                removeTime(rows);
                return rows[0];
            } catch (error) {
                console.error(error);
            }
        },
    get: {
        byAccount: 
            async (id_account) => {
                try {
                    const query = `
                        SELECT * FROM balances
                        WHERE id_account = $1;
                    `;
                    const values = [id_account];
                    const { rows } = await pool.query(query, values);
                    rows.map(row => {
                        row.statement_start = new Date(row.statement_start).toISOString().split('T')[0];
                        row.statement_end = new Date(row.statement_end).toISOString().split('T')[0];
                    });
                    removeTime(rows);
                    return rows;
                } catch (error) {
                    console.error(error);
                }
            },
        _byId: 
            async (id) => {
                try {
                    const query = `
                        SELECT * FROM balances
                        WHERE id_balance = $1;
                    `;
                    const values = [id];
                    const { rows } = await pool.query(query, values);
                    removeTime(rows);
                    return rows[0];
                } catch (error) {
                    console.error(error);
                }
            }
    }
};

module.exports = balances;