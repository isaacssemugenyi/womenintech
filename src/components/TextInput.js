import React from 'react';
import { View, Text, TextInput as RNTextInput } from 'react-native';
import Styles from '../styles/TextInput';

function TextInput({label, textBorderStyle, inputStyle, labelInput, mainViewOverrideStyle , ...otherProps }) {
    return (
      <View style={{...Styles.mainView, ...mainViewOverrideStyle}}>
        <Text style={{...Styles.label, ...labelInput}}>{label}</Text>
        <View
          style={{...Styles.TextView, ...textBorderStyle}}
        >
          <View style={{ flex: 1 }}>
            <RNTextInput
              underlineColorAndroid='transparent'
              placeholderTextColor='rgba(34, 62, 75, 0.7)'
              style={{...inputStyle}}
              {...otherProps}
            />
          </View>
        </View>
      </View>
    )
}

export default TextInput;