import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function JobDetailModal({ visible, onClose, job }) {
  if (!job) return null;

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>{job.position}</Text>
          <Text style={styles.detail}>Location: {job.location}</Text>
          <Text style={styles.detail}>Company: {job.company}</Text>
          <Text style={styles.detail}>Description:</Text>
          <Text style={styles.description}>{job.description}</Text>

          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    padding: 20,
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    fontSize: 15,
    marginBottom: 15,
    color: '#444',
  },
  closeButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 6,
  },
  closeText: {
    color: 'white',
  },
});
