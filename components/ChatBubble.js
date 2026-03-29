import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatBubble = ({ message }) => {
  const isAI = message.sender === 'ai';
  return (
    <View style={[styles.container, isAI ? styles.aiContainer : styles.userContainer]}>
      <View style={[styles.bubble, isAI ? styles.aiBubble : styles.userBubble]}>
        <Text style={[styles.text, isAI ? styles.aiText : styles.userText]}>
          {message.text}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 12,
  },
  aiContainer: {
    alignItems: 'flex-start',
  },
  userContainer: {
    alignItems: 'flex-end',
  },
  bubble: {
    maxWidth: '80%',
    padding: 14,
    borderRadius: 20,
  },
  aiBubble: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: 4,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  userBubble: {
    backgroundColor: '#2E8B57',
    borderBottomRightRadius: 4,
  },
  text: {
    fontSize: 15,
    lineHeight: 22,
  },
  aiText: {
    color: '#333',
  },
  userText: {
    color: '#fff',
  }
});

export default ChatBubble;
