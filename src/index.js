import SwitchSelector from "react-native-switch-selector"
import Swiper from "react-native-swiper"
import Carousel, { Pagination, ParallaxImage, getInputRangeFromIndexes } from "react-native-snap-carousel"

import Text from "./components/Text"
import SafeAreaView from "./components/SafeAreaView"
import Tooltip from "./components/Tooltip"

import screen from "./assets/screen"
import { delay, handlerTimestamps } from "./lib/util"
import { isEmail, isEmojiCharacterInString, isIphoneX, isMobile, isSameDay } from "./lib/validator"

export {
  SwitchSelector,
  Swiper,
  Text,
  SafeAreaView,
  Tooltip,
  Carousel,
  Pagination,
  ParallaxImage,
  getInputRangeFromIndexes,
  screen,
  delay,
  handlerTimestamps,
  isEmail,
  isEmojiCharacterInString,
  isIphoneX,
  isMobile,
  isSameDay
}