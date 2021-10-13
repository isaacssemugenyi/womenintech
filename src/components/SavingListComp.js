import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function SavingListComp({name, amount, date, phone, ...btnProps}) {
    return (
        <View style={{...Styles.container}}>
            <Text style={{fontSize: 24, fontWeight: 'bold', textAlign: 'justify'}}>
                <Text style={{color: '#F633E3F7'}}>Amount</Text> : {amount || 0}</Text>
            <Text style={{fontSize: 18, color: 'black'}}><Text style={{color: '#F633E3F7'}}>From</Text> : {phone || 'No number'}</Text>
            <Text style={{fontSize: 18, color: 'black'}}><Text style={{color: '#F633E3F7'}}>Saved by</Text> : {name || 'No name'}</Text>
            <Text style={{fontSize: 18, color: 'black'}}><Text style={{color: '#F633E3F7'}}>Posted on</Text>: {date || 'No date'}</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        borderColor: '#F633E3F7',
        borderWidth: 1,
        padding: 4,
        marginTop: 8,
        marginBottom: 4,
        paddingHorizontal: 10,
        borderRadius: 8,
        minHeight: '5%'
    }
})