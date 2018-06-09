import React from "react"

import {
  compose,
  pure,
  withReducer,
} from "recompose"

import { Mutation } from "react-apollo"

import {
  Alert,
} from "react-native"

import Loading from "../../components/Loading"

import { inputReducer } from "../../utils/formReducers"

import ProfileScreen from "./components/Profile"
import UPDATE_PROFILE_MUTATION from "./data/updateProfileMutation"

const INITIAL_STATE = {
  firstName:  "",
  lastName:   "",
  avatar:     ""
}
const formReducer = inputReducer(INITIAL_STATE, "UPDATE_INPUT")
const updateForm  = withReducer("form", "dispatch", formReducer, INITIAL_STATE)

const updateCache = async (cache, {
  data: { updateProfile },
  navigation: { navigate }
}) => {
  navigate("Home")
}

const EnhancedProfile = compose(
  updateForm,
  pure
)(({
  dispatch,
  form,
  updateProfile,
  currentUser,
}) => (
  <ProfileScreen
    currentUser={currentUser}
    form={form}
    dispatch={dispatch}
    submit={updateProfile} />
))

export default ({ currentUser, navigation }) => (
  <Mutation
    mutation={UPDATE_PROFILE_MUTATION}
    update={(cache, { data }) => updateCache(cache, { data, navigation })}>
    {(updateProfile, {
      loading,
      error
    }) => ([
      <EnhancedProfile
        key="update-profile"
        updateProfile={updateProfile}
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
