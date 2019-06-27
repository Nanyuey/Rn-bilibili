import React, { Component } from 'react'
import fit from '../utils/scaleSize'
import { View, StyleSheet } from 'react-native'
import {
  Container,
  Left,
  Right,
  Body,
  Header,
  Title,
  Input,
  Icon,
  Button,
  Text,
  Item,
  Content,
  Form
} from 'native-base'
import Resolution from '../utils/scaleSize'
import PopupPicker from '../components/popupPicker'
import { Dimensions, PixelRatio } from 'react-native'
export default class Login extends Component {
  render() {
    return (
      <Resolution.FixWidthView>
        <Container>
          <Header>
            <Left>
              <Button transparent>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>登录</Title>
            </Body>
            <Right>
              <Text>忘记密码</Text>
            </Right>
          </Header>
          <Content>
            <Form>
              <Item fixedLabel>
                <Icon active name="home" />
                <Input placeholder="请输入用户名" />
              </Item>
              <Item fixedLabel last>
                <Icon active name="home" />
                <Input placeholder="请输入密码" />
              </Item>
            </Form>
          </Content>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <Button style={styles.loginButton} light block rounded>
              <Text>注册</Text>
            </Button>
            <Button style={styles.loginButton} primary block rounded>
              <Text>登录</Text>
            </Button>
          </View>
        </Container>
      </Resolution.FixWidthView>
    )
  }
}
const styles = StyleSheet.create({
  // pageContainer: {
  //   width: fit.width,
  //   height: fit.height,
  //   transform: [
  //     { translateX: -fit.width * 0.5 },
  //     { translateY: -fit.height * 0.5 },
  //     { scale: fit.scale },
  //     { translateX: fit.width * 0.5 },
  //     { translateY: fit.height * 0.5 }
  //   ]
  // },
  // loginButton: {
  //   width: 300,
  //   height: 60
  // }
})
