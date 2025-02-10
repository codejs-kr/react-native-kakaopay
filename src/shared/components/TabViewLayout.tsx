import React, { ReactNode } from 'react';
import { SafeAreaView, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

interface Props {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const TabViewLayout = ({ children, style }: Props) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <View style={styles.inner}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F7',
  },
  inner: {
    flex: 1,
    paddingBottom: 50,
  },
});

export default TabViewLayout;
