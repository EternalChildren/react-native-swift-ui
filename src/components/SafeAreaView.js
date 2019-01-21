//
// Created by EternalChildren on 2018/12/05.
// Copyright © 2018年 Shanghai Zane Network Technology Co., Ltd. All rights reserved.
//
import React from 'react'
import { Platform, SafeAreaView as NativeSafeAreaView, StatusBar, StyleSheet, View } from 'react-native'
import { isIphoneX } from '../lib/validator'
export default class SafeAreaView extends React.PureComponent {
  render () {
    const { light, backgroundColor, topColor, bottomColor, children } = this.props
    return Platform.OS === 'ios'
      ? (
        <NativeSafeAreaView style={[styles.container, { backgroundColor: backgroundColor || 'rgba(0,0,0,0)' }]}>
          <StatusBar barStyle={light ? 'light-content' : 'dark-content'} />
          <View style={[
            styles.top,
            isIphoneX() && styles.top_x,
            {
              backgroundColor: topColor || 'rgba(0,0,0,0)'
            }
          ]} />
          {
            typeof Platform.Version === 'number'
              ? Platform.Version < 11
              : parseInt(Platform.Version.split('.')[0], 10) < 11
                ? <View style={[
                  styles.status_extra_height, {
                    backgroundColor: topColor || 'rgba(0,0,0,0)'
                  }
                ]} />
                : null
          }
          {children}
          {
            isIphoneX() && <View style={[
              styles.bottom_x,
              {
                backgroundColor: bottomColor || 'rgba(0,0,0,0)'
              }
            ]} />
          }
        </NativeSafeAreaView>
      )
      : (
        <NativeSafeAreaView style={[styles.container, { backgroundColor: backgroundColor || 'rgba(0,0,0,0)' }]}>
          <StatusBar translucent backgroundColor={'#000'} barStyle='light-content' />
          <View style={[
            styles.status_extra_height,
            {
              height: StatusBar.currentHeight
            }
          ]} />
          {children}
        </NativeSafeAreaView>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  top: {
    width: '100%',
    height: 20,
    position: 'absolute'
  },
  top_x: {
    height: 44
  },
  status_extra_height: {
    width: '100%',
    height: 20,
    zIndex: 9999
  },
  bottom_x: {
    width: '100%',
    height: 34,
    position: 'absolute',
    bottom: 0
  }
})
