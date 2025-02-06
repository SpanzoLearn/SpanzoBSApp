import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';

type ContactPageNavigationProp = NavigationProp<any, any>;

const ContactPage = () => {
  const navigation = useNavigation<ContactPageNavigationProp>();

  return (
    <View style={styles.container}>
      {/* Header Section with Navigation */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
          <Text style={styles.navItem}>Home</Text>
        </TouchableOpacity>
        <Text style={styles.navItemActive}>Contact</Text>
        <TouchableOpacity onPress={() => navigation.navigate('about')}>
                  <Text style={styles.navItem}>About</Text>
                </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Location')}>
                    <Text style={styles.navItem}>Location</Text>
        </TouchableOpacity>
      </View>

      {/* Contact Page Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Contact Us</Text>
        <Text style={styles.subHeader}>We'd love to hear from you!</Text>
      </View>

      {/* Contact Form */}
      <View style={styles.formContainer}>
        <TextInput style={styles.input} placeholder="Your Name" />
        <TextInput style={styles.input} placeholder="Your Email" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Your Message" multiline={true} numberOfLines={4} />

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={() => alert('Message sent!')}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      {/* Back to Home Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('HomePage')}>
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f9',
    padding: 0,
    
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#ff9900',
    marginBottom: 20,
  },
  navItem: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  navItemActive: {
    fontSize: 18,
    color: '#ff9900', // Background color ka text color ban gaya
    fontWeight: 'bold',
    backgroundColor: '#fff', // Text ka background color set kiya
    padding: 5, // Thoda spacing bhi add karna acha lagega
    borderRadius: 5, // Thoda rounded look ke liye
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
  headerContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  header: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
  },
  subHeader: {
    fontSize: 20,
    color: '#666',
    marginTop: 10,
  },
  formContainer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  submitButton: {
    backgroundColor: '#ff9900',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  backButton: {
    marginTop: 25,
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#ff9900',
    borderRadius: 10,
  },
  backButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default ContactPage;
