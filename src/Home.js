import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {inject, observer} from 'mobx-react';

class Home extends Component {
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
            onPress={() => navigation.navigate('Locations')}>
            <Text style={styles.buttonText}>Check stores</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default inject('store')(observer(Home));

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
    fontSize: 30,
    fontFamily: 'Helvetica',
    marginTop: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  subtitle: {
    justifyContent: 'center',
    fontSize: 20,
    fontFamily: 'Helvetica',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: 300,
    borderRadius: 38,
    borderColor: '#ffffff',
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 24,
    fontFamily: 'Helvetica',
    color: '#fe72a1',
    fontWeight: 'bold',
  },
});
