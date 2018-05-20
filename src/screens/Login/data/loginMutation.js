import gql from "graphql-tag"

export default gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      uuid
      email
      jwt
    }
  }
`
