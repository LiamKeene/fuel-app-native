import gql from "graphql-tag"

export default gql`
  query GetPurchasesQuery($vehicleId: Int!) {
    getPurchases(vehicleId: $vehicleId) {
      id
      odometer
      quantity
      filled
      createdAt
      timePurchased
      vehicle {
        rego
      }
    }
  }
`
