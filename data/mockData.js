export const initialMetrics = {
  sleepHours: 5.5,
  sleepQuality: 3,
  waterIntake: 1200,
  exerciseIntensity: 'low',
  exerciseDuration: 20,
  calories: 2200,
  mealsLogged: 3,
  steps: 6500,
  weeklyProgress: 'plateau',
};

export const initialChatHistory = [
  {
    id: '1',
    sender: 'ai',
    text: "Hi! Based on your recent health data, I have some suggestions for you. How can I help today?",
    timestamp: new Date().toISOString(),
  }
];

export const weeklyTrends = [
  { day: 'Mon', steps: 7000, calories: 2400 },
  { day: 'Tue', steps: 6500, calories: 2200 },
  { day: 'Wed', steps: 8000, calories: 2500 },
  { day: 'Thu', steps: 5000, calories: 2100 },
  { day: 'Fri', steps: 4500, calories: 2300 },
  { day: 'Sat', steps: 4000, calories: 2400 },
  { day: 'Sun', steps: 6500, calories: 2200 },
];
