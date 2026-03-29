import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { HealthContext } from '../context/HealthContext';

const intensities = ['none', 'low', 'medium', 'high'];

const ExerciseLogScreen = ({ navigation }) => {
  const { metrics, updateMetric } = useContext(HealthContext);
  const [duration, setDuration] = useState(metrics.exerciseDuration.toString());

  const handleSave = () => {
    updateMetric('exerciseDuration', parseInt(duration) || 0);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Intensity</Text>
      <View style={styles.row}>
        {intensities.map(intensity => (
          <TouchableOpacity
            key={intensity}
            style={[styles.btn, metrics.exerciseIntensity === intensity && styles.btnActive]}
            onPress={() => updateMetric('exerciseIntensity', intensity)}
          >
            <Text style={[styles.btnText, metrics.exerciseIntensity === intensity && styles.btnTextActive]}>
              {intensity.charAt(0).toUpperCase() + intensity.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Duration (minutes)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={duration}
        onChangeText={setDuration}
      />

      <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
        <Text style={styles.saveBtnText}>Save Exercise Data</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  label: { fontSize: 18, fontWeight: '600', marginBottom: 10, marginTop: 20 },
  row: { flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' },
  btn: { padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, width: '48%', marginBottom: 10, alignItems: 'center' },
  btnActive: { backgroundColor: '#FF6347', borderColor: '#FF6347' },
  btnText: { color: '#333', fontWeight: '500' },
  btnTextActive: { color: '#fff' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 15, fontSize: 18, marginBottom: 30 },
  saveBtn: { backgroundColor: '#2E8B57', padding: 15, borderRadius: 12, alignItems: 'center' },
  saveBtnText: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});

export default ExerciseLogScreen;
