import gql from "graphql-tag"

export default gql`
  query GetVehiclesQuery {
    getVehicles {
      id
      make
      model
      rego
    }
  }
`
