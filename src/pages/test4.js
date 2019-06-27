import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
export default class Test4 extends Component<Props> {
  render() {
    return (
      <View>
        <Text>我是Test444444</Text>
        <Button
          title="也是back"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
      </View>
    )
  }
}
