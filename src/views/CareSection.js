import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import CareSectionCard from '../components/CareSectionCard'
import styles from '../styles/login';

export default function CareSection({ navigation}) {
    const [ careInfo ] = useState([
        {
            id: '1',
            btnText: 'Self Care',
            information: 'To identify high-risk pregnancies and educate women so that they might experience a healthier delivery and outcome',
            detail: 'For more information click...'
        },
        {
            id: '2',
            btnText: 'Repro Health',
            information: 'To identify high-risk pregnancies and educate women so that they might experience a healthier delivery and outcome',
            detail: 'For more information click...'
        },
        {
            id: '3',
            btnText: 'Antenantal',
            information: 'To identify high-risk pregnancies and educate women so that they might experience a healthier delivery and outcome',
            detail: 'For more information click...'
        }
    ])

    const renderItem = ({ item }) => (
        <CareSectionCard 
                label={item.btnText}
                information={item.information}
                detail={item.detail}
                onPress={()=> navigation.navigate('CareDetails')}
        />
    );

    return (
        <View style={{ ...styles.container, padding: 10 }}>
             <FlatList
                    data={careInfo}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
        </View>
    )
}

