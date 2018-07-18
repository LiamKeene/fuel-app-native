import gql from "graphql-tag"

export default gql`
  query GetVehicleQuery(
    $vehicleId: ID!,
  ) {
    getVehicle(id: $vehicleId) {
      id
      rego
      make
      model
    }
  }
`
