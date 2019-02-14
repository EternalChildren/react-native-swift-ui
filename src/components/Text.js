//
// Created by EternalChildren on 2018/12/28.
// Copyright © 2018年 Shanghai Zane Network Technology Co., Ltd. All rights reserved.
//
import React from 'react'
import { StyleSheet, Text as NativeText } from 'react-native'

import screen from '../assets/screen'

const defaultProps = {
  h1: {
    fontSize: 32 * screen.pxDp,
    lineHeight: 47 * screen.pxDp
  },
  h2: {
    fontSize: 18 * screen.pxDp,
    lineHeight: 27 * screen.pxDp
  },
  normal: {
    fontSize: 16 * screen.pxDp,
    lineHeight: 24 * screen.pxDp
  },
  s1: {
    fontSize: 14 * screen.pxDp,
    lineHeight: 20 * screen.pxDp
  },
  s2: {
    fontSize: 12 * screen.pxDp,
    lineHeight: 18 * screen.pxDp
  },
  s3: {
    fontSize: 10 * screen.pxDp,
    lineHeight: 15 * screen.pxDp
  }
}

export default class Text extends React.PureComponent {
  render () {
    const { mode, color, lineHeight, style, ...rest } = this.props
    return (
      <NativeText
        {...rest}
        allowFontScaling={false}
        style={[
          styles[mode || "normal_noto"],
          lineHeight && { lineHeight },
          { color: color || "#000" },
          style
        ]}
      />
    )
  }
}

const styles = StyleSheet.create({
  h1_noto: {
    ...defaultProps.h1,
    fontFamily: "NotoSansSC-Regular"
  },
  h1_noto_medium: {
    ...defaultProps.h1,
    fontFamily: "NotoSansSC-Medium"
  },
  h1_din: {
    ...defaultProps.h1,
    fontFamily: "DIN-Regular"
  },
  h1_din_medium: {
    ...defaultProps.h1,
    fontFamily: "DIN-Medium"
  },
  h2_noto: {
    ...defaultProps.h2,
    fontFamily: "NotoSansSC-Regular"
  },
  h2_noto_medium: {
    ...defaultProps.h2,
    fontFamily: "NotoSansSC-Medium"
  },
  h2_din: {
    ...defaultProps.h2,
    fontFamily: "DIN-Regular"
  },
  h2_din_medium: {
    ...defaultProps.h2,
    fontFamily: "DIN-Medium"
  },
  normal_noto: {
    ...defaultProps.normal,
    fontFamily: "NotoSansSC-Regular"
  },
  normal_noto_medium: {
    ...defaultProps.normal,
    fontFamily: "NotoSansSC-Medium"
  },
  normal_din: {
    ...defaultProps.normal,
    fontFamily: "DIN-Regular"
  },
  normal_din_medium: {
    ...defaultProps.normal,
    fontFamily: "DIN-Medium"
  },
  s1_noto: {
    ...defaultProps.s1,
    fontFamily: "NotoSansSC-Regular"
  },
  s1_noto_medium: {
    ...defaultProps.s1,
    fontFamily: "NotoSansSC-Medium"
  },
  s1_din: {
    ...defaultProps.s1,
    fontFamily: "DIN-Regular"
  },
  s1_din_medium: {
    ...defaultProps.s1,
    fontFamily: "DIN-Medium"
  },
  s2_noto: {
    ...defaultProps.s2,
    fontFamily: "NotoSansSC-Regular"
  },
  s2_noto_medium: {
    ...defaultProps.s2,
    fontFamily: "NotoSansSC-Medium"
  },
  s2_din: {
    ...defaultProps.s2,
    fontFamily: "DIN-Regular"
  },
  s2_din_medium: {
    ...defaultProps.s2,
    fontFamily: "DIN-Medium"
  },
  s3_noto: {
    ...defaultProps.s3,
    fontFamily: "NotoSansSC-Regular"
  },
  s3_noto_medium: {
    ...defaultProps.s3,
    fontFamily: "NotoSansSC-Medium"
  },
  s3_din: {
    ...defaultProps.s3,
    fontFamily: "DIN-Regular"
  },
  s3_din_medium: {
    ...defaultProps.s3,
    fontFamily: "DIN-Medium"
  }
})
