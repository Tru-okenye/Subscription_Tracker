import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  console.log('App is rendering');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        I'm about to build something cool!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 30,
    color: 'black',
  },
});

export default App;
