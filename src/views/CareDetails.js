import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import styles from '../styles/login';

export default function CareDetails({ navigation}) {
    return (
        <View style={{ ...styles.container, padding: 10 }}>
             <View style={{...Styles.container}}>
                <Text style={Styles.header}>Physical Self-Care Examples:</Text>

                <Text style={Styles.bullet}>Eat a healthy meal.</Text>
                <Text style={Styles.bullet}>Engage in exercise.</Text>
                <Text style={Styles.bullet}>Go for a walk.</Text>
                <Text style={Styles.bullet}>Drink water.</Text>
                <Text style={Styles.bullet}>Practice good sleep hygiene</Text>
                <Text style={Styles.bullet}>Have a cup of tea.</Text>
                <Text style={Styles.bullet}>Sit in the sunlight.</Text>
                <Text style={Styles.bullet}>Take a shower or bath.</Text>

                <Text style={Styles.header}>Categories of Self Care</Text>
                <Text style={Styles.bullet}>Emotional</Text>
                <Text style={Styles.bullet}>Physical</Text>
                <Text style={Styles.bullet}>Psychological</Text>
                <Text style={Styles.bullet}>spiritual health</Text>

                <Text style={Styles.header}>Steps to Achieving Total Self-Love</Text>

                <Text style={Styles.bullet}>Stop comparing yourself to others. ...</Text>
                <Text style={Styles.bullet}>Don't worry about others' opinions. ...</Text>
                <Text style={Styles.bullet}>Allow yourself to make mistakes. ...</Text>
                <Text style={Styles.bullet}>Remember your value doesn't lie</Text>
                <Text style={Styles.bullet}>Don't be afraid to let go of toxic people. ...</Text>
                <Text style={Styles.bullet}>Process your fears. ...</Text>
                <Text style={Styles.bullet}>Trust yourself to make good decisions</Text>
             </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        borderColor: '#F633E3F7',
        borderWidth: 2,
        marginBottom: 12,
        paddingHorizontal: 10,
        paddingBottom: 15,
        borderRadius: 8,
        minHeight: '30%'
    },
    header: {
        fontWeight: 'bold', 
        fontSize: 20,
        marginTop: 10,
        marginBottom: 5
    },
    bullet: {fontSize: 18}
})

