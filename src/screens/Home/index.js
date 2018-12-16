import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Button, List, ListItem } from 'react-native-elements';
import { connect } from "react-redux";
import { httpGet } from '../../actions';
import Header from '../../components/Header';
import styles from './styles';
import { commentApi } from '../../services/apiService';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    getProps() {
        console.log(this.props);
    }

    render() {
        const { httpGet, isLoading, comments, comment } = this.props;

        if (comments && !comment) {
            return (
                <View>
                    <Header headerText="Comments" headerClick={() => this.getProps()} />

                    <ScrollView>
                        <List containerStyle={styles.containerStyle}>
                            {
                                comments.map((cmd) => (
                                    <ListItem
                                        key={cmd.id}
                                        onPress={() => httpGet(commentApi.getParams(cmd.postId))}
                                        title={cmd.postId + ' ' + cmd.name}
                                    />
                                ))
                            }
                        </List>
                    </ScrollView>
                </View>
            )
        }

        if (comment) {
            return (
                <View>
                    <Header headerText="Comment" headerClick={() => this.getProps()} />

                    <ScrollView>
                        <List containerStyle={styles.containerStyle}>
                            {
                                comment.map((cmd) => (
                                    <ListItem
                                        key={cmd.id}
                                        title={cmd.postId + ' ' + cmd.name}
                                    />
                                ))
                            }
                        </List>
                    </ScrollView>
                </View>
            )
        }

        return (
            <View>
                <Header headerText="Home" headerClick={() => this.getProps()} />

                <Button
                    loading={isLoading}
                    disabled={isLoading}
                    title='Get Allbums'
                    onPress={() => httpGet(commentApi.get())}
                />

            </View>
        );
    }
}

const mapStateToProps = state => {
    return { isLoading, errorMessage, comments, comment } = state.http;
};

export default connect(mapStateToProps, { httpGet })(HomeScreen);