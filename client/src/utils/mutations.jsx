import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String
    $lastName: String
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      username: $username
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost(
    $title: String!
    $body: String!
    $city: String!
    $country: String!
  ) {
    addPost(title: $title, body: $body, city: $city, country: $country) {
      _id
      title
      body
      city
      country
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addCommentaddComment($postId: ID!, $commentText: String!) {
    addComment(postId: $postId, commentText: $commentText) {
      _id
      userId
      username
      title
      body
      country
      city
      comments {
        _id
        username
        userId
        createdAt
        commentText
      }
      reactions {
        _id
        username
        userId
        reactionType
        createdAt
      }
    }
  }
`;

export const ADD_REACTION = gql`
  mutation addReaction($postId: ID!, $reactionType: String) {
    addReaction(postId: $postId, reactionType: $reactionType) {
      _id
      userId
      username
      title
      body
      country
      city
      comments {
        _id
        userId
        username
        commentText
        createdAt
      }
      reactions {
        _id
        userId
        username
        reactionType
        createdAt
      }
    }
  }
`;
