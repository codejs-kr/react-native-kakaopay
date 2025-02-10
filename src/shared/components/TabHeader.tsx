import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';

import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';

const TabHeader = () => {
  return (
    <View style={styles.header}>
      <Image source={require('@/src/shared/assets/images/kakaopay-logo.png')} style={styles.logo} />
      <View style={styles.headerRight}>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialIcons name="search" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialIcons name="notifications" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialIcons name="menu" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  logo: {
    width: 74,
    height: 30,
    resizeMode: 'contain',
  },
  headerRight: {
    flexDirection: 'row',
    gap: 16,
  },
  iconButton: {
    padding: 4,
  },
  content: {
    flex: 1,
  },
});

export default TabHeader;
