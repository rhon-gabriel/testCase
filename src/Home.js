import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';

export default class Home extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Image style={styles.logo} source={{uri: 'https://bit.ly/3avPCca'}} />
          <View>
            <Text style={styles.title}>Test Case</Text>
            <Text style={styles.subtitle}>Rhoneil Gabriel</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Main')}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
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
  logo: {
    height: 200,
    width: 200,
  },
  title: {
    justifyContent: 'center',
    fontSize: 24,
    fontFamily: 'Helvetica',
    marginTop: 20,
  },
  subtitle: {
    justifyContent: 'center',
    fontSize: 16,
    fontFamily: 'Helvetica',
  },
  footer: {
    flexDirection: 'row',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: 80,
  },
  buttonText: {
    textDecorationLine: 'underline',
    fontSize: 18,
    fontFamily: 'Helvetica',
  },
});
