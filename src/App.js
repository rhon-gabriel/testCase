// import 'react-native-gesture-handler';
import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

import Home from './Home';
import Main from './Main';

// const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <Home />
      // <NavigationContainer>
      //   <Stack.Navigator>
      //     <Stack.Screen name="Home" component={Home} />
      //     <Stack.Screen name="Main" component={Main} />
      //   </Stack.Navigator>
      // </NavigationContainer>
    );
  }
}
