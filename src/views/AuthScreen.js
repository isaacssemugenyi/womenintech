import React, {useState } from 'react';
import { View, Text, useWindowDimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabView, TabBar } from 'react-native-tab-view';
import Login from './Login';
import Signup from './Signup';

export default function AuthScreen({ navigation }){
    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
      { key: 'first', title: 'SignIn' },
      { key: 'second', title: 'SignUp' }
    ]);

    const renderScene = ({ route }) => {
      switch (route.key) {
        case 'first':
          return <Login navigation={navigation} />;
        case 'second':
          return <Signup navigation={navigation} />;
        default:
          return null;
      }
    };
  
    const renderTabBar = props => (
        <TabBar
          {...props}
          renderLabel={({ route, focused }) => (
            <Text style={{fontSize: 20, color: 'white'}}>
              {route.title}
            </Text>
          )}
          style={{backgroundColor: '#F633E3F7'}}
        />
    );
  

    return (
        <View style={{display: 'flex', flex: 1}}>
            <View style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
                <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>Welcome Sign In to Continue</Text>
            </View>
            <View style={{flex: 9, marginHorizontal: 10, borderColor: '#F633E3F7', borderWidth: 1, marginBottom: 20 }}>
                <TabView
                    navigationState={{ index, routes }}
                    renderTabBar={renderTabBar}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                />
            </View>
        </View>
    )
}

AuthScreen.navigationOptions = ({ navigation }) => {
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