import React, { Component } from 'react';
import { View, Text, Button } from 'native-base';
import { onSignedOut } from '../../auth';
import PlaceList from '../../components/PlaceList/PlaceList'
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation'
class HomeScreen extends Component {
    itemSelectedHandler = key => this.props.navigation.navigate({
        routeName: 'PlaceDetail',
        params: {
            place: {
                ...this.props.places.find(place => place.key === key)
            }
        }
    });

    render() {
        const { navigation, places } = this.props;

        return (
            <View>
                <Button onPress={() => onSignedOut().then(navigation.navigate('SignedOut'))} >
                    <Text>Log out</Text>
                </Button>
                <PlaceList places={places} onItemSelected={this.itemSelectedHandler} onItemDelete={() =>{}}/>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    places: state.places.places,
});

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, null)(HomeScreen);
