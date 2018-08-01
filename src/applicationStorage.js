import { AsyncStorage } from "react-native"

import { getSecureKey, setSecureKey, removeSecureKey } from "./secureStorage"

const INITIAL_CREDENTIALS = {
  email: "",
  jwt: "",
  profile: {
    firstName: "",
    lastName: "",
    avatar: "",
    __typename: "Profile"
  },
  __typename: "Credential"
}

export const loadCredentials = async () => {
  const secureData  = await getSecureKey({ key: "@credentials" })
  const storedCreds = await JSON.parse(secureData)

  return { ...INITIAL_CREDENTIALS, ...storedCreds }
}

export const saveCredentials = async (data) => {
  const credentials = { ...INITIAL_CREDENTIALS, ...data }

  await setSecureKey({ key: "@credentials", value: credentials })

  return credentials
}

export const removeCredentials = async () => {
  await removeSecureKey({ key: "@credentials" })
}
