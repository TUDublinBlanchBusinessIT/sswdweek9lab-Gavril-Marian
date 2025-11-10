// InfoScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { db, auth } from './firebase'; // make sure db and auth are exported

export default function InfoScreen() {
  const [adress, setAdress] = useState('');
  const [dob, setDOB] = useState('');

  const handleSubmit = async () => {
    if (!adress || !dob) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    try {
      await addDoc(collection(db, 'usersInfo'), {
        adress,
        dob,
        userEmail: auth.currentUser?.email || 'unknown',
        timestamp: new Date(),
      });
      alert('Success', 'Data saved successfully!');
      setAdress('');
      setDOB('');
    } catch (error) {
      alert('Error saving data', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Enter Your Info</Text>
      <TextInput
        placeholder="Address"
        value={adress}
        onChangeText={setAdress}
        style={styles.input}
      />
      <TextInput
        placeholder="Date of Birth"
        value={dob}
        onChangeText={setDOB}
        style={styles.input}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  heading: { fontSize: 20, marginBottom: 20, textAlign: 'center' },
});
