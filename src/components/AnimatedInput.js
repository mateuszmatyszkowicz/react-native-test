import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';

class AnimatedInput extends Component {
    state = {
        _width: new Animated.Value(0),
    }

    componentDidMount() {
        this.animateTo(this.props.value);
    }

    componentWillReceiveProps(nextProps){
        this.animateTo(nextProps.value)
    }

    animateTo = value =>   Animated.timing( this.state._width, {
        toValue: value,
        duration: 1300 + this.props.delay,
        easing: Easing.bounce
    }).start();

    render() {
        const style = {
            height: 35,
            width: this.state._width.interpolate({
                inputRange: [0, 100],
                outputRange: ['0%', '100%'],
            }),
        }
        return (
            <Animated.View style={style}>
                {this.props.children}
            </Animated.View>
        )
    }
}

export default AnimatedInput;
