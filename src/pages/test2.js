import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
export default class Test2 extends Component<Props> {
  render() {
    return (
      <View>
        <Text>我是Test22222</Text>
        <Button
          title="back"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    )
  }
}
