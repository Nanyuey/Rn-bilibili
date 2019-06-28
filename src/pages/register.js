import React, { Component } from 'react'
import fit from '../utils/scaleSize'
import { View, StyleSheet } from 'react-native'
import {
  Container,
  Left,
  Body,
  Header,
  Title,
  Input,
  Icon,
  Button,
  Text,
  Item,
  Content,
  Form,
  Label,
  ActionSheet,
  Root
} from 'native-base'

var BUTTONS = ['中国', '美国', '英国', '挪威', '法国']
var list = [{ value: 'china', label: '中国' }, { value: 'usa', label: '美国' }]
var DESTRUCTIVE_INDEX = 3
var CANCEL_INDEX = 4
import PopupPicker from '../components/popupPicker'
import { Dimensions, PixelRatio } from 'react-native'
export default class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentArea: '中国',
      isShow: false,
      selectOption: ''
    }
  }

  render () {
    return (
      <Root>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
              <Text>关闭</Text>
            </Button>
          </Left>
          <Body>
            <Title>注册账号</Title>
          </Body>
        </Header>
        <Content
          style={{
            height: 300,
            flex: 1
          }}
        >
          <Button
            transparent
            iconRight
            style={styles.cell}
            onPress={() => { this.setState({ isShow: true }) }}
          >
            <Text>{this.state.currentArea}</Text>
            <Icon name="arrow-forward" />
          </Button>

          <Form style={styles.formContainer}>
            <Item fixedLabel>
              <Label>+86</Label>
              <Input placeholder="请输入常用手机号" />
            </Item>
            <Item fixedLabel last>
              <Label>验证码</Label>
              <Input placeholder="请输入验证码" />
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
            <Button style={styles.loginButton} light block rounded>
              <Text>注册</Text>
            </Button>
            <Button style={styles.loginButton} primary block rounded>
              <Text>登录</Text>
            </Button>
          </View>
        </Content>
        <PopupPicker isShow={this.state.isShow} list={list} select={(index) => {
          this.setState({
            currentArea: list[index].label,
            isShow: false,
            selectOption: list[index].value
          })
        }} closeModal={() => {
          this.setState({ isShow: false })
        }} />
      </Root>
    )
  }
}
const styles = StyleSheet.create({
  cell: {
    width: '100%',
    height: 50
  },
  formContainer: {
    marginBottom: 50
  },
  loginButton: {
    width: 300,
    height: 60
  }
})
