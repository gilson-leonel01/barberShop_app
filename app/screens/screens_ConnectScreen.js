import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ConnectScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        style={styles.image}
      />
      <Text style={styles.title}>Connect and Converse with Salons</Text>
      <Text style={styles.subtitle}>Real-time consultations.</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BookAppointments')}>
        <Text style={styles.buttonText}>›</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.skipButton}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' },
  image: { width: 150, height: 150, marginBottom: 20 },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#666', textAlign: 'center', marginBottom: 20 },
  button: { position: 'absolute', bottom: 20, backgroundColor: '#ff0000', borderRadius: 25, width: 50, height: 50, justifyContent: 'center', alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 24 },
  skipButton: { position: 'absolute', top: 20, right: 20 },
  skipText: { color: '#ff0000', fontSize: 16 },
});

export default ConnectScreen;