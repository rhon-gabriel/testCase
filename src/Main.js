/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {observer, inject} from 'mobx-react';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  renderSeparator = () => <View style={styles.separator} />;

  render() {
    const {store} = this.props;

    return (
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.viewBox}>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: 'white'}]}
            onPress={() => {
              store.sortLocations();
            }}>
            <Text style={{fontSize: 16}}>Nearby</Text>
          </TouchableOpacity>
          <View style={styles.columnView}>
            <Text style={styles.title}>Karma’s Stockholm office</Text>
            <Text style={styles.subText}>Current Location</Text>
          </View>
        </View>
        <FlatList
          data={store.locations}
          style={styles.container}
          ItemSeparatorComponent={this.renderSeparator}
          renderItem={({item}) => (
            <>
              <View style={styles.viewBox}>
                <View style={styles.columnView}>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.distance}>{item.distance + 'km'}</Text>
                </View>
                <TouchableOpacity
                  id={item.id}
                  style={[
                    styles.button,
                    {backgroundColor: item.following ? '#29ba7f' : '#3f494b'},
                  ]}
                  onPress={() => {
                    store.setFollow(item.id);
                  }}>
                  <Text style={styles.buttonText}>
                    {item.following ? 'Following' : 'Follow'}
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

export default inject('store')(observer(Main));

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#f5eee8',
  },
  container: {
    marginTop: 20,
  },
  viewBox: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
    marginHorizontal: 8,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    maxWidth: 250,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 40,
    borderRadius: 4,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  separator: {
    backgroundColor: '#fdd4ce',
    height: 1,
  },
  columnView: {
    flexDirection: 'column',
  },
  subText: {
    textAlign: 'right',
  },
  distance: {
    color: '#29ba7f',
  },
});
