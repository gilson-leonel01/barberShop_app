import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TopRatedSalonsScreen = () => {
  const navigation = useNavigation();
  const salons = [
    { id: '1', name: 'Glamour Haven' },
    { id: '2', name: 'Glamour Haven' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('SalonDetails')}>
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Rated Salons</Text>
      <FlatList
        data={salons}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>See All</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  item: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  name: { fontSize: 16 },
  button: { backgroundColor: '#ff0000', paddingVertical: 15, paddingHorizontal: 30, borderRadius: 25, alignSelf: 'center' },
  buttonText: { color: '#fff', fontSize: 16 },
});

export default TopRatedSalonsScreen;