import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Dimensions,
} from 'react-native';
import {observer, inject} from 'mobx-react';
let {height} = Dimensions.get('window');

class Main extends Component {
  constructor(props) {
    super(props);
    this.props.store.getDistances();
  }

  renderSeparator = () => <View style={styles.separator} />;

  render() {
    const {store} = this.props;

    return (
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.positionContainer}>
          <Text style={styles.positionTitle}>{store.position.name}</Text>
          <Text style={styles.subtitle}>{store.position.status}</Text>
        </View>

        <FlatList
          data={store.locations}
          style={styles.container}
          ItemSeparatorComponent={this.renderSeparator}
          initialNumToRender={20}
          renderItem={({item}) => (
            <>
              <View style={styles.viewBox}>
                <View style={styles.columnView}>
                  <Text style={styles.title}>{item.name.toString()}</Text>
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
    height: height,
  },
  container: {
    marginTop: 20,
  },
  positionContainer: {
    padding: 10,
    flexDirection: 'column',
    backgroundColor: '#fba8b2',
    elevation: 6,
    borderRadius: 4,
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
    maxWidth: 200,
  },
  positionTitle: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'right',
  },
  subtitle: {
    color: '#ffffff',
    textAlign: 'right',
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
    padding: 10,
    flexDirection: 'column',
    marginHorizontal: 8,
  },
  distance: {
    color: '#63c6cb',
  },
});
