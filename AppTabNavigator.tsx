import React from 'react';
import 'react-native-gesture-handler';
import ExploreScreen from './screens/Explore';
import ProfileScreen from './screens/Profile';
import RestaurantsScreen from './screens/Restaurants';
import {NavigationContainer, NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RestaurantScreen from './screens/Restaurant';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileIcon from './icons/ProfileIcon';
import ExploreIcon from './icons/ExploreIcon';
import RestaurantIcon from './icons/RestaurantIcon';

export type RootStackParams = {
  ExploreStack: undefined;
  RestaurantsStack: NavigatorScreenParams<RestaurantsStackParams>;
  Profile: undefined;
  Restaurant: {
    name: string;
  };
};

const RootStack = createBottomTabNavigator<RootStackParams>();

export type RestaurantsStackParams = {
  Restaurants: undefined;
  Restaurant: {
    name: string;
  };
};

const RestaurantsStack = createNativeStackNavigator<RestaurantsStackParams>();

const RestaurantScreenStack = () => {
  return (
    <RestaurantsStack.Navigator initialRouteName="Restaurants" screenOptions={{
      headerShown: false,
    }}>
      <RestaurantsStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantsStack.Screen name="Restaurant" component={RestaurantScreen} />
    </RestaurantsStack.Navigator>
  );
};

export type ExploreStackParams = {
  Explore: undefined;
  Restaurant: {
    name: string;
  };
};

const ExploreStack = createNativeStackNavigator<ExploreStackParams>();

const ExploreScreenStack = () => {
  return (
    <ExploreStack.Navigator initialRouteName="Explore" screenOptions={{
      headerShown: false,
    }}>
      <ExploreStack.Screen name="Explore" component={ExploreScreen} />
      <ExploreStack.Screen name="Restaurant" component={RestaurantScreen} />
    </ExploreStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="ExploreStack" screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#e67a15',
        tabBarInactiveTintColor: 'gray',
      })}>
        <RootStack.Screen name="ExploreStack" component={ExploreScreenStack} options={{
          tabBarIcon: ({ color, size }) => <ExploreIcon color={color} size={size} />,
          tabBarLabel: "Explore"
        }} />
        <RootStack.Screen
          name="RestaurantsStack"
          component={RestaurantScreenStack}
          options={{
            tabBarIcon: ({ color, size }) => <RestaurantIcon color={color} size={size} />,
            tabBarLabel: "Restaurants"
          }}
        />
        <RootStack.Screen name="Profile" component={ProfileScreen} options={{
          tabBarIcon: ({ color, size }) => <ProfileIcon color={color} size={size} />,
          tabBarLabel: "Profile"
        }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
