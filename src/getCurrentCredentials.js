import { graphql } from "react-apollo"

import gql from "graphql-tag"

export const currentCredentialQuery = gql`
  query CurrentCredentialQuery {
    credentials {
      email
      jwt

      profile {
        firstName
        lastName
        avatar
      }

      __typename
    }
  }
`

export const getCurrentCredentials = graphql(currentCredentialQuery, {
  name: "getCurrentCredentials",
  options: {
    fetchPolicy: "cache-only"
  }
})
