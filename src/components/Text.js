//
// Created by EternalChildren on 2018/12/28.
// Copyright © 2018年 Shanghai Zane Network Technology Co., Ltd. All rights reserved.
//
import React from 'react'
import { StyleSheet, Text as NativeText } from 'react-native'

import screen from '../assets/screen'

export default class Text extends React.PureComponent {
  render () {
    const { mode, color, lineHeight, style, ...rest } = this.props
    return (
      <NativeText
        {...rest}
        allowFontScaling={false}
        style={[
          styles[mode || "normal_noto"],
          { color: color || "#000", lineHeight },
          style
        ]}
      />
    )
  }
}

const styles = StyleSheet.create({
  h1_noto: {
    fontFamily: "NotoSansSC-Regular",
    fontSize: 32 * screen.pxDp
  },
  h1_noto_medium: {
    fontFamily: "NotoSansSC-Medium",
    fontSize: 32 * screen.pxDp
  },
  h1_din: {
    fontFamily: "DIN-Regular",
    fontSize: 32 * screen.pxDp
  },
  h1_din_medium: {
    fontFamily: "DIN-Medium",
    fontSize: 32 * screen.pxDp,
  },
  h2_noto: {
    fontFamily: "NotoSansSC-Regular",
    fontSize: 18 * screen.pxDp
  },
  h2_noto_medium: {
    fontFamily: "NotoSansSC-Medium",
    fontSize: 18 * screen.pxDp,
  },
  h2_din: {
    fontFamily: "DIN-Regular",
    fontSize: 18 * screen.pxDp
  },
  h2_din_medium: {
    fontFamily: "DIN-Medium",
    fontSize: 18 * screen.pxDp,
  },
  normal_noto: {
    fontFamily: "NotoSansSC-Regular",
    fontSize: 16 * screen.pxDp,
  },
  normal_noto_medium: {
    fontFamily: "NotoSansSC-Medium",
    fontSize: 16 * screen.pxDp,
  },
  normal_din: {
    fontFamily: "DIN-Regular",
    fontSize: 16 * screen.pxDp
  },
  normal_din_medium: {
    fontFamily: "DIN-Medium",
    fontSize: 16 * screen.pxDp,
  },
  s1_noto: {
    fontFamily: "NotoSansSC-Regular",
    fontSize: 14 * screen.pxDp
  },
  s1_noto_medium: {
    fontFamily: "NotoSansSC-Medium",
    fontSize: 14 * screen.pxDp,
  },
  s1_din: {
    fontFamily: "DIN-Regular",
    fontSize: 14 * screen.pxDp
  },
  s1_din_medium: {
    fontFamily: "DIN-Medium",
    fontSize: 14 * screen.pxDp,
  },
  s2_noto: {
    fontFamily: "NotoSansSC-Regular",
    fontSize: 12 * screen.pxDp
  },
  s2_noto_medium: {
    fontFamily: "NotoSansSC-Medium",
    fontSize: 12 * screen.pxDp,
  },
  s2_din: {
    fontFamily: "DIN-Regular",
    fontSize: 12 * screen.pxDp
  },
  s2_din_medium: {
    fontFamily: "DIN-Medium",
    fontSize: 12 * screen.pxDp,
  },
  s3_noto: {
    fontFamily: "NotoSansSC-Regular",
    fontSize: 10 * screen.pxDp
  },
  s3_noto_medium: {
    fontFamily: "NotoSansSC-Medium",
    fontSize: 10 * screen.pxDp,
  },
  s3_din: {
    fontFamily: "DIN-Regular",
    fontSize: 10 * screen.pxDp
  },
  s3_din_medium: {
    fontFamily: "DIN-Medium",
    fontSize: 10 * screen.pxDp,
  }
})
