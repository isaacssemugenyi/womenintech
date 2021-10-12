import React, { useState } from 'react';
import { View, Text, ActivityIndicator, Alert } from 'react-native';
import { useFormik } from 'formik';
import { LoginSchema } from '../services/validation';
import { API } from '../services/handler';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import styles from '../styles/login';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function Login({ navigation}) {
    const [ indicator, setIndicator ] = useState(false);
    const { handleChange, handleSubmit, handleBlur, values, errors, touched } = useFormik({
        validationSchema: LoginSchema,
        initialValues: { email: '', password: '' },
        onSubmit: (values) =>{
        LOGIN_USER(values);
        }
    });

    const LOGIN_USER = async (data) =>{
        Alert.alert('Still under development, Please try later')
        // try {
        //     setIndicator(true);
        //     const NEW_USER = await API.post('user/login', data);
        //     if(NEW_USER.status === 201) {
        //         setIndicator(false);
        //         setTimeout(()=>{
        //             navigation.navigate('Login');
        //         }, 500);
        //     }
        // } catch(err){
        //     setIndicator(false);
        //     console.log('signup err', err);
        // } 
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