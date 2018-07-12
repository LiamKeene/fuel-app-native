import React from "react"

import { Mutation } from "react-apollo"

import { Alert } from "react-native"

import Loading from "../../components/Loading"

import ProfileScreen from "./components/Profile"
import UPDATE_PROFILE_MUTATION from "./data/updateProfileMutation"

const updateCache = async (cache, {
  data: { updateProfile },
  navigation: { navigate }
}) => {
  navigate("Home")
}

export default ({ currentUser, navigation }) => (
  <Mutation
    mutation={UPDATE_PROFILE_MUTATION}
    update={(cache, { data }) => updateCache(cache, { data, navigation })}>
    {(updateProfile, {
      loading,
      error
    }) => ([
      <ProfileScreen
        key="update-profile"
        submit={updateProfile}
        navigation={navigation}
        currentUser={currentUser} />,
      <Loading
        key="loader"
        visible={loading}
        message="Updating profile ..." />,
      (error && (
        Alert.alert(
          "There were errors updating your profile",
          error.graphQLErrors.map(({ message }) => message).join(", ")
        )
      ))
    ])}
  </Mutation>
)
