const { Book, User } = require('../models');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('books');
            }
        },
    },
    Mutation: {
        // uses Auth token generated on addUser to login to engine
        login: async () => {

        },
        // creates User and generates Auth token
        addUser: async (parent, { username, email }) => {

        },
        // saves Book to signed in User's page
        saveBook: async () => {

        },
        // removes Book from User's page
        removeBook: async () => {

        },
    }
}

module.exports = resolvers;