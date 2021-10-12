import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from './Button'

export default function CareSectionCard({onPress, label, information, detail, ...btnProps}) {
    return (
        <View style={{...Styles.container}}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
                <Button
                    textStyle={{fontSize: 20, paddingHorizontal: 5}}
                    btnStyle={{backgroundColor: '#F633E3F7'}}
                    label={label} 
                    onPress={onPress}
                />
            </View>
            <Text style={{fontSize: 18, textAlign: 'justify', lineHeight: 26}}>{information || 'Not info'}</Text>
            <Text style={{fontSize: 18, color: '#477EE8'}} onPress={onPress}>{detail || 'No details'}</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        borderColor: '#F633E3F7',
        borderWidth: 2,
        paddingTop: 4,
        marginBottom: 12,
        paddingHorizontal: 10,
        borderRadius: 8,
        minHeight: '30%'
    }
})