import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image, Modal } from 'react-native';
import { Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';

// Define the Service interface to specify the structure of each service
interface Service {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  phoneNumber: string; // Added phone number field
}

// Define the type for navigation
type HomePageNavigationProp = NavigationProp<any, any>; 

const HomePage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null); // Set the type to Service or null
  const navigation = useNavigation<HomePageNavigationProp>();  // Use the correct type for navigation

  const services: Service[] = [
    {
      id: 1,
      name: 'Electrician',
      price: '₹100 per 20 minutes',
      description: 'Expert electricians for home and office repairs.',
      image: 'https://img.freepik.com/free-vector/hand-drawn-handyman-cartoon-illustration_23-2150765966.jpg',
      phoneNumber: '9876543210', // Phone number for this service
    },
    {
      id: 2,
      name: 'Plumber',
      price: '₹100 per 20 minutes',
      description: 'Professional plumbing services for all needs.',
      image: 'https://img.freepik.com/premium-vector/plumber-blue-uniform-with-plumbers-tool-vector-illustration_1142-83513.jpg',
      phoneNumber: '9876543210', // Phone number for this service
    },
    {
      id: 3,
      name: 'Room Rental',
      price: 'Contact for details',
      description: 'Find the best rooms for rent at affordable prices.',
      image: 'https://img.freepik.com/free-vector/bedroom-cartoon-style-night-scene_1308-50645.jpg',
      phoneNumber: '9876543210', // Phone number for this service
    },
  ];

  const openModal = (service: Service) => {
    setSelectedService(service);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      {/* Navigation Menu */}
      <View style={styles.navbar}>
        <Text style={styles.navItem}>Home</Text>
        {/* Update Contact button to navigate to ContactPage */}
        <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
          <Text style={styles.navItem}>Contact</Text>
        </TouchableOpacity>
        <Text style={styles.navItem}>About</Text>
        <View style={styles.languageSwitch}>
          <Text style={styles.languageText}>English</Text>
        </View>
      </View>

      {/* Services Cards */}
      <ScrollView contentContainerStyle={styles.servicesContainer}>
        {services.map((service) => (
          <View key={service.id} style={styles.serviceCard}>
            <Image source={{ uri: service.image }} style={styles.serviceImage} />
            <Text style={styles.serviceName}>{service.name}</Text>
            <Text style={styles.servicePrice}>{service.price}</Text>
            
            {/* Buttons Section */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.callButton}
                onPress={() => Linking.openURL(`tel:${service.phoneNumber}`)} // Make call with service's phone number
              >
                <Text style={styles.callButtonText}>Call Now</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.moreInfoButton} onPress={() => openModal(service)}>
                <Text style={styles.moreInfoText}>More Info</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Modal for More Info */}
      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedService && (
              <>
                <Image source={{ uri: selectedService.image }} style={styles.modalImage} />
                <Text style={styles.modalTitle}>{selectedService.name}</Text>
                <Text style={styles.modalPrice}>{selectedService.price}</Text>
                <Text style={styles.modalDescription}>{selectedService.description}</Text>

                {/* Close Button */}
                <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>

      {/* Visit Counter */}
      <View style={styles.visitCounter}>
        <Text style={styles.visitCounterText}>Visits: 10</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7d2c4',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#ff9900',
  },
  navItem: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  languageSwitch: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  languageText: {
    fontSize: 16,
    color: '#333',
  },
  servicesContainer: {
    padding: 20,
  },
  serviceCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  serviceImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  serviceName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  servicePrice: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  callButton: {
    backgroundColor: '#ff9900',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    marginRight: 5,
  },
  callButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  moreInfoButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    marginLeft: 5,
  },
  moreInfoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  visitCounter: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: '#ffcc66',
    padding: 10,
    borderRadius: 5,
  },
  visitCounterText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  modalPrice: {
    fontSize: 18,
    color: '#ff5500',
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#d9534f',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default HomePage;
