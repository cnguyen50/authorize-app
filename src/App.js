import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { Header, Button, Spinner } from './components/common'
import firebase from 'firebase'
import LoginForm from './components/LoginFrom'

class App extends Component {
  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCZuaNczqdp-jrwmEczY_NiZiQkQHtG6cY",
      authDomain: "auth-e3a9c.firebaseapp.com",
      projectId: "auth-e3a9c",
      storageBucket: "auth-e3a9c.appspot.com",
      messagingSenderId: "264953494366",
      appId: "1:264953494366:web:474366fc97f07dcb49adcf",
      measurementId: "G-E6LGP34REC"
    })

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  } 

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return  (
          <Button onPress={() => firebase.auth().signOut()}>
            Log out
          </Button>
        )
      case false:
        return <LoginForm/>
      default:
        return <Spinner size="Large" />
    }
  }
  
  render() {
    return (
      <View>
        <Header headertext="Authentication" />
      </View>
    )
  }
}


export default App