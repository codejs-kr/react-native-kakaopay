import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import { HapticTab } from '@/src/shared/components/HapticTab';

import TabBarBackground from '@/src/shared/components/ui/TabBarBackground';
import { Colors } from '@/src/shared/constants/Colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors['light'].tint,
        tabBarInactiveTintColor: '#999999',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '홈',
          tabBarIcon: ({ color }) => <MaterialIcons name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="benefits"
        options={{
          title: '혜택',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="gift" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="payment"
        options={{
          title: '결제',
          tabBarIcon: ({ color }) => <MaterialIcons name="qr-code-scanner" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="assets"
        options={{
          title: '자산',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="wallet" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="securities"
        options={{
          title: '증권',
          tabBarIcon: ({ color }) => <MaterialIcons name="trending-up" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
