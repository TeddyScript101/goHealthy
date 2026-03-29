import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarPlaceholder}>
          <Text style={styles.avatarText}>JD</Text>
        </View>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>johndoe@example.com</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Settings</Text>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7FAFC' },
  header: { alignItems: 'center', padding: 40, paddingTop: 80, backgroundColor: '#2E8B57', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 },
  avatarPlaceholder: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', marginBottom: 16 },
  avatarText: { fontSize: 24, fontWeight: 'bold', color: '#2E8B57' },
  name: { fontSize: 24, fontWeight: 'bold', color: '#fff', marginBottom: 4 },
  email: { fontSize: 14, color: '#D1FAE5' },
  section: { padding: 20, marginTop: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#4A5568', marginBottom: 16 },
  item: { paddingVertical: 16, borderBottomWidth: 1, borderColor: '#EDF2F7' },
  itemText: { fontSize: 16, color: '#2D3748' }
});

export default ProfileScreen;
