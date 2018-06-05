import React, { Component } from 'react';
import { Image, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Constants } from 'expo';
import { H2, Text, View , Container, Content, Form, Item, Input, Icon, Button, Footer } from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';

import { InputSecretControl, IntroSpace } from '../components/Common';
import colors from '../lib/colors';
import { onSignedIn } from '../auth';

const style = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    alignItems: 'center',
  },
  content: {
    height: '100%',
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    textAlign: 'center',
  },
  item: {
    flex: 1,
    maxHeight: 35,
  },
  icon: {
    color: colors.malibu,
    fontSize: 18,
  },
  footer: {
    height: 25,
    backgroundColor: 'transparent',
  },
  flexAndCenter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  colorJumbo: {
    color: colors.jumbo,
  },
  textBold: {
    fontWeight: 'bold',
  },
  textRight: {
    textAlign: 'right',
  },
  colorLoblolly: {
    color: colors.loblolly,
  },
  colorMalibu: {
    color: colors.malibu,
  },
  backIcon: {
      fontSize: 64,
      marginLeft: 20,
  }
})

export default class Restore extends Component {
  state = {
    passwordControl: true,
  }

  static navigationOptions(navigation) {
    return ({
      headerTransparent: true,
      headerBackImage: () => <Icon name="ios-arrow-round-back" style={[style.colorMalibu, style.backIcon]} />
    })
  }
  render() {
    const { navigation } = this.props;

    return (
      <Container style={style.container}>
        <Content contentContainerStyle={style.content}>
          <KeyboardAvoidingView behavior="padding" enabled>

            <IntroSpace
              title="Passbreaker"
              content="It's not a problem to us to give you a chance to back again."
              image={require('../../assets/light-bulb.png')}
            />

            {/* SignIn From */}
            <View style={{height: 80, display: 'flex', justifyContent: 'space-between'}}>
              <Item style={style.item} rounded>
                <Icon type='FontAwesome' name='user-o' style={style.icon} />
                <Input placeholder='Email address' placeholderTextColor={colors.loblolly} />
              </Item>

              <Button style={{ flex: 1, height: 35 }} rounded info onPress={() => onSignedIn().then(navigation.navigate('SignedIn'))}>
                <Text>RESTORE</Text>
              </Button>

              {/* <View style={style.flexAndCenter}>
                <Text style={style.colorLoblolly}>Don't have an account? {' '}</Text>
                <Text style={[style.colorMalibu, style.textBold]} onPress={() => navigation.navigate('SignIn')}>Sign up.</Text>
              </View> */}
            </View>
          </KeyboardAvoidingView>
        </Content>

        <Footer style={style.footer} >
          <View style={style.flexAndCenter}>
            <Text style={style.colorJumbo}>Powered by {' '}</Text>
            <Text
              style={[style.colorJumbo, style.textBold]}
              onPress={() => alert('xSolve URL')}
            >
              xSolve
            </Text>
          </View>
        </Footer>
      </Container>
    )
  }
};
