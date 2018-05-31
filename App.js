import React from "react"

import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { ApolloLink } from "apollo-link"
import { setContext } from "apollo-link-context"
import { createHttpLink } from "apollo-link-http"
import { withClientState } from "apollo-link-state"
import { ApolloProvider, Query } from "react-apollo"

import { Provider as PaperProvider } from "react-native-paper"

import { createRootNavigator } from "./src/components/Navigation"
import { currentCredentialQuery } from "./src/storage"

// const httpLink  = createHttpLink({ uri: "http://192.168.1.84:4000/graphql" })
// const httpLink  = createHttpLink({ uri: "http://192.168.43.249:4000/graphql" })
const httpLink  = createHttpLink({ uri: "http://192.168.1.2:4000/graphql" })

const authLink  = setContext(async ({ headers }, { cache }) => {
  const { credentials: { jwt } } = await cache.readQuery({ query: currentCredentialQuery })

  return {
    headers: {
      ...headers,
      authorization: jwt ? `Bearer ${jwt}` : ``
    },
  }
})

const stateLink = withClientState({
  cache,
  defaults: {},
  resolvers: {},
})

const link = ApolloLink.from([stateLink, authLink, httpLink])

const cache = new InMemoryCache()

const client = new ApolloClient({
  link,
  cache
})

Object.setPrototypeOf = Object.setPrototypeOf || function (obj, proto) {
  obj.__proto__ = proto
  return obj
}

export default class App extends React.Component {
  render() {
    // Initial credentials - read from storage?
    const credentials = {
      email: "",
      jwt: "",
      __typename: "Credential"
    }
    client.cache.writeQuery({
      query: currentCredentialQuery,
      data: { credentials }
    })

    return (
      <ApolloProvider
        client={client}>
        <Query
          query={currentCredentialQuery}>
          {({
            data,
          }) => {
            const signedIn = data.credentials && !!data.credentials.jwt
            const Navigation = createRootNavigator({ signedIn })
            return (
              <PaperProvider>
                <Navigation />
              </PaperProvider>
            )
          }}
        </Query>
      </ApolloProvider>
    )
  }
}
