import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { HealthContext } from '../context/HealthContext';
import MetricCard from '../components/MetricCard';
import InsightCard from '../components/InsightCard';
import { generateAIResponse } from '../utils/aiLogic';
import { Droplet, Moon, Activity, Flame, Footprints } from 'lucide-react-native';

const DashboardScreen = () => {
  const { metrics } = useContext(HealthContext);

  // Generate a proactive daily insight
  const dailyInsight = generateAIResponse("advice", metrics);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.header}>Daily Overview</Text>
      
      <InsightCard message={dailyInsight} />
      
      <View style={styles.grid}>
        <MetricCard title="Sleep" value={metrics.sleepHours} unit="hrs" icon={Moon} color="#8A2BE2" />
        <MetricCard title="Water" value={metrics.waterIntake} unit="ml" icon={Droplet} color="#00BFFF" />
        <MetricCard title="Exercise" value={metrics.exerciseDuration} unit="min" icon={Activity} color="#FF6347" />
        <MetricCard title="Calories" value={metrics.calories} unit="kcal" icon={Flame} color="#FFA500" />
        <MetricCard title="Steps" value={metrics.steps} unit="steps" icon={Footprints} color="#32CD32" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FAFC',
  },
  content: {
    padding: 20,
    paddingTop: 60,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A202C',
    marginBottom: 20,
  },
  grid: {
    marginTop: 10,
  }
});

export default DashboardScreen;
