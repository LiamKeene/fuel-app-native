import gql from "graphql-tag"

export default gql`
  mutation UpdateProfileMutation(
    $firstName: String!,
    $lastName:  String!,
    $avatar:    String!
  ) {
    updateProfile(input: {
      firstName:  $firstName,
      lastName:   $lastName,
      avatar:     $avatar,
    }) {
      id
      firstName
      lastName
      avatar
    }
  }
`
