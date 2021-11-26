import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RestaurantCard from '../components/RestaurantCard';
import Menu from '../components/Menu';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../AppTabNavigator';
import TopNavigation from '../components/TopBackNavigation';
import TopDrawerNavigation from '../components/TopDrawerNavigation';

type Props = NativeStackScreenProps<RootStackParams, 'ExploreStack'>;

const ExploreScreen = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <TopDrawerNavigation />
      <Text style={styles.screenTitle}>Restaurants</Text>
      <View>
        <Text style={styles.sectionTitle}>Restaurants Near You</Text>
        <RestaurantCard
          name="Sushi restaurant"
          onPress={() => {
            // navigation.push('Restaurant', {name: 'Sushi restaurant'});
            navigation.navigate('RestaurantsStack', {
              screen: 'Restaurant',
              params: {name: 'Hello from explore'},
            });
          }}
        />
        <RestaurantCard
          name="Burger restaurant"
          onPress={() => {
            navigation.push('Restaurant', {name: 'Burger restaurant'});
          }}
        />
        <RestaurantCard
          name="Fine dining restaurant"
          onPress={() => {
            navigation.push('Restaurant', {name: 'Fine dining restaurant'});
          }}
        />

        <Text style={styles.sectionTitle}>Most Popular Restaurants</Text>
        <RestaurantCard
          name="Sushi restaurant"
          onPress={() => {
            navigation.push('Restaurant', {name: 'Sushi restaurant'});
          }}
        />
        <RestaurantCard
          name="Burger restaurant"
          onPress={() => {
            navigation.push('Restaurant', {name: 'Burger restaurant'});
          }}
        />
      </View>
      <Menu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 24,
  },
  restaurantCard: {
    backgroundColor: '#efefef',
  },
  sectionTitle: {
    fontSize: 16,
    marginTop: 16,
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: 'bold',
  },
});

export default ExploreScreen;
