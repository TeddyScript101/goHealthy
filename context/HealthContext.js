import React, { createContext, useState } from 'react';
import { initialMetrics, initialChatHistory } from '../data/mockData';

export const HealthContext = createContext();

export const HealthProvider = ({ children }) => {
  const [metrics, setMetrics] = useState(initialMetrics);
  const [chatHistory, setChatHistory] = useState(initialChatHistory);

  const updateMetric = (key, value) => {
    setMetrics(prev => ({ ...prev, [key]: value }));
  };

  const addChatMessage = (message) => {
    setChatHistory(prev => [...prev, message]);
  };

  return (
    <HealthContext.Provider value={{ metrics, updateMetric, chatHistory, addChatMessage }}>
      {children}
    </HealthContext.Provider>
  );
};
