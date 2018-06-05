import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';

class CircleToButtonAnimation extends Component {
    state = {
        _width: new Animated.Value(0),
        finished: false,
    }

    componentDidMount() {
        this.animateTo(this.props.value);
    }

    componentWillReceiveProps(nextProps){
        this.animateTo(nextProps.value)
    }

    animateTo = value => Animated.timing( this.state._width, {
        toValue: value,
        duration: 1300,
        easing: Easing.bounce
    }).start(animation => {
        if (animation.finished) {
            this.setState({ finished: true });
        }
    });

    render() {
        const style = {
            height: 35,
            width: this.state._width.interpolate({
                inputRange: [0, 100],
                outputRange: ['0%', '100%'],
            }),
        }
        return (
            this.state.finished ?
                this.props.children :
                <Animated.View style={style}>
                    {this.props.children}
                </Animated.View>
        )
    }
}

export default CircleToButtonAnimation;
