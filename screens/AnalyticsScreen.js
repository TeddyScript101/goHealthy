import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { HealthContext } from '../context/HealthContext';
import { weeklyTrends } from '../data/mockData';
import { TrendingUp, AlertTriangle } from 'lucide-react-native';

const AnalyticsScreen = () => {
  const { metrics } = useContext(HealthContext);

  const isPlateau = metrics.weeklyProgress === 'plateau';

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.header}>Progress Analytics</Text>

      {isPlateau ? (
        <View style={styles.alertCard}>
          <AlertTriangle stroke="#FFA500" width={24} height={24} />
          <View style={styles.alertTextContainer}>
            <Text style={styles.alertTitle}>Plateau Detected</Text>
            <Text style={styles.alertDesc}>No significant progress detected in the last 2 weeks.</Text>
          </View>
        </View>
      ) : (
        <View style={[styles.alertCard, { backgroundColor: '#F0FFF4', borderColor: '#32CD32' }]}>
          <TrendingUp stroke="#32CD32" width={24} height={24} />
          <View style={styles.alertTextContainer}>
            <Text style={[styles.alertTitle, { color: '#276749' }]}>On Track</Text>
            <Text style={styles.alertDesc}>You are making consistent progress towards your goals!</Text>
          </View>
        </View>
      )}

      <Text style={styles.subHeader}>Weekly Trends (Steps)</Text>
      <View style={styles.chartContainer}>
        {weeklyTrends.map((data, index) => {
          const barHeight = (data.steps / 10000) * 150; // mock scale
          return (
            <View key={index} style={styles.barCol}>
              <View style={[styles.bar, { height: barHeight }]} />
              <Text style={styles.barLabel}>{data.day}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7FAFC' },
  content: { padding: 20, paddingTop: 60 },
  header: { fontSize: 28, fontWeight: 'bold', color: '#1A202C', marginBottom: 20 },
  alertCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF0F0',
    borderWidth: 1,
    borderColor: '#FFA500',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 30,
  },
  alertTextContainer: { marginLeft: 12, flex: 1 },
  alertTitle: { fontSize: 16, fontWeight: 'bold', color: '#DD6B20', marginBottom: 4 },
  alertDesc: { fontSize: 14, color: '#4A5568', lineHeight: 20 },
  subHeader: { fontSize: 20, fontWeight: '600', color: '#2D3748', marginBottom: 16 },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    height: 220,
    shadowColor: '#000', shadowOpacity: 0.05, shadowOffset: { width: 0, height: 2 }, shadowRadius: 8, elevation: 2,
  },
  barCol: { alignItems: 'center' },
  bar: { width: 24, backgroundColor: '#32CD32', borderRadius: 4, minHeight: 10 },
  barLabel: { marginTop: 8, fontSize: 12, color: '#718096' }
});

export default AnalyticsScreen;
