import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import { connect } from 'react-redux';
import { addPlace } from '../../store/actions'
class SharePlaceScreen extends Component {
    render() {
        return (
            <View style={{ marginTop: 50}}>
                <PlaceInput onPlaceAdded={this.props.onAddPlace}/>
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: placeName => dispatch(addPlace(placeName))
    }
}

const mapStateToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(SharePlaceScreen);
