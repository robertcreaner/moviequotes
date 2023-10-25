import React, {useMemo, useState} from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): JSX.Element {
  const [sessionStatus, setSessionStatus] = useState('authenticated');

  const appContent = useMemo(() => {
    // Todo - handle authentication
    // if (sessionStatus === 'unauthenticated') {
    //   return <LoginScreen />;
    // }

    return <MainNavigator />;
  }, [sessionStatus]);

  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{flex: 1}}>
        {appContent}
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

export default App;
