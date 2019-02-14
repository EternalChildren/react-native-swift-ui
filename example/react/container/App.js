import React from 'react'
import { SafeAreaView } from 'react-native-swift-ui'
import AppContainer from './AppContainer'

export default class App extends React.Component {
  render () {
    return (
      <SafeAreaView>
        <AppContainer />
      </SafeAreaView>
    )
  }
}

