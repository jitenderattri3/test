import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainNavigation} from './src/components/navigation';

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </>
  );
};

export default App;
