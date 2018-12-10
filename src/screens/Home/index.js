import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, List, ListItem } from 'react-native-elements';
import { connect } from "react-redux";
import { httpGet } from '../../actions';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    getApi() {
        this.props.httpGet('albums');
    }

    render() {
        if (this.props.isLoading) {
            return (
                <View>
                    <Header
                        centerComponent={{ text: 'Loading', style: { color: '#fff' } }}
                    />
                </View>
            )
        }

        if (this.props.result) {
            return (
                <View>
                    <Header
                        centerComponent={{ text: 'Albums', style: { color: '#fff' } }}
                    />

                    <List containerStyle={{ marginBottom: 20 }}>
                        {
                            this.props.result.map((album) => (
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
                <Header
                    centerComponent={{ text: 'Home', style: { color: '#fff' } }}
                />

                <Button
                    title='GET'
                    onPress={() => this.getApi()}
                />

            </View>
        );
    }
}

const mapStateToProps = state => {
    const { result, errorMessage, isLoading } = state.http;
    return { isLoading, result, errorMessage };
};

export default connect(mapStateToProps, { httpGet })(HomeScreen);