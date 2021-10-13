import React, { useState, useContext } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import Axios from 'axios';
import { BASE_URL } from '../services/URLConfig';
import Button from '../components/Button';
import styles from '../styles/login';
import { useFormik } from 'formik';
import { PaymentSchema } from '../services/validation';
import TextInput from '../components/TextInput';
import { UserLoginContext } from '../context/UserLoginContext';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
   
export default function TransferScreen({ navigation }) {
    const [ indicator, setIndicator ] = useState(false);
    const { currentUser, setCurrentUser } = useContext(UserLoginContext);
    const [ message , setMessage] = useState('');

    const { handleChange, handleSubmit, handleBlur, values, errors, touched } = useFormik({
        validationSchema: PaymentSchema,
        initialValues: { amount: 0, phone: 0 },
        onSubmit: (values) =>{
            MAKE_TRANSFER(values);
        }
    });

    const MAKE_TRANSFER = async (data) =>{
        try {
            setIndicator(true);
            const response = await Axios.post(`${BASE_URL}/payments`, {...data, userId: currentUser.userId});
            if(response.status === 201) {
                setMessage('Saving added successfully');
                setTimeout(()=>{
                    setIndicator(false);
                    navigation.navigate("SavingList");
                }, 500);
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

    return (
        <View style={{ ...styles.container, paddingHorizontal: 0, paddingBottom: 10 }}>
        <View style={{
                alignSelf: 'stretch', 
                flex: 5, 
                alignSelf: 'stretch', 
                borderTopLeftRadius: 24, 
                borderTopRightRadius: 24
                }}>
                    <View style={{marginHorizontal: 10, display:'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    {currentUser != null ? <Text style={{color: '#F633E3F7', fontSize: 20}}>{currentUser.name}</Text> : null}
                        <TouchableOpacity onPress={() => {
                            setCurrentUser(null);
                            navigation.navigate('HomeScreen');
                        }}>
                                <Text style={{color: '#F633E3F7', fontSize: 20}}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                    {message != '' ? <Text style={{color: 'green'}}>{message}</Text> : null}
                    <KeyboardAwareScrollView style={{marginHorizontal: 10, borderColor: '#F633E3F7', borderWidth: 1, marginVertical: 36 }}>  
                        <View style={{marginBottom: 7, display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                            <Text style={{marginTop: '11%', fontSize: 24}}>Amount</Text>
                            <View>
                                <TextInput 
                                    placeholder="Amount"
                                    onChangeText={handleChange('amount')}
                                    keyboardType='numeric'
                                    autoCompleteType='tel'
                                    autoCapitalize='none'
                                    keyboardAppearance='dark'
                                    returnKeyType='next'
                                    returnKeyLabel='next'
                                    onBlur={handleBlur('amount')}
                                    labelInput={styles.labelStyles}
                                    textBorderStyle={{ ...styles.inputModify,  width: 200, borderRadius: 0,
                                        paddingHorizontal: 10, backgroundColor: '#EFEFEF70' }}
                                    error={errors.amount}
                                    touched={touched.amount}
                                />
                                {errors.amount && touched.amount ? <Text style={{
                                        color: 'red',
                                        alignSelf: 'center'
                                    }}>{errors.amount}</Text> : null}
                            </View>
                        </View>
                        <View style={{marginBottom: 50, display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                            <Text style={{marginTop: '11%', fontSize: 24}}>Mob No.</Text>           
                            <View>
                                <TextInput 
                                    placeholder="Mobile No."
                                    onChangeText={handleChange('phone')}
                                    autoCompleteType='tel'
                                    autoCapitalize='none'
                                    keyboardAppearance='dark'
                                    returnKeyType='next'
                                    returnKeyLabel='next'
                                    onBlur={handleBlur('phone')}
                                    labelInput={styles.labelStyles}
                                    textBorderStyle={{ ...styles.inputModify,  width: 200, borderRadius: 0,
                                        paddingHorizontal: 10, backgroundColor: '#EFEFEF70' }}
                                    error={errors.phone}
                                    touched={touched.phone}
                                />
                                {errors.phone && touched.phone ? <Text style={{
                                        color: 'red',
                                        alignSelf: 'center'
                                    }}>{errors.phone}</Text> : null}
                            </View>
                        </View>
                {
                    indicator === true ? 
                    <ActivityIndicator size="large" color="#00ff00" />:
                    <View style={{
                        marginHorizontal: '8%',
                        alignSelf: 'stretch',
                        flexDirection: 'row',
                        justifyContent: 'flex-start'
                    }}>
                    <Button 
                        label="PAY" 
                        btnStyle={{ ...styles.optBtn, backgroundColor: '#F633E3F7', borderRadius: 8}}
                        containerStyle={{ height: 40, width: '100%', margin: 0 }}
                        textStyle={{ fontSize: 24, fontWeight: 'bold', color: '#FFFFFF' }} 
                        onPress={() => {
                           confirm('Confirm Pay') ? handleSubmit : null
                        }}
                    />
                    </View>
                }
                </KeyboardAwareScrollView>
        </View>
        </View>
    )
}