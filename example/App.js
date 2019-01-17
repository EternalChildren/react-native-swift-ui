import React, { Component } from 'react'
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native'
import { screen, Tooltip } from "react-native-swift-ui"

export default class App extends Component {
  render () {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar translucent backgroundColor="blue" />
        <View style={[
          {
            width: "100%",
            height: StatusBar.currentHeight,
            backgroundColor: "red"
          }
        ]} />
        <View style={{ height: 50, alignItems: "flex-end", backgroundColor: "yellow", marginTop: 100 }}>
          <Tooltip
            width={235 * screen.pxDp}
            height={103 * screen.pxDp}
            containerStyle={{ padding: 6 }}
            popover={<Text h3 lineHeight={22}>
              新闻热股：运用大数据分析全市场股票近期的相关新闻，并通过NLP算法对个股新闻进行舆情解读，以此甄选新闻热度较高的股票。
          </Text>}>
            <View style={{
              width: 40, height: 40, borderRadius: 20, justifyContent: "center",
              alignItems: "center", backgroundColor: "red"
            }}>
              <Text>Text</Text>
            </View>
          </Tooltip>
        </View>
      </SafeAreaView>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
