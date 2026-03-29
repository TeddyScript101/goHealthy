import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { HealthContext } from '../context/HealthContext';

const dummyPath = [
  { latitude: 37.78825, longitude: -122.4324 },
  { latitude: 37.78925, longitude: -122.4344 },
  { latitude: 37.79025, longitude: -122.4364 },
];

const StepsMapScreen = () => {
  const { metrics, updateMetric } = useContext(HealthContext);

  const simulateSteps = () => {
    updateMetric('steps', metrics.steps + 500);
  };

  // Provide default export without default styling out of the box so map covers.
  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Polyline coordinates={dummyPath} strokeColor="#32CD32" strokeWidth={6} />
        <Marker coordinate={dummyPath[dummyPath.length - 1]} title="Current Location" />
      </MapView>

      <View style={styles.overlay}>
        <Text style={styles.stepCount}>{metrics.steps} <Text style={styles.stepText}>Steps</Text></Text>
        <TouchableOpacity style={styles.simBtn} onPress={simulateSteps}>
          <Text style={styles.simBtnText}>Simulate Walk (+500)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  overlay: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 5,
    width: '80%'
  },
  stepCount: { fontSize: 32, fontWeight: 'bold', color: '#1A202C', marginBottom: 10 },
  stepText: { fontSize: 18, color: '#666' },
  simBtn: { backgroundColor: '#32CD32', padding: 15, borderRadius: 12, width: '100%', alignItems: 'center' },
  simBtnText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});

export default StepsMapScreen;
