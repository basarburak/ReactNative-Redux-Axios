import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, List, ListItem, Text } from 'react-native-elements';
import { connect } from "react-redux";
import { httpGet } from '../../actions';
import { getAlbums } from '../../constant/global';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { httpGet, isLoading, albums } = this.props;

        if (albums) {
            return (
                <View>
                     <Header centerComponent={{ text: 'Albums', style: { color: '#fff' } }} />

                    <List containerStyle={{ marginBottom: 20 }}>
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
                <Header centerComponent={{ text: 'Home', style: { color: '#fff' } }} />
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
    const { errorMessage, isLoading, albums } = state.http;
    return { isLoading, errorMessage, albums };
};

export default connect(mapStateToProps, { httpGet })(HomeScreen);