import React, { useEffect, useState, useContext } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useFormik } from 'formik';
import { LoginSchema } from '../services/validation';
import { BASE_URL } from '../services/URLConfig';
import Axios from 'axios';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import styles from '../styles/login';
import { UserLoginContext } from '../context/UserLoginContext';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function Login({ navigation}) {
    const { currentUser, setCurrentUser } = useContext(UserLoginContext);
    const [ indicator, setIndicator ] = useState(false);
    const [ message, setMessage ] = useState('');
    const { handleChange, handleSubmit, handleBlur, values, errors, touched } = useFormik({
        validationSchema: LoginSchema,
        initialValues: { email: '', password: '' },
        onSubmit: (values) =>{
        LOGIN_USER(values);
        }
    });

    useEffect(()=>{
        setCurrentUser(null);
    }, []);

    const LOGIN_USER = async (data) =>{
        try {
            setIndicator(true);
            const response = await Axios.post(`${BASE_URL}/users/login`, data);
            if(response.status == 200) {
                if(response.data.status == 1){
                    setMessage("Login was successfull");
                    setCurrentUser(response.data)
                    setTimeout(()=>{
                        setIndicator(false);
                        setMessage("");
                        navigation.replace('SavingList');
                    }, 500);
                } else {
                    setMessage(response.data.message);
                    setTimeout(()=>{
                        setIndicator(false);
                        setMessage("");
                    }, 1000);
                }
            } else {
                setMessage("An Unknown error occured");
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
        <View style={{ ...styles.container, paddingHorizontal: 0 }}>
        <View style={{
                alignSelf: 'stretch', 
                flex: 5, 
                alignSelf: 'stretch', 
                borderTopLeftRadius: 24, 
                borderTopRightRadius: 24
                }}>
                    {message != '' ? <Text style={{color: 'green'}}>{message}</Text> : null}
                    <KeyboardAwareScrollView>               
                <View style={{marginBottom: 7}}>
                    <TextInput 
                        placeholder="Email Address"
                        onChangeText={handleChange('email')}
                        keyboardType='email-address'
                        autoCompleteType='email'
                        autoCapitalize='none'
                        keyboardAppearance='dark'
                        returnKeyType='next'
                        returnKeyLabel='next'
                        onBlur={handleBlur('email')}
                        labelInput={styles.labelStyles}
                        textBorderStyle={{ ...styles.inputModify, backgroundColor: '#EFEFEF70' }}
                        error={errors.email}
                        touched={touched.email}
                    />
                    {errors.email && touched.email ? <Text style={{
                            color: 'red',
                            alignSelf: 'center'
                        }}>{errors.email}</Text> : null}
                </View>
                <View style={{marginBottom: 7}}>
                    <TextInput 
                        placeholder="Password"
                        onChangeText={handleChange('password')}
                        autoCompleteType='password'
                        autoCapitalize='none'
                        secureTextEntry={true}
                        keyboardAppearance='dark'
                        returnKeyType='next'
                        returnKeyLabel='next'
                        onBlur={handleBlur('password')}
                        labelInput={styles.labelStyles}
                        textBorderStyle={{ ...styles.inputModify, backgroundColor: '#EFEFEF70' }}
                        error={errors.password}
                        touched={touched.password}
                    />
                    {errors.password && touched.password ? <Text style={{
                            color: 'red',
                            alignSelf: 'center'
                        }}>{errors.password}</Text> : null}
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
                        label="Login" 
                        btnStyle={{ ...styles.optBtn, backgroundColor: '#F633E3F7', borderRadius: 8}}
                        containerStyle={{ height: 40, width: '100%', margin: 0 }}
                        textStyle={{ fontSize: 24, fontWeight: 'bold', color: '#FFFFFF' }} 
                        onPress={handleSubmit}
                    />
                    </View>
                }
                </KeyboardAwareScrollView>
        </View>
        </View>
    )
}