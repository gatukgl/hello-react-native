import React, { useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native'

import Constants from 'expo-constants'
import { Header, Input, Button, Card } from 'react-native-elements'
import { withRouter } from 'react-router-native'

const Login = withRouter(({ history }) => {
  const [username, onUsernameChange] = useState('')

  const goToHomePage = () => {
    history.push({
      pathname: '/home',
      state: { username: username }
    })
  }

  return (
    <>
      <Header centerComponent={{ text: 'LOGIN', style: { color: 'white' } }} />
      <ScrollView style={styles.scrollView}>
        <Card>
          <Input
            placeholder='username'
            onChangeText={(text) => onUsernameChange(text)}
            value={username}
          />
          <Button title='Log me in!' type='outline' onPress={goToHomePage} />
        </Card>
      </ScrollView>
    </>
  )
})

export { Login }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  scrollView: {
    backgroundColor: 'white'
  }
})
