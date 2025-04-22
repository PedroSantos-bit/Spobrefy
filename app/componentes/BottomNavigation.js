import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';

const BottomNavigation = () => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.navItem}>
        <Feather name="music" size={24} color="#F7F7F7" />
        <Link href={'/home'}>
          <Text style={styles.navLabel}>home</Text>
        </Link>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Feather name="search" size={24} color="#F7F7F7" />
        <Link href={'/biblioteca'}>
          <Text style={styles.navLabel}>search</Text>
        </Link>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Feather name="heart" size={24} color="#F7F7F7" />
        <Link href={'/favorites'}>
          <Text style={styles.navLabel}>favorite</Text>
        </Link>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Feather name="user" size={24} color="#F7F7F7" />
        <Text style={styles.navLabel}>profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 10,
    backgroundColor: 'black',
    bottom: 0
  },
  navItem: {
    alignItems: 'center',
  },
  navLabel: {
    fontSize: 12,
    color: 'white',
  },
});

export default BottomNavigation;
