import React from "react"

import {
  ActivityIndicator,
  Modal
} from "react-native"

import styled from "styled-components"

const Container = styled.View`
  align-items: center;
  bottom: 0;
  flex: 1;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`

const LoadingContainer = styled.View`
  align-items: center;
  background-color: #000;
  border-radius: 8;
  justify-content: center;
  opacity: 0.8;
  padding: 12px;
`

const ContentWrapper = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 4px;
  padding: 4px;
`

const TextWrapper = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
`

export default ({
  message,
  visible = true,
}) => (
  <Modal
    transparent
    onRequestClose={() => {}}
    visible={visible}>
    <Container>
      <LoadingContainer>
        <ContentWrapper>
          <ActivityIndicator
            animating={true}
            size="large"
            color="#fff" />
          <TextWrapper>
            {message}
          </TextWrapper>
        </ContentWrapper>
      </LoadingContainer>
    </Container>
  </Modal>
)
