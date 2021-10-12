import 'react-native-gesture-handler';
import React, { useState, useMemo } from 'react';
import AppStack from './src/routes/MainStack';
import { StatusBar } from 'expo-status-bar';
import { UserLoginContext } from './src/context/UserLoginContext';

export default function App() {
  const [ currentUser, setCurrentUser ] = useState({});

  const loggedInUser = useMemo(() => ({ currentUser, setCurrentUser }), [currentUser, setCurrentUser]);

  return (
    // Context to parse loggedin user
    <UserLoginContext.Provider value={loggedInUser}>
        <AppStack />
        <StatusBar style="light" />
    </UserLoginContext.Provider> 
  );
}
