import React, { useContext, useState, useRef } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import { HealthContext } from '../context/HealthContext';
import { generateAIResponse } from '../utils/aiLogic';
import ChatBubble from '../components/ChatBubble';
import { Send } from 'lucide-react-native';

const ChatbotScreen = () => {
  const { chatHistory, addChatMessage, metrics } = useContext(HealthContext);
  const [inputText, setInputText] = useState('');
  const flatListRef = useRef();

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMsg = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputText,
      timestamp: new Date().toISOString()
    };
    addChatMessage(userMsg);
    setInputText('');

    // Simulate AI thinking and response
    setTimeout(() => {
      const aiResponse = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: generateAIResponse(userMsg.text, metrics),
        timestamp: new Date().toISOString()
      };
      addChatMessage(aiResponse);
    }, 600);
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <FlatList
        ref={flatListRef}
        data={chatHistory}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ChatBubble message={item} />}
        contentContainerStyle={styles.chatContainer}
        onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ask me anything..."
          value={inputText}
          onChangeText={setInputText}
          onSubmitEditing={handleSend}
        />
        <TouchableOpacity style={styles.sendBtn} onPress={handleSend}>
          <Send stroke="#fff" width={20} height={20} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7FAFC' },
  chatContainer: { padding: 20, paddingTop: 40, paddingBottom: 20 },
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#E2E8F0',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 24,
    fontSize: 16,
    marginRight: 10,
  },
  sendBtn: {
    backgroundColor: '#2E8B57',
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ChatbotScreen;
