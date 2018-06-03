import React from "react"

import { ActivityIndicator, Platform, View } from "react-native"

import {
  Paragraph,
  Colors,
  Dialog,
  DialogTitle,
  DialogContent,
} from "react-native-paper"

const isIOS = Platform.OS === "ios"

export default ({
  visible,
  title,
  message,
  close,
}) => (
  <Dialog
    onDismiss={close}
    visible={visible}>
    {title && (
      <DialogTitle>
        {title}
      </DialogTitle>
    )}
    <DialogContent>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center"
        }}>
        <ActivityIndicator
          color={Colors.indigo500}
          size={isIOS ? "large" : 48}
          style={{ marginRight: 16 }} />
        <Paragraph>
          {message}
        </Paragraph>
      </View>
    </DialogContent>
  </Dialog>
)
