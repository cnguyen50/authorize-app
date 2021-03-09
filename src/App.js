import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { Header, Button } from './components/common'
import firebase from 'firebase'
import LoginForm from './components/LoginFrom'

class App extends Component {
  state = { loggedin: false }
  
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
        this.setState({ loggedin: true })
      } else {
        this.setState({ loggedin: false })
      }
    })
  } 

  renderContent() {
    if (this.state.logggedin) {
      return (
        <Button>
          Log out
        </Button>
      )
    }
  }
  
  render() {
    return (
      <View>
        <Header headertext="Authentication" />
        <LoginForm />
      </View>
    )
  }
}


export default App