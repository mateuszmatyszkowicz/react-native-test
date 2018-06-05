import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { View, H2, Text } from 'native-base';

const localStyle = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: 25,
    },
    image: {
        height: 150,
        width: 150,
        borderWidth: 1,
        borderRadius: 75,
        marginBottom: 10,
        alignSelf: 'center',
    },
    headline: {
        color: '#787982',
    },
    subheadline: {
        fontSize: 18,
        color: '#A9B4C4',
    },
    textCenter: {
        textAlign: 'center',
    },
});

export const IntroSpace = ({ title, content, image }) => (
    <View style={localStyle.container}>
        <Image
            source={image}
            style={localStyle.image}
            resizeMode='contain'
        />
        <H2 style={[localStyle.textCenter, localStyle.headline]}>
            {title}
        </H2>
        <Text style={[localStyle.textCenter, localStyle.subheadline]}>
            {content}
        </Text>
    </View>
);
