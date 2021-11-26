import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import RestaurantCard from '../components/RestaurantCard';
import Menu from '../components/Menu';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../AppTabNavigator';
import TopDrawerNavigation from '../components/TopDrawerNavigation';

type Props = NativeStackScreenProps<RootStackParams, 'RestaurantsStack'>;

const RestaurantsScreen = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <TopDrawerNavigation />
      <Text style={styles.screenTitle}>Restaurants Screen</Text>
      <ScrollView>
        <RestaurantCard
          name="Sushi restaurant"
          onPress={name => {
            navigation.navigate('Restaurant', {name});
          }}
        />
        <RestaurantCard
          name="Burger restaurant"
          onPress={name => {
            navigation.navigate('Restaurant', {name});
          }}
        />
        <RestaurantCard
          name="Fine dining restaurant"
          onPress={name => {
            navigation.navigate('Restaurant', {name});
          }}
        />
        <RestaurantCard
          name="Sushi restaurant"
          onPress={name => {
            navigation.navigate('Restaurant', {name});
          }}
        />
        <RestaurantCard
          name="Burger restaurant"
          onPress={name => {
            navigation.navigate('Restaurant', {name});
          }}
        />
        <RestaurantCard
          name="Fine dining restaurant"
          onPress={name => {
            navigation.navigate('Restaurant', {name});
          }}
        />
      </ScrollView>
      <Menu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 24,
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: 'bold',
  },
});

export default RestaurantsScreen;
