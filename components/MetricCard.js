import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MetricCard = ({ title, value, unit, icon: Icon, color = '#2E8B57' }) => {
  return (
    <View style={styles.card}>
      <View style={[styles.iconContainer, { backgroundColor: color + '20' }]}>
        {Icon && <Icon stroke={color} width={24} height={24} />}
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>{value} <Text style={styles.unit}>{unit}</Text></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  unit: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#888',
  }
});

export default MetricCard;
