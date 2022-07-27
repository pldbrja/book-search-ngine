const { AuthenticationError } = require('apollo-server-express');
const { Book, User } = require('../models');
const { signToken } = require('../utils/auth');

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
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user exists with this email.')
            }

            const chPw = await user.isCorrectPassword(password);

            if (!chPw) {
                throw new AuthenticationError('Password is incorrect.')
            }

            const token = signToken(user);

            return { token, user };
        },
        // creates User and generates Auth token
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user)

            return { token, user };
        },
        // saves Book to signed in User's page
        saveBook: async ( parent, { userId }, context) => {
            if (context.user) {
                const book = await User.findOneAndUpdate(
                    { _id: userId },
                    { $addToSet: { savedBooks: body } },
                    { new: true, runValidators: true }
                );
                return book;
            }
            throw new AuthenticationError('Please be logged in to perform this action.')
        },
        // removes Book from User's page
        removeBook: async (parent, { userId, bookId }) => {
            if (context.user) {
                const book = await User.findOneAndUpdate(
                    { _id: userId },
                    { $pull: { savedBooks: { _id: bookId }  
                        } 
                    },
                    { new: true }
                );
                return book;
            }
        throw new AuthenticationError('Please be logged in to perform this action.')
        },
    }
}

module.exports = resolvers;