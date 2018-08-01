import SInfo from "react-native-sensitive-info"

export const setSecureKey = async ({ key, value }) => (
  await SInfo.setItem(key, value, {})
)

export const getSecureKey = async ({ key }) => (
  await SInfo.getItem(key, {}).then(value => {
    return value
  })
)

export const removeSecureKey = async ({ key }) => (
  await SInfo.deleteItem(key, {})
)
