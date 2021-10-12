import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Styles from '../styles/Button';

export default function Button({onPress, label, containerStyle, btnStyle, textStyle, ...btnProps}) {
    return (
        <View
            style={{...Styles.container, ...containerStyle}}
        >
            <TouchableOpacity
                style={{...Styles.button, ...btnStyle}}
                onPress={onPress}
                {...btnProps}    
            >
                <Text
                    style={{...Styles.btnText, ...textStyle}}
                >{ label || 'button' }</Text>
            </TouchableOpacity>
        </View>
    )
}