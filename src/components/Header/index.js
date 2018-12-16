import React, { Component } from 'react';
import { View } from 'react-native';
import { Header as Head } from 'react-native-elements';
import styles from './styles';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Head
                    centerComponent={{ text: this.props.headerText, style: styles.headerStyle }}
                />
            </View>
        );
    }
}