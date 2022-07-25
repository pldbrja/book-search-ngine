const { Book, User } = require('../models');

const resolvers = {
    Query: {
        book: async () => {
            return Book.find({});
        },
        me: async () => {
            return User.find();
        },
    },
    Mutation: {
        // uses Auth token generated on addUser to login to engine
        login: async () => {

        },
        // creates User and generates Auth token
        addUser: async () => {

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