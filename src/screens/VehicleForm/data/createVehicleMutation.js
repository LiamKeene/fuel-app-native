import gql from "graphql-tag"

export default gql`
  mutation CreateVehicleMutation(
    $rego: String!,
    $make: String!,
    $model: String!
  ) {
    createVehicle(input: {
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
