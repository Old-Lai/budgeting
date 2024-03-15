const { users } = require('../../database/helper');

const userController = {
    get: {
        byUsername: async (req, res, next) => {
            try {
                const username = req.params.username;
                const userById = await users.get.byUsername(username);
                console.log("user",userById);
                res.send(userById);
            } catch (error) {
                next(error);
            }
        },
    },
};

module.exports = userController;