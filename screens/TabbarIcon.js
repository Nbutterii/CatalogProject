import React, {Component} from "react";
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class TabbarIcon extends Component{
    render() {
        var color = this.props.focused ? '#891C1C' : '#d5d5d6';
        return(
            <View>
                <Icon style={{color: color}} name={this.props.iconName} size={25}  />
            </View>
        )
    }
}