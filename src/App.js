import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import { Header } from './components/common'
import firebase from 'firebase'
import LoginForm from './components/LoginFrom'

class App extends Component {
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
  }
}

class App extends Component {
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