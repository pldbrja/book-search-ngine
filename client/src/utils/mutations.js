import { gql } from '@apollo/client';

// use User's login values as params for mutation, detects and generates a token if needed
export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// creates a User from params, generates a token
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
      }
    }
  }
`;

// saves a book to the logged in user's savedBooks array and page
export const SAVE_BOOK = gql`
  mutation saveBook($savedBook: BookInformation!) {
    saveBook(savedBook: $savedBook) {
    _id
    username
    }
  }
`;

// removes book from user's page
export const REMOVE_BOOK = gql`
  mutation removeBook($userId: ID!, $bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
    }
  }
`;