import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { HealthContext } from '../context/HealthContext';

const WaterLogScreen = ({ navigation }) => {
  const { metrics, updateMetric } = useContext(HealthContext);

  const addWater = (amount) => {
    updateMetric('waterIntake', metrics.waterIntake + amount);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Daily Hydration</Text>
      <Text style={styles.value}>{metrics.waterIntake} <Text style={styles.unit}>ml</Text></Text>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.addBtn} onPress={() => addWater(250)}>
          <Text style={styles.addBtnText}>+ 250 ml</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addBtn} onPress={() => addWater(500)}>
          <Text style={styles.addBtnText}>+ 500 ml</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.resetBtn} onPress={() => updateMetric('waterIntake', 0)}>
        <Text style={styles.resetBtnText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  header: { fontSize: 24, fontWeight: '600', color: '#666', marginBottom: 20 },
  value: { fontSize: 60, fontWeight: 'bold', color: '#00BFFF', marginBottom: 40 },
  unit: { fontSize: 24, color: '#888' },
  buttons: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginBottom: 40 },
  addBtn: { backgroundColor: '#00BFFF', padding: 15, borderRadius: 30, width: 120, alignItems: 'center' },
  addBtnText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  resetBtn: { padding: 15 },
  resetBtnText: { color: '#FF6347', fontSize: 18 }
});

export default WaterLogScreen;
