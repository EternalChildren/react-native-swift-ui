//
// Created by EternalChildren on 2018/11/29.
// Copyright © 2018年 Shanghai Zane Network Technology Co., Ltd. All rights reserved.
//
import { Dimensions, PixelRatio, Platform, StatusBar } from "react-native"

import { isIphoneX } from "../lib/validator"

const devSize = Dimensions.get("window")

const safeArea = Platform.OS === "ios"
  ? isIphoneX()
    ? 78
    : 20
  : StatusBar.currentHeight ? StatusBar.currentHeight : 0

const uiWidthPx = 375
const uiHeightPx = 667

const devHeight = devSize.height

const width = devSize.width
const height = devSize.height - safeArea

const pxDp = width / uiWidthPx
const hDp = height / (uiHeightPx - 20)
const fontSizeScaler = Platform.OS === "ios" ? 1 : 1 / PixelRatio.getFontScale()

export default {
  devHeight,
  width,
  height,
  pxDp,
  hDp,
  fontSizeScaler
}
