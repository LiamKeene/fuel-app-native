import gql from "graphql-tag"

export default gql`
  mutation SignupMutation($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      id
      uuid
      email
      jwt
    }
  }
`
