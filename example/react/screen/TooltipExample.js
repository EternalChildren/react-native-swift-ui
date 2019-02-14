import React from "react"
import { View } from "react-native"
import { Tooltip, screen, Text } from "react-native-swift-ui"



export default class TooltipExample extends React.Component {
  render () {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Tooltip
          width={235 * screen.pxDp}
          height={103 * screen.pxDp}
          containerStyle={{ padding: 6 }}
          popover={<Text lineHeight={22}>
            新闻热股：运用大数据分析全市场股票近期的相关新闻，并通过NLP算法对个股新闻进行舆情解读，以此甄选新闻热度较高的股票。
            </Text>}>
          <View style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'yellow'
          }}>
            <Text>Click on</Text>
          </View>
        </Tooltip>
      </View>
    )
  }
}
