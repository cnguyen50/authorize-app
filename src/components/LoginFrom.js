import React, { Component } from 'react'
import firebase from 'firebase'
import { Button, Card, CardSection, Input } from './common'
import { Text } from 'react-native'

class LoginForm extends Component {
  state = { email : '', password: '', error: '' };

  onButtonPress() {
    const { email, password } = this.state

    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() =>{
            this.setState({ error: 'Authentication failed'})
          })
      })
  }

  render() {
    return(
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.text}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
          <Input
            secureTextEntry 
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        <CardSection
          
        />
        
        <Text>
          {this.state.error}
        </Text>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Log in
          </Button>
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm