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
import PopupPicker from '../components/popupPicker'
import { Dimensions, PixelRatio } from 'react-native'
export default class Login extends Component {
  render() {
    return (
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
            <Text style={{ color: '#ffffff' }}>忘记密码</Text>
          </Right>
        </Header>
        <Content
          style={{
            height: 300,
            flex: 1
          }}
        >
          <Form style={styles.formContainer}>
            <Item fixedLabel>
              <Icon active name="home" />
              <Input placeholder="请输入用户名" />
            </Item>
            <Item fixedLabel last>
              <Icon active name="home" />
              <Input placeholder="请输入密码" />
            </Item>
          </Form>
          <View
            style={{
              flex: 1,
              marginLeft: 20,
              marginRight: 20,
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <Button
              style={styles.loginButton}
              light
              block
              rounded
              onPress={() => this.props.navigation.navigate('Register')}
            >
              <Text>注册</Text>
            </Button>
            <Button style={styles.loginButton} primary block rounded>
              <Text>登录</Text>
            </Button>
          </View>
        </Content>
      </Container>
    )
  }
}
const styles = StyleSheet.create({
  formContainer: {
    marginBottom: 50
  },
  loginButton: {
    width: 300,
    height: 60
  }
})
