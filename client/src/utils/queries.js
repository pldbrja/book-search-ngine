import { gql } from '@apollo/client';

// returns the user's SavedBooks page
export const GET_ME = gql`
  query me {
    me {
      _id
      username
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;