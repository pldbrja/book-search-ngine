const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        bookCount: Number
        savedBooks: [Book]
    }

    type Book {
        bookId: ID
        authors: []
        description: String
        title: String
        image: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
    
    }
`