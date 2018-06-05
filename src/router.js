import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import { Platform, StatusBar } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import SignIn from './screens/SignIn/SignIn';
export const SIGN_IN = 'SignIn';
import SignUp from './screens/SignUp/SignUp';
export const SIGN_UP = 'SignUp';
import Restore from './screens/Restore';
export const RESTORE = 'Restore';

export const SignedOut = createStackNavigator({
    [SIGN_IN]: SignIn,
    [SIGN_UP]: SignUp,
    [RESTORE]: Restore
},
{
    cardStyle: {
        backgroundColor: '#FFFFFF',
    },
});

import Home from './screens/Home/Home';
export const HOME = 'Home';
import Profile from './screens/Profile/Profile';
export const PROFILE = 'Profile';
import SharePlace from './screens/SharePlace/SharePlace';
export const SHARE_PLACE = 'SharePlace';
import PlaceDetail from './screens/PlaceDetail/PlaceDetail';
export const PLACE_DETAIL = 'PlaceDetail';

export const HomeStack = createStackNavigator({
    [HOME]: {
        screen: Home,
    },
    [PLACE_DETAIL]: PlaceDetail,
}, {
    initialRouteName: HOME,
})

export const SignedIn = createBottomTabNavigator({
    [HOME]: {
        screen: HomeStack,
        navigationOptions: {
            tabBarLabel: HOME,
            tabBarIcon: ({ tintColor }) => (<Ionicons name="md-checkmark-circle" size={32} color="green" />),
        },
    },
    [PROFILE]: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: PROFILE,
            tabBarIcon: ({ tintColor }) => (<Ionicons name="md-checkmark-circle" size={32} color={tintColor} />),
        },
    },
    [SHARE_PLACE]: {
        screen: SharePlace,
        navigationOptions: {
            tabBarLabel: SHARE_PLACE,
            tabBarIcon: ({ tintColor }) => (<Ionicons name="md-checkmark-circle" size={32} color={tintColor} />),
        },
    },
});


export const createRootNavigation = (signedIn = false) => {
    return createSwitchNavigator({
        SignedIn: {
            screen: SignedIn,
        },
        SignedOut: {
            screen: SignedOut,
        },
    }, {
        initialRouteName: signedIn ? "SignedIn" : "SignedOut",
    });
};
