import gql from "graphql-tag"

export default gql`
  query GetAllPurchasesQuery {
    getAllPurchases {
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
