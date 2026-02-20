import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Counter({ value }) {
  return <Text style={styles.text}>Count: {value}</Text>;
}

const styles = StyleSheet.create({
  text: { fontSize: 20, marginBottom: 20 }
});