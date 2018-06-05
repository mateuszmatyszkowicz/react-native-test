import React from 'react';
import { StyleSheet } from 'react-native';
import { Item, Icon, Input, Text } from 'native-base';
import colors from '../../lib/colors';

const localStyle = StyleSheet.create({
    passwordControl: {
        marginRight: 10,
        color: colors.extraInputColor,
    },
})

export const InputSecretControl = ({ passwordControl, onChangePasswordControl, style }) => (
    <Item style={style.item} rounded>
        <Icon type='SimpleLineIcons' name='lock' style={style.icon}/>
        <Input placeholder='Password' placeholderTextColor="#A9B4C4" secureTextEntry={passwordControl} />
        <Text
            style={localStyle.passwordControl}
            onPress={onChangePasswordControl}
        >
            { passwordControl ? 'Show' : 'Hide' }
        </Text>
    </Item>
);
