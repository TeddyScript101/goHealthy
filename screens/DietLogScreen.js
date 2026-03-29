import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { HealthContext } from '../context/HealthContext';

const DietLogScreen = ({ navigation }) => {
  const { metrics, updateMetric } = useContext(HealthContext);
  const [calories, setCalories] = useState(metrics.calories.toString());
  const [meals, setMeals] = useState(metrics.mealsLogged.toString());

  const handleSave = () => {
    updateMetric('calories', parseInt(calories) || 0);
    updateMetric('mealsLogged', parseInt(meals) || 0);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Total Calories</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={calories}
        onChangeText={setCalories}
      />

      <Text style={styles.label}>Meals Logged</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={meals}
        onChangeText={setMeals}
      />

      <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
        <Text style={styles.saveBtnText}>Save Diet Data</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  label: { fontSize: 18, fontWeight: '600', marginBottom: 10, marginTop: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 15, fontSize: 18, marginBottom: 10 },
  saveBtn: { backgroundColor: '#2E8B57', padding: 15, borderRadius: 12, alignItems: 'center', marginTop: 30 },
  saveBtnText: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});

export default DietLogScreen;
