import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SalonDetailsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.back}>‹</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Glamour Haven</Text>
      <Text style={styles.subtitle}>Shaving, Massage</Text>
      <Image
        source={{ uri: 'https://via.placeholder.com/200' }}
        style={styles.image}
      />
      <Text style={styles.info}>Haircuts, Preston Rd. Ingleswood, Maine 98380</Text>
      <Text style={styles.info}>⏰ 15 min - 1.5km - Mon | 11 am - 11 pm</Text>
      <View style={styles.icons}>
        <Text>🌐</Text>
        <Text>💬</Text>
        <Text>📞</Text>
        <Text>📍</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Book Appointment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  back: { fontSize: 24, marginBottom: 10 },
  title: { fontSize: 24, marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 20 },
  image: { width: 200, height: 200, marginBottom: 20 },
  info: { fontSize: 14, color: '#666', marginBottom: 10 },
  icons: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  button: { backgroundColor: '#ff0000', paddingVertical: 15, paddingHorizontal: 30, borderRadius: 25 },
  buttonText: { color: '#fff', fontSize: 16 },
});

export default SalonDetailsScreen;