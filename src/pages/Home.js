import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { SearchBar } from 'react-native-elements'
import PageHead from '../components/pageHead'
export default class Home extends Component<Props> {
  static navigationOptions = {
    title: 'Home'
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <PageHead style={{ flex: 1 }} />
        <View style={{ flex: 10, flexDirection: 'column' }}>
          <Text>我是Test11111</Text>
          <Button
            title="跳"
            onPress={() => this.props.navigation.navigate('Detail')}
          />
        </View>
      </View>
    )
  }
}
