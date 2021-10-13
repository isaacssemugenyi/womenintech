import React, { useState, useContext, useEffect } from 'react';
import { UserLoginContext } from '../context/UserLoginContext';
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Axios from 'axios';
import { BASE_URL } from '../services/URLConfig';
import Button from '../components/Button';
import SavingListComp from '../components/SavingListComp'
import styles from '../styles/login';

export default function SavingList({ navigation }) {
    const [ indicator, setIndicator ] = useState(false);
    const { currentUser, setCurrentUser } = useContext(UserLoginContext);
    const [ message , setMessage] = useState('');
    const [ savings, setSavings ] = useState([]);
    const [ total, setTotal ] = useState(0);

    useEffect(()=>{
        FETCH_MY_PAYMENTS();
    }, []);

    const FETCH_MY_PAYMENTS = async () =>{
        try {
            setIndicator(true);
            const response = await Axios.get(`${BASE_URL}/payments/user/${currentUser.userId}`);
            if(response.status === 201) {
               const userSavings = (response.data.payment).reverse().map(eachSaving => {
                    return {
                        _id: eachSaving._id,
                        amount: eachSaving.amount,
                        phone: eachSaving.phone,
                        name: eachSaving.userId.fullname,
                        date: new Date(eachSaving.createdAt).toLocaleString()
                    }
                });
                const extractAmount = response.data.payment.map(eachSaving => eachSaving.amount);
                const summation = extractAmount.reduce((previousValue, currentValue) => previousValue + currentValue);
                setIndicator(false);
                setSavings(userSavings);
                setTotal(summation);

            } else {
                setMessage(response.data.message);
                setTimeout(()=>{
                    setMessage('');
                    setIndicator(false);
                }, 2000);
            }
        } catch(err){
            setMessage(err.message);
            setTimeout(()=>{
                setMessage('');
                setIndicator(false);
            }, 2000);
        } 
    }

    const renderItem = ({ item }) => (
        <SavingListComp 
            amount={item.amount}
                name={item.name}
                phone={item.phone}
                date={item.date}
        />
    );

    return (
        <View style={{ ...styles.container, paddingHorizontal: 10, paddingBottom: 10 }}>
            <View style={{marginHorizontal: 10, marginBottom: 10, display:'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                {currentUser != null ? <Text style={{color: '#F633E3F7', fontSize: 20}}>{currentUser.name}</Text> : null}
                <TouchableOpacity onPress={() => {
                    setCurrentUser(null);
                    navigation.navigate('HomeScreen');
                }}>
                        <Text style={{color: '#F633E3F7', fontSize: 20}}>Logout</Text>
                </TouchableOpacity>
            </View>
            {message != '' ? <Text style={{color: 'green'}}>{message}</Text> : null}
            {
                indicator == true ? <ActivityIndicator size="large" color="#00ff00" />:
                <FlatList
                    data={savings}
                    renderItem={renderItem}
                    keyExtractor={item => item._id}
                />
            }
            <View style={{position: 'absolute', bottom: '10%', left: 0}}>
                <Button 
                    label="Deposit"
                    btnStyle={{ ...styles.optBtn, backgroundColor: '#F633E3F7', borderRadius: 0}}
                    containerStyle={{ height: 40, width: '100%'}}
                    textStyle={{ fontSize: 24, fontWeight: '300', color: '#FFFFFF' }} 
                    onPress={() => navigation.navigate('TransferScreen')}
                />
                <Button 
                    label="Statement"
                    btnStyle={{ ...styles.optBtn, backgroundColor: '#F633E3F7', borderRadius: 0}}
                    containerStyle={{ height: 40, width: '100%'}}
                    textStyle={{ fontSize: 24, fontWeight: '300', color: '#FFFFFF' }} 
                    onPress={() => Alert.alert('Still under development')}
                />
                 <Button 
                    label="Profile"
                    btnStyle={{ ...styles.optBtn, backgroundColor: '#F633E3F7', borderRadius: 0}}
                    containerStyle={{ height: 40, width: '100%'}}
                    textStyle={{ fontSize: 24, fontWeight: '300', color: '#FFFFFF' }} 
                    onPress={() => Alert.alert('Still under development')}
                />
                 <Button 
                    label="Invite Friends"
                    btnStyle={{ ...styles.optBtn, backgroundColor: '#F633E3F7', borderRadius: 0}}
                    containerStyle={{ height: 40, width: '100%'}}
                    textStyle={{ fontSize: 24, fontWeight: '300', color: '#FFFFFF' }} 
                    onPress={() => Alert.alert('Still under development')}
                />
            </View>
            <Text style={{position: 'absolute', bottom: 10, right: 10, fontSize: 28, fontWeight: 'bold', color: '#F633E3F7'}}>Total: {total}</Text>
        </View>
    )
}

SavingList.navigationOptions = ({ navigation }) => {
    return { 
      headerLeft: () => (
        <View style={{flex: 1, flexDirection: 'row', paddingTop: 16, marginLeft: 8 }}>
          <TouchableOpacity 
            style={{marginRight: 14}}
            onPress={()=> navigation.navigate('HomeScreen') }
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        </View>
      )
    }
}