export function generateAIResponse(userMessage, userMetrics) {
  const msg = userMessage.toLowerCase();

  // Sleep Intent
  if (msg.includes('sleep') || msg.includes('tired') || msg.includes('rest')) {
    if (userMetrics.sleepHours < 6) {
      return `You're not getting enough sleep. You only slept ${userMetrics.sleepHours} hours yesterday. This can affect fat loss and recovery. Try reaching at least 7 hours.`;
    } else {
      return `You got ${userMetrics.sleepHours} hours of sleep recently. Good job! Keeping a consistent sleep schedule will further improve recovery.`;
    }
  }

  // Hydration Intent
  if (msg.includes('water') || msg.includes('drink') || msg.includes('hydration')) {
    if (userMetrics.waterIntake < 1500) {
      return `Your water intake is low (only ${userMetrics.waterIntake}ml today). Increasing hydration can improve metabolism and energy levels.`;
    } else {
      return `Your hydration looks great at ${userMetrics.waterIntake}ml! Keep it up.`;
    }
  }

  // Fitness Intent
  if (msg.includes('exercise') || msg.includes('workout') || msg.includes('fitness')) {
    if (userMetrics.exerciseIntensity === 'low' || userMetrics.exerciseIntensity === 'none') {
      return `Your workouts have been low intensity recently. Increasing intensity may help break your plateau.`;
    } else {
      return `You're doing great with your ${userMetrics.exerciseIntensity} intensity workouts. Make sure to get enough protein to recover!`;
    }
  }

  // Diet / Calories Intent
  if (msg.includes('diet') || msg.includes('calories') || msg.includes('food')) {
    return `You've logged ${userMetrics.calories} calories across ${userMetrics.mealsLogged} meals. Focus on high protein and fibrous foods to stay satiated.`;
  }

  // Steps / Walking Intent
  if (msg.includes('steps') || msg.includes('walk') || msg.includes('map')) {
    return `You've taken ${userMetrics.steps} steps today. A brief 15-minute walk after meals can help increase your daily activity.`;
  }

  // Plateau Intent
  if (msg.includes('stuck') || msg.includes('plateau')) {
    if (userMetrics.weeklyProgress === 'plateau') {
      return `It looks like you've hit a plateau. Try adjusting workout intensity or improving your sleep consistency (you had ${userMetrics.sleepHours} hours recently).`;
    } else {
      return `Weight fluctuates naturally. Stay consistent with your tracking and trust the process.`;
    }
  }

  // General Advice Intent
  if (msg.includes('advice') || msg.includes('help')) {
    let advice = "Here is some personalized advice: ";
    if (userMetrics.sleepHours < 6) advice += "Prioritize your sleep tonight. ";
    if (userMetrics.waterIntake < 1500) advice += "Drink an extra glass of water now. ";
    if (userMetrics.steps < 8000) advice += "Try adding a short evening walk to boost your steps. ";
    
    if (advice === "Here is some personalized advice: ") {
      return "You're consistently hitting your targets. Small improvements in consistency can lead to even better results!";
    }
    return advice.trim();
  }

  // Default Fallback
  const randomResponses = [
    "You're doing well overall. Small improvements in consistency can lead to better results.",
    "Every small step counts. Keep tracking your metrics to see long-term trends.",
    "Health is a journey. Let me know if you want advice on specific metrics."
  ];
  return randomResponses[Math.floor(Math.random() * randomResponses.length)];
}
