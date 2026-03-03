import React from 'react';
import { View, Text } from 'react-native';

const App = () => {
  console.log('App is rendering');
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <Text style={{ fontSize: 30, color: 'black' }}>
        I'm about to build something cool!
      </Text>
    </View>
  );
};

export default App;