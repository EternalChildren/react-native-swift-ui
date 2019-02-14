import React from "react"
import { View, ScrollView } from "react-native"
import { screen, Text } from "react-native-swift-ui"

export default class TextExample extends React.Component {
  render () {
    return (
      <ScrollView>
        <View style={{
          width: "100%", borderBottomWidth: 1,
          paddingVertical: 10,
          paddingHorizontal: 10,
          justifyContent: "space-around"
        }}>
          <Text mode="h1_noto">h1</Text>
          <View style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between"
          }}>
            <Text mode="h1_noto">Noto-Regular</Text>
            <Text mode="h1_noto">中文字体</Text>
          </View>
          <View style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between"
          }}>
            <Text mode="h1_noto_medium">Noto-Medium</Text>
            <Text mode="h1_noto_medium">中文字体</Text>
          </View>
          <View style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between"
          }}>
            <Text mode="h1_din">DIN-Regular</Text>
            <Text mode="h1_din">A,B,C,1,2,3</Text>
          </View>
          <View style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between"
          }}>
            <Text mode="h1_din_medium">DIN-Medium</Text>
            <Text mode="h1_din_medium">A,B,C,1,2,3</Text>
          </View>
        </View>

        <View style={{
          width: "100%", borderBottomWidth: 1,
          paddingVertical: 10,
          paddingHorizontal: 10,
          justifyContent: "space-around"
        }}>
          <Text mode="h2_noto">h2</Text>
          <View style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between"
          }}>
            <Text mode="h2_noto">Noto-Regular</Text>
            <Text mode="h2_noto">中文字体</Text>
          </View>
          <View style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between"
          }}>
            <Text mode="h2_noto_medium">Noto-Medium</Text>
            <Text mode="h2_noto_medium">中文字体</Text>
          </View>
          <View style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between"
          }}>
            <Text mode="h2_din">DIN-Regular</Text>
            <Text mode="h2_din">A,B,C,1,2,3</Text>
          </View>
          <View style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between"
          }}>
            <Text mode="h2_din_medium">DIN-Medium</Text>
            <Text mode="h2_din_medium">A,B,C,1,2,3</Text>
          </View>
        </View>

        <View style={{
          width: "100%", borderBottomWidth: 1,
          paddingVertical: 10,
          paddingHorizontal: 10,
          justifyContent: "space-around"
        }}>
          <Text mode="normal_noto">normal</Text>
          <View style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between"
          }}>
            <Text mode="normal_noto">Noto-Regular</Text>
            <Text mode="normal_noto">中文字体</Text>
          </View>
          <View style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between"
          }}>
            <Text mode="normal_noto_medium">Noto-Medium</Text>
            <Text mode="normal_noto_medium">中文字体</Text>
          </View>
          <View style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between"
          }}>
            <Text mode="normal_din">DIN-Regular</Text>
            <Text mode="normal_din">A,B,C,1,2,3</Text>
          </View>
          <View style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between"
          }}>
            <Text mode="normal_din_medium">DIN-Medium</Text>
            <Text mode="normal_din_medium">A,B,C,1,2,3</Text>
          </View>
        </View>

        <View style={{
          width: "100%", borderBottomWidth: 1,
          paddingVertical: 10,
          paddingHorizontal: 10,
          justifyContent: "space-around"
        }}>
          <Text mode="s1_noto">s1</Text>
          <View style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between"
          }}>
            <Text mode="s1_noto">Noto-Regular</Text>
            <Text mode="s1_noto">中文字体</Text>
          </View>
          <View style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between"
          }}>
            <Text mode="s1_noto_medium">Noto-Medium</Text>
            <Text mode="s1_noto_medium">中文字体</Text>
          </View>
          <View style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between"
          }}>
            <Text mode="s1_din">DIN-Regular</Text>
            <Text mode="s1_din">A,B,C,1,2,3</Text>
          </View>
          <View style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between"
          }}>
            <Text mode="s1_din_medium">DIN-Medium</Text>
            <Text mode="s1_din_medium">A,B,C,1,2,3</Text>
          </View>
        </View>

        <View style={{
          width: "100%", borderBottomWidth: 1,
          paddingVertical: 10,
          paddingHorizontal: 10,
          justifyContent: "space-around"
        }}>
          <Text mode="s2_noto">s2</Text>
          <View style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between"
          }}>
            <Text mode="s2_noto">Noto-Regular</Text>
            <Text mode="s2_noto">中文字体</Text>
          </View>
          <View style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between"
          }}>
            <Text mode="s2_noto_medium">Noto-Medium</Text>
            <Text mode="s2_noto_medium">中文字体</Text>
          </View>
          <View style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between"
          }}>
            <Text mode="s2_din">DIN-Regular</Text>
            <Text mode="s2_din">A,B,C,1,2,3</Text>
          </View>
          <View style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between"
          }}>
            <Text mode="s2_din_medium">DIN-Medium</Text>
            <Text mode="s2_din_medium">A,B,C,1,2,3</Text>
          </View>
        </View>

        <View style={{
          width: "100%", borderBottomWidth: 1,
          paddingVertical: 10,
          paddingHorizontal: 10,
          justifyContent: "space-around"
        }}>
          <Text mode="s3_noto">s3</Text>
          <View style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between"
          }}>
            <Text mode="s3_noto">Noto-Regular</Text>
            <Text mode="s3_noto">中文字体</Text>
          </View>
          <View style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between"
          }}>
            <Text mode="s3_noto_medium">Noto-Medium</Text>
            <Text mode="s3_noto_medium">中文字体</Text>
          </View>
          <View style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between"
          }}>
            <Text mode="s3_din">DIN-Regular</Text>
            <Text mode="s3_din">A,B,C,1,2,3</Text>
          </View>
          <View style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between"
          }}>
            <Text mode="s3_din_medium">DIN-Medium</Text>
            <Text mode="s3_din_medium">A,B,C,1,2,3</Text>
          </View>
        </View>
      </ScrollView>
    )
  }
}
