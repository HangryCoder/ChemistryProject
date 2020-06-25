import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TestScreen from './src/screens/TestScreen';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './src/reducers';

export default function App() {
  return (
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={TestScreen}
            options={{
              headerShown: false
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const Stack = createStackNavigator();

