//
// Created by EternalChildren on 2018/12/28.
// Copyright © 2018年 Shanghai Zane Network Technology Co., Ltd. All rights reserved.
//
import React from "react"
import { StyleSheet, Text as NativeText } from "react-native"

import screen from "../assets/screen"

export default class Text extends React.PureComponent {
  render () {
    const { h1, h2, h3, h4, h5, h6, color, lineHeight, style, ...rest } = this.props
    return (
      <NativeText
        {...rest}
        allowFontScaling={false}
        style={[
          h1 ? styles.h1 : h2 ? styles.h2 :
            h3 ? styles.h3 : h4 ? styles.h4 :
              h5 ? styles.h5 : h6 ? styles.h6 : undefined,
          { color, lineHeight },
          style,
        ]}
      />
    )
  }
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 32 * screen.pxDp,
    color: "#262626"
  },
  h2: {
    fontSize: 18 * screen.pxDp,
    color: "#262626"
  },
  h3: {
    fontSize: 16 * screen.pxDp,
    color: "#262626"
  },
  h4: {
    fontSize: 14 * screen.pxDp,
    color: "#262626"
  },
  h5: {
    fontSize: 12 * screen.pxDp,
    color: "#262626"
  },
  h6: {
    fontSize: 10 * screen.pxDp,
    color: "#262626"
  }
})
