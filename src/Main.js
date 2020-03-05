import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';

export default class Main extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Text>here is the list</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#f7c7c7',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
