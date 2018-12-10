import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, List, ListItem, Text } from 'react-native-elements';
import { connect } from "react-redux";
import { httpGet } from '../../actions';
import { getAlbums } from '../../constant/global';
import Header from '../../components/Header';
import styles from './styles';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { httpGet, isLoading, albums } = this.props;

        if (albums) {
            return (
                <View>
                    <Header headerText="Albums" />

                    <List containerStyle={styles.containerStyle}>
                        {
                            albums.map((album) => (
                                <ListItem
                                    key={album.id}
                                    title={album.title}
                                />
                            ))
                        }
                    </List>
                </View>
            )
        }

        return (
            <View>
                <Header headerText="Home" />
                {
                    isLoading
                        ? <Text>Loading</Text>
                        : <Button title='GET' onPress={() => httpGet(getAlbums)} />
                }
            </View>
        );
    }
}

const mapStateToProps = state => {
    return { isLoading, errorMessage, albums } = state.http;
};

export default connect(mapStateToProps, { httpGet })(HomeScreen);