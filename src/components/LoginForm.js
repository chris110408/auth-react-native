/**
 * Created by leichen on 2017/1/14.
 */

import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import firebase from 'firebase'
import { Button, Card, CardSection,Input,Spinner } from './common'
class LoginForm extends Component {
    state = { email: '',password:'', error: '', loading: false };

    onButtonPress() {
        const { email, password} = this.state;
        this.setState({ error: '', loading: true });
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(this.onLoginSuccess.bind(this))
            .catch(()=> {
            firebase.auth().createUserWithEmailAndPassword(email,password)
                .catch(this.onLoginFail.bind(this))
            })
    }

    onLoginFail() {
        console.log('fail');
        this.setState({ error: 'Auth fail', loading: false });
    }

    onLoginSuccess() {
        console.log('success');
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        })
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />
        }

        return (
            <Button whenPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        )
    }
    render() {
        const { errorTextStyle } = styles;
        return (
        <Card>
            <CardSection>
                <Input
                    placeholder="user@gmail.com"
                    label="Email:"
                    value={this.state.email}
                    onChangeText={email => this.setState({ email})}
                />
            </CardSection>

            <CardSection>
                <Input
                    secureTextEntry
                    placeholder="password"
                    label="PassWord:"
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                />
            </CardSection>
            <Text style={errorTextStyle}>
                {this.state.error}
            </Text>
            <CardSection>
                {this.renderButton()}
            </CardSection>
        </Card>

        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        color: 'red',
        alignSelf:'center'
    }
}

export default LoginForm
