import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
export default class Test3 extends Component<Props> {
  render() {
    return (
      <View>
        <Text>我是Test33333</Text>
        <Button
          title="也是跳"
          onPress={() => this.props.navigation.navigate('Test')}
        />
      </View>
    )
  }
}
