import React from 'react'

import { View, FlatList, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-swift-ui'
export default class Home extends React.Component {
  render () {
    return <FlatList
      data={['Tooltip', 'Text']}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => {
        return <TouchableOpacity
          onPress={() => this.props.navigation.navigate(`${item}Example`)}
          style={{
            flex: 1, height: 50, borderBottomColor: "#f1f1f1",
            borderBottomWidth: 3, justifyContent: 'center', alignItems: "center"
          }}>
          <Text>{item}</Text>
        </TouchableOpacity>
      }}
    />
  }
}
