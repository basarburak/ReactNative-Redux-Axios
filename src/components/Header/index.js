import React, { Component } from 'react';
import { View } from 'react-native';
import { Header as Head } from 'react-native-elements';
import styles from './styles';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    getProps() {
        console.log(this.props);
    }

    render() {
        return (
            <View>
                <Head
                    centerComponent={{ text: this.props.headerText, style: styles.headerStyle }}
                    rightComponent={{ icon: 'home', color: 'white',onPress : this.props.headerClick }}
                />
            </View>
        );
    }
}