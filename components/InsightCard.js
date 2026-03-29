import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Target } from 'lucide-react-native';

const InsightCard = ({ message }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Target stroke="#fff" width={20} height={20} />
        <Text style={styles.title}>Daily AI Insight</Text>
      </View>
      <Text style={styles.message}>"{message}"</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#2E8B57',
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#2E8B57',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  message: {
    color: '#F0FFF4',
    fontSize: 15,
    lineHeight: 22,
    fontStyle: 'italic',
  }
});

export default InsightCard;
