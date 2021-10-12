import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import Button from '../components/Button';
import styles from '../styles/login';

export default function HomeScreen({ navigation}) {
    return (
        <View style={{ ...styles.container, paddingHorizontal: 10, paddingBottom: 10 }}>
            <View style={{flex: 2, paddingTop: '3%'}}>
                <Text style={{fontSize: 24, fontStyle: 'italic', textAlign: 'center'}}>A woman's Health, Our Priorty</Text>
                <Text style={{fontSize: 16, textAlign: 'center'}}>We offer Health Information access and Health savings</Text>
            </View>
            <View style={{flex: 5}}>
                <Image 
                    source={require('../../assets/pregnant_mum.jpg')}
                    style={{
                    width: '100%', 
                    height: '100%',
                    borderRadius: 8, 
                    borderWidth: .5
                    }}
                    resizeMode="contain" 
                />
            </View>
            <View style={{
                flex: 1, 
                display: 'flex', 
                flexDirection: 'row', 
                justifyContent: 'space-between', 
                paddingVertical: '3%'
            }}>
                <Button
                    textStyle={{fontSize: 24, paddingHorizontal: 5}}
                    btnStyle={{backgroundColor: '#F633E3F7'}}
                    onPress={()=> navigation.navigate("CareSection")}
                    label="Health Care"
                />
                <Button 
                    textStyle={{fontSize: 24, paddingHorizontal: 5}}
                    btnStyle={{backgroundColor: '#F633E3F7'}}
                    onPress={()=> navigation.navigate("AuthScreen")}
                    label="Health Savings"
                />
            </View>
            <View style={{flex: 5}}>
                 <Image 
                    source={require('../../assets/black_lady.jpg')}
                    style={{
                    width: '100%', 
                    height: '100%', 
                    borderWidth: .5
                    }}
                    resizeMode="contain" 
                />
            </View>
        </View>
    )
}

