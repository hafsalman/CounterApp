import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Counter from './counter';

export default function App() {
  const [count, setCount] = useState(0); // STATE

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter App</Text>

      {/* Passing state as props */}
      <Counter value={count} />

      <Button title="Increase" onPress={() => setCount(count + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 }
});