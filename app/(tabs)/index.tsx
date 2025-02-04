import React, { useState } from 'react';
import { View, Text, Button, Modal, ScrollView, StyleSheet, Image } from 'react-native';
import HomePage from './HomePage'; // Import HomePage

const App = () => {
  const [termsVisible, setTermsVisible] = useState(true); // State to control modal visibility

  return (
    <View style={styles.container}>
      {/* Terms and Conditions Modal */}
      <Modal visible={termsVisible} animationType="slide">
        <View style={styles.modalContent}>
          {/* App Name in Header */}
          <View style={styles.headerContainer}>
            <Text style={styles.modalHeader}>Baghpat Services</Text>
            <Text style={styles.subHeader}>Terms and Conditions</Text>
          </View>

          {/* App Logo */}
          <Image
            source={{ uri: 'https://img.icons8.com/ios/452/service.png' }} // Sample service icon
            style={styles.logo}
          />

          {/* Terms and Conditions Text */}
          <ScrollView style={styles.termsContainer}>
            <Text style={styles.termsText}>
              Welcome to Baghpat Services. By using this app, you agree to the following terms:
              {"\n\n"}
              - Liability Disclaimer: We are not responsible for any issues arising from the services.
              {"\n"}
              - No Guarantee: We do not guarantee the availability or quality of services.
              {"\n"}
              - User Responsibility: Users must verify service provider details.
              {"\n"}
              - Pricing Information: Prices are provided by service providers.
              {"\n"}
              - Service Area: Limited to Bagpat only.
              {"\n"}
              - Amendments: Terms may change without notice.
            </Text>
          </ScrollView>

          {/* Agree Button */}
          <View style={styles.buttonContainer}>
            <Button
              title="I Agree"
              onPress={() => setTermsVisible(false)} // Close modal on button press
              color="#ff9900" // Orange color
            />
          </View>
        </View>
      </Modal>

      {/* Home Page (Will be shown after agreeing to terms) */}
      {!termsVisible && <HomePage />}
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7', // Light gray background for a clean look
  },
  modalContent: {
    flex: 1,
    backgroundColor: '#fff', // White background for the modal for a modern look
    padding: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  headerContainer: {
    marginTop: 30, // Adjust header position
    alignItems: 'center',
    marginBottom: 20,
  },
  modalHeader: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ff9900', // Bold orange for title
  },
  subHeader: {
    fontSize: 24,
    fontWeight: '600',
    color: '#555', // Lighter gray for subheader
    marginTop: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 10,
  },
  termsContainer: {
    flex: 1,
    marginTop: 20,
  },
  termsText: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'justify',
    color: '#333', // Dark text for readability
    paddingHorizontal: 10,
  },
  buttonContainer: {
    marginTop: 30,
    paddingHorizontal: 50, // Add horizontal padding for better button placement
  },
});

export default App;
