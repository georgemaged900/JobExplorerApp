import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function JobCard({ job, onPress }) {
  return (
    <TouchableOpacity onPress={() => onPress(job)} style={styles.card}>
      <Text style={styles.position}>{job.position}</Text>
      <Text style={styles.location}>{job.location}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  position: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E293B',
  },
  location: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 2,
  },
});
