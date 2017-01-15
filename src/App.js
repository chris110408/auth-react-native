/**
 * Created by leichen on 2017/1/14.
 */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase'
import { Header, Button, Spinner } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
    state={ loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBI0hP7JBb0gJ7b07aiYcjp8UK0rqPAEZ4',
            authDomain: 'auth-ca711.firebaseapp.com',
            databaseURL: 'https://auth-ca711.firebaseio.com',
            storageBucket: 'auth-ca711.appspot.com',
            messagingSenderId: '580628758316'
        })

        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({ loggedIn: true});
            } else {
                this.setState({ loggedIn: false});
            }
        });

    }



    renderContent() {
        switch (this.state.loggedIn){
            case true:
                return (
                    <View style={styles.buttonContainerStyle}>
                        <Button whenPress={() => firebase.auth().signOut() }>Log out</Button>
                    </View>

                )
            case false:
                return <LoginForm/>
            default:
                return <Spinner size="large" />
        }

    }
    render() {
        return (
            <View>
                <Header headerText="Authentication"></Header>
                {this.renderContent()}
            </View>
        )
    }
}

const styles = {
    buttonContainerStyle: {
        flexDirection: 'row'
    }
};

export default App;

