const pool = require('../client');
const { users, accounts, balances } = require('../helper');

const seedTest = async(log) => {
    log.test = {
        getUserById: await users.get._byId(log.user.id_user)
                    .then(result => JSON.stringify(result)===JSON.stringify(log.user) ? 'Success' : 'Failed'),
        getUserByEmail: await users.get.byEmail(log.user.email)
                        .then(result => JSON.stringify(result)===JSON.stringify(log.user) ? 'Success' : 'Failed'),
        getUserByUsername: await users.get.byUsername(log.user.username)
                        .then(result => JSON.stringify(result)===JSON.stringify(log.user) ? 'Success' : 'Failed'),
        getAccountByUserId: await accounts.get.byUser(log.user.id_user)
                            .then(result => JSON.stringify(result)===JSON.stringify(log.account) ? 'Success' : 'Failed'),
        getAccountById: await accounts.get._byId(log.account[1].id_account)
                        .then(result => JSON.stringify(result)===JSON.stringify(log.account[1]) ? 'Success' : 'Failed'),
        getBalanceByAccountId: await balances.get.byAccount(log.account[0].id_account)
                                .then(result => JSON.stringify(result)===JSON.stringify([log.balance]) ? 'Success' : 'Failed'),
        getBalanceById: await balances.get._byId(log.balance.id_balance)
                        .then(result => JSON.stringify(result)===JSON.stringify(log.balance) ? 'Success' : 'Failed'),
    };
}

module.exports = seedTest;