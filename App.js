/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import Resolution from './src/utils/scaleSize'
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import AppContainer from './src/router/index'
import scale from './src/utils/scaleSize'
type Props = {}
export default class App extends Component<Props> {
  render() {
    return (
      <Resolution.FixWidthView>
        <AppContainer />
      </Resolution.FixWidthView>
    )
  }
}
