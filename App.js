import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Modal,
  Text,
  ScrollView,
  Button,
} from 'react-native';
import axios from 'axios';
import JobCard from './components/JobCard';
import { Ionicons } from '@expo/vector-icons';
import { BASE_URL } from './constants';

export default function App() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);

  const fetchJobs = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/Jobs`);
      setJobs(res.data);
      setFilteredJobs(res.data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleSearch = (text) => {
    setSearch(text);
    const filtered = jobs.filter(
      (job) =>
        job.position.toLowerCase().includes(text.toLowerCase()) ||
        job.location.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  const handleSelectJob = (job) => {
    setSelectedJob(job);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#555" style={styles.icon} />
        <TextInput
          placeholder="Search by job or location"
          placeholderTextColor="#888"
          style={styles.input}
          value={search}
          onChangeText={handleSearch}
        />
      </View>

      <FlatList
        data={filteredJobs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <JobCard job={item} onPress={handleSelectJob} />
        )}
      />

      {/* Detail Modal */}
      {selectedJob && (
        <Modal
          visible={true}
          animationType="slide"
          onRequestClose={() => setSelectedJob(null)}
        >
          <SafeAreaView style={styles.modalContainer}>
            <ScrollView>
              <Text style={styles.modalTitle}>{selectedJob.position}</Text>
              <Text style={styles.modalLocation}>{selectedJob.location}</Text>
              <Text style={styles.modalDescription}>
                {selectedJob.company}
              </Text>
              <Button title="Close" onPress={() => setSelectedJob(null)} />
            </ScrollView>
          </SafeAreaView>
        </Modal>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#000',
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalLocation: {
    fontSize: 16,
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
  },
});
