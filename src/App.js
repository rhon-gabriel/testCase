import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'mobx-react';

import Home from './Home';
import Main from './Main';
import store from './store/store';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#fdd4ce',
              },
              headerTintColor: '#3f494b',
              headerTitleAlign: 'left',
            }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Locations" component={Main} />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    );
  }
}
