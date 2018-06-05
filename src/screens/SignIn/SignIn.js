import React, { Component } from 'react';
import { Image, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Constants } from 'expo';
import { H2, Text, View , Container, Content, Form, Item, Input, Icon, Button, Footer } from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';

import { InputSecretControl, IntroSpace } from '../../components/Common';
import colors from '../../lib/colors';
import { onSignedIn } from '../../auth';
import AnimatedInput from '../../components/AnimatedInput';
import CircleToButtonAnimation from '../../components/CircleToButtonAnimation';

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
})

export default class SignIn extends Component {
  state = {
    passwordControl: true,
  }

  static navigationOptions(navigation) {
    return ({
      headerTransparent: true,
    })
  }
  render() {
    const { navigation } = this.props;

    return (
      <Container style={style.container}>
        <Content contentContainerStyle={style.content}>
          <KeyboardAvoidingView behavior="padding" enabled>

            <IntroSpace
              title="Authenticator"
              content="Protect your account in just a few minutes by reviewing your security settings and activity."
              image={require('../../../assets/art.png')}
            />

            {/* SignIn From */}
            <View style={{height: 190, display: 'flex', justifyContent: 'space-between'}}>
                <AnimatedInput styles={style.item} value={100} delay={300}>
                  <Item style={style.item} rounded>
                    <Icon type='FontAwesome' name='user-o' style={style.icon} />
                    <Input placeholder='Email address' placeholderTextColor={colors.loblolly} />
                  </Item>
                </AnimatedInput>
                <AnimatedInput styles={style.item} value={100} delay={0}>
                  <InputSecretControl
                    passwordControl={this.state.passwordControl}
                    onChangePasswordControl={() =>
                      this.setState(prevState => ({ passwordControl: !prevState.passwordControl })
                    )}
                    style={{ icon: style.icon, item: style.item }}
                  />
                </AnimatedInput>
              <Text style={[style.colorJumbo, style.textRight]} onPress={() => navigation.navigate('Restore')}>Forgot password?</Text>

              <CircleToButtonAnimation value={100}>
                <Button style={{ flex: 1, height: 35 }} rounded info onPress={() => onSignedIn().then(() => navigation.navigate('SignedIn'))}>
                  <Text>LOGIN</Text>
                </Button>
              </CircleToButtonAnimation>
              <View style={style.flexAndCenter}>
                <Text style={style.colorLoblolly}>Don't have an account? {' '}</Text>
                <Text style={[style.colorMalibu, style.textBold]} onPress={() => navigation.navigate('SignUp')}>Sign up.</Text>
              </View>
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
