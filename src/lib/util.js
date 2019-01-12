//
// Created by EternalChildren on 2019/01/12.
// Copyright © 2019年 Shanghai Zane Network Technology Co., Ltd. All rights reserved.
//

/**
 * 延迟程序
 */
export function delay (ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * 格式化日期
 */
function formatDateNumber (n) {
  return n.toString()[1] ? n.toString() : `0${n}`
}

/**
 * 处理时间戳
 */
export function handlerTimestamps (timestamps) {
  const times = new Date(timestamps)
  const year = times.getFullYear().toString()
  const month = formatDateNumber(times.getMonth() + 1)
  const day = formatDateNumber(times.getDate())
  const hour = formatDateNumber(times.getHours())
  const minute = formatDateNumber(times.getMinutes())
  const second = formatDateNumber(times.getSeconds())
  const date = `${year}-${month}-${day}`
  const time = `${hour}:${minute}:${second}`
  return { year, month, day, hour, minute, second, date, time, dateAndTime: `${date} ${time}` }
}
