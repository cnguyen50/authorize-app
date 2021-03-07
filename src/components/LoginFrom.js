import React, { Component } from 'react'
import firebase from 'firebase'
import { Button, Card, CardSection, Input } from './common'
import { Text } from 'react-native'

class LoginForm extends Component {
  state = { email : '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state

    this.setState({ error: '', loading: true })

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
        
        <Text stytle={styles.errorTextStyle}>
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

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm