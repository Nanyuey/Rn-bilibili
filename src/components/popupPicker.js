import React, { Component } from 'react'
import { View, Text, StyleSheet, Modal, Button, TouchableOpacity, Alert } from 'react-native'
import { Container } from 'native-base'
export default class PopupPicker extends Component {
  constructor (props) {
    super(props)
    state = {
      isShow: false,
      selectIndex: ''
    }
  }
  selectSuccess = () => {
    if (this.state)
      this.props.select(this.state.selectIndex)
  }
  render () {
    const { isShow, closeModal, list, select } = this.props
    return (
      <Modal animationType="slide"
        transparent={true}
        visible={isShow}
        onRequestClose={() => { }}>
        <TouchableOpacity style={styles.modelView}
          onPress={closeModal}
          activeOpacity={0.9}>
          <View style={styles.content}>
            <View style={styles.titleContainer}>
              <Text onPress={closeModal}>关闭</Text>
              <Text onPress={() => this.selectSuccess()}>完成</Text>
            </View>
            {list.map((item, index) => {
              return (
                <View key={item.value}>
                  <Text onPress={() => { this.setState({ selectIndex: index }) }} style={[styles.contentItem, this.state && this.state.selectIndex === index && styles.activeItem]}>{item.label}</Text>
                </View>
              )
            })}
          </View>
        </TouchableOpacity>
      </Modal >
    )
  }
}
const styles = StyleSheet.create({
  modelView: {
    flex: 1,
    backgroundColor: 'rgba(40,40,40,0.4)',
    justifyContent: 'flex-end'
  },
  content: {
    backgroundColor: '#ffffff'
  },
  contentItem: {
    paddingLeft: 20,
    lineHeight: 50,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  activeItem: {
    color: 'green'
  },
  titleContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
