import gql from "graphql-tag"

export default gql`
  mutation UpdateVehicleMutation(
    $id: ID!,
    $rego: String!,
    $make: String!,
    $model: String!
  ) {
    updateVehicle(id: $id, input: {
      rego: $rego,
      make: $make,
      model: $model,
    }) {
      id
      rego
      make
      model
    }
  }
`
