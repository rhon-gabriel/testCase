import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';

export default class Main extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              //this.props.navigation.navigate('Home');
            }}>
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.subtitle}>Rhoneil Gabriel</Text>
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
  footer: {
    marginBottom: 50,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: 50,
    alignSelf: 'center',
    elevation: 3,
  },
  buttonText: {
    textDecorationLine: 'underline',
    fontSize: 18,
    fontFamily: 'Helvetica',
  },
});
