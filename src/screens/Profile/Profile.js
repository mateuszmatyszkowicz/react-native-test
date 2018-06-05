import React, { Component } from 'react';
import { View, Button, Text, StyleSheet, ScrollView, Image, Animated, Dimensions } from 'react-native';
import { SIGN_IN } from '../../router';
import { onSignedOut } from '../../auth';

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

const HEADER_MAX_HEIGHT = 120, HEADER_MIN_HEIGHT = 70, PROFILE_IMAGE_MAX_HEIGHT = 80, PROFILE_IMAGE_MIN_MEIGHT = 40;

class Profile extends Component {
    static navigationOptions(navigation) {
        return ({
          headerTransparent: true,
          tabBarOptions: {
              scrollEnabled: true,
          }
        })
      }
    state = {
        scrollY: new Animated.Value(0)
    }

    render() {
        const headerHeight = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
            outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
            extrapolate: 'clamp'
        });

        const profileImageHeight = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
            outputRange: [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_MEIGHT],
            extrapolate: 'clamp'
        });

        const profileImagemarginTop = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
            outputRange: [HEADER_MAX_HEIGHT - (PROFILE_IMAGE_MAX_HEIGHT / 2), HEADER_MAX_HEIGHT + 5],
            extrapolate: 'clamp'
        });

        const headerZIndex = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        })

        const headerTitleBottom = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_MEIGHT,
                HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_MEIGHT + 26],
            outputRange: [-20, -20, -20, 0],
            extrapolate: 'clamp',
        })

        return (
            <View style={{flex: 1 }}>
                <Animated.View
                    style={{
                        position: 'absolute',
                        top: 0, right: 0, left: 0,
                        backgroundColor: 'lightskyblue',
                        height: headerHeight,
                        zIndex: headerZIndex,
                        alignItems: 'center',
                    }}>
                    <Animated.View style={{ position: 'absolute', bottom: headerTitleBottom}}>
                        <Text style={{ color: 'white' }}>Mat Mat</Text>
                    </Animated.View>
                </Animated.View>
                <ScrollView style={{ flex: 1 }}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [{ nativeEvent:{ contentOffset: { y : this.state.scrollY } } }]
                    )}>
                    <Animated.View style={{
                        height: profileImageHeight,
                        width: profileImageHeight,
                        borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
                        borderColor: 'white',
                        borderWidth: 3,
                        overflow: 'hidden',
                        marginTop: profileImagemarginTop,
                    }}>
                        <Image source={require('../../assets/x-black.png')} style={{flex: 1, width: null, height: null}}></Image>
                    </Animated.View>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 26, paddingLeft: 10 }}>Mat Mat</Text>
                    </View>
                    <View style={{height: 1000}}>
                        <Text>Shared place</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default Profile;
