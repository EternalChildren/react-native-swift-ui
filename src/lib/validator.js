//
// Created by EternalChildren on 2019/01/12.
// Copyright © 2019年 Shanghai Zane Network Technology Co., Ltd. All rights reserved.
//
import { Dimensions, Platform } from 'react-native'
import { handlerTimestamps } from './util'

/**
 * 验证当前设备是否是iPohneX
 */
export function isIphoneX () {
  const { width, height } = Dimensions.get('window')
  const X_WIDTH = 375
  const X_HEIGHT = 812
  const XR_WIDTH = 414
  const XR_HEIGHT = 896
  return Platform.OS === 'ios' &&
    (
      (width === X_HEIGHT && height === X_WIDTH) ||
      (width === X_WIDTH && height === X_HEIGHT) ||
      (width === XR_HEIGHT && height === XR_WIDTH) ||
      (width === XR_WIDTH && height === XR_HEIGHT)
    )
}

/**
 * 验证邮箱地址
 */
export function isEmail (value) {
  return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)
}

/**
 * 验证手机号码
 */
export function isMobile (value) {
  return /^1[3|4|5|7|8]\d{9}$/.test(value)
}

/**
 * 验证是否属于同一天
 */
export function isSameDay (day, otherday) {
  const one = handlerTimestamps(day)
  const other = handlerTimestamps(otherday)
  if (one.day !== other.day || one.month !== other.month || one.year !== other.year) {
    return false
  }
  return true
}

/**
 * 验证字符串是否存在emoji
 */
export function isEmojiCharacterInString (str) {
  const reg = new RegExp('^[\u4e00-\u9fa5_a-zA-Z0-9]+$')
  return !str.match(reg)
}
