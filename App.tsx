/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import ExploreScreen from './screens/Explore';
import ProfileScreen from './screens/Profile';
import RestaurantsScreen from './screens/Restaurants';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RestaurantScreen from './screens/Restaurant';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export type RootStackParams = {
  ExploreStack;
  RestaurantsStack: RestaurantsStackParams | undefined;
  Profile;
  Restaurant: {
    name: string;
  };
};

const RootStack = createBottomTabNavigator<RootStackParams>();

export type RestaurantsStackParams = {
  Restaurants;
  Restaurant: {
    name: string;
  };
};

const RestaurantsStack = createNativeStackNavigator<RestaurantsStackParams>();

const RestaurantScreenStack = () => {
  return (
    <RestaurantsStack.Navigator initialRouteName="Restaurants">
      <RestaurantsStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantsStack.Screen name="Restaurant" component={RestaurantScreen} />
    </RestaurantsStack.Navigator>
  );
};

export type ExploreStackParams = {
  Explore;
  Restaurant: {
    name: string;
  };
};

const ExploreStack = createNativeStackNavigator<ExploreStackParams>();

const ExploreScreenStack = () => {
  return (
    <ExploreStack.Navigator initialRouteName="Explore">
      <ExploreStack.Screen name="Explore" component={ExploreScreen} />
      <ExploreStack.Screen name="Restaurant" component={RestaurantScreen} />
    </ExploreStack.Navigator>
  );
};

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Explore">
        <RootStack.Screen name="ExploreStack" component={ExploreScreenStack} />
        <RootStack.Screen
          name="RestaurantsStack"
          component={RestaurantScreenStack}
        />
        <RootStack.Screen name="Profile" component={ProfileScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
