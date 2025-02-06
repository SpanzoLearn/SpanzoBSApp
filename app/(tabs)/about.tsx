import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

type AboutPageNavigationProp = NavigationProp<any, any>;

const AboutPage = () => {
  const navigation = useNavigation<AboutPageNavigationProp>();

  return (
    <View style={styles.container}>
      {/* Header Section with Navigation */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
          <Text style={styles.navItem}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
          <Text style={styles.navItem}>Contact</Text>
        </TouchableOpacity>
        <Text style={styles.navItemActive}>About</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Location')}>
               <Text style={styles.navItem}>Location</Text>
        </TouchableOpacity>
      </View>

      {/* About Page Content */}
      <View style={styles.contentContainer}>
        <Text style={styles.header}>Welcome to <Text style={styles.brand}>Spanzo</Text> 🚀</Text>
        <Text style={styles.subHeader}>
          Your trusted **service provider** in **Baghpat**.
        </Text>

        {/* Services Section */}
        <View style={styles.servicesContainer}>
          <Text style={styles.servicesHeader}>Our Services 🔧</Text>

          <View style={styles.serviceItem}>
            <FontAwesome5 name="tools" size={24} color="#ff9900" />
            <Text style={styles.serviceText}>Plumbing Services</Text>
          </View>

          <View style={styles.serviceItem}>
            <MaterialIcons name="electrical-services" size={24} color="#ff9900" />
            <Text style={styles.serviceText}>Electricity Repairs</Text>
          </View>

          <View style={styles.serviceItem}>
            <FontAwesome5 name="utensils" size={24} color="#ff9900" />
            <Text style={styles.serviceText}>Food Services at Baghpat Collectorate</Text>
          </View>
        </View>

        <Text style={styles.description}>
          We specialize in providing **quick, affordable, and high-quality** services.  
          Whether it's a leaking tap, an electrical issue, or catering for an event at **Baghpat Collectorate**,  
          **we’ve got you covered!**
        </Text>
      </View>

      {/* Back to Home Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('HomePage')}>
        <Text style={styles.backButtonText}>⬅️ Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f9',
    
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
  backgroundColor: '#007bff',
  paddingHorizontal: 10,
  paddingVertical: 5,
  borderRadius: 5,
},
languageText: {
  fontSize: 16,
  color: '#fff',
},
  contentContainer: {
    alignItems: 'center',
    marginTop: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  brand: {
    color: '#ff9900',
    fontWeight: 'bold',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  subHeader: {
    fontSize: 18,
    color: '#666',
    marginTop: 10,
    textAlign: 'center',
  },
  servicesContainer: {
    marginTop: 20,
    width: '100%',
  },
  servicesHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ff9900',
    textAlign: 'center',
    marginBottom: 10,
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  serviceText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#444',
    marginTop: 15,
    textAlign: 'center',
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

export default AboutPage;
