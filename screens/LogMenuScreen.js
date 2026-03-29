import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Activity, Flame, Droplet, Map } from 'lucide-react-native';

const items = [
  { name: 'Exercise', icon: Activity, color: '#FF6347', route: 'ExerciseLog' },
  { name: 'Diet & Calories', icon: Flame, color: '#FFA500', route: 'DietLog' },
  { name: 'Water Intake', icon: Droplet, color: '#00BFFF', route: 'WaterLog' },
  { name: 'Steps Map', icon: Map, color: '#32CD32', route: 'StepsMap' },
];

const LogMenuScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Track Your Health</Text>
      <View style={styles.grid}>
        {items.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.card}
            onPress={() => navigation.navigate(item.route)}
          >
            <View style={[styles.iconContainer, { backgroundColor: item.color + '20' }]}>
              <item.icon stroke={item.color} width={32} height={32} />
            </View>
            <Text style={styles.label}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7FAFC', padding: 20 },
  header: { fontSize: 28, fontWeight: 'bold', color: '#1A202C', marginBottom: 20, marginTop: 40 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: {
    width: '48%', backgroundColor: '#fff', padding: 20, borderRadius: 16,
    alignItems: 'center', marginBottom: 16,
    shadowColor: '#000', shadowOpacity: 0.05, shadowOffset: { width: 0, height: 2 }, shadowRadius: 8, elevation: 2,
  },
  iconContainer: { width: 64, height: 64, borderRadius: 32, justifyContent: 'center', alignItems: 'center', marginBottom: 12 },
  label: { fontSize: 16, fontWeight: '600', color: '#333', textAlign: 'center' }
});

export default LogMenuScreen;
