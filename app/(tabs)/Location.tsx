import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';

const locations = [
  { name: "Mumbai", charge: "₹500", time: "2 hours" },
  { name: "Delhi", charge: "₹700", time: "3.5 hours" },
  { name: "Bangalore", charge: "₹650", time: "3 hours" },
  { name: "Hyderabad", charge: "₹600", time: "2.5 hours" },
  { name: "Kolkata", charge: "₹750", time: "4 hours" }
];

const Location = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={styles.container}>
        {/* Navigation Menu */}
        <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
            <Text style={styles.navItem}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
            <Text style={styles.navItem}>Contact</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('about')}>
            <Text style={styles.navItem}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Location')}>
            <Text style={styles.navItemActive}>Location</Text>
          </TouchableOpacity>
        </View>

        {/* Cards centered */}
        <View style={styles.cardsContainer}>
          {locations.map((loc, index) => (
            <TouchableOpacity
              key={index}
              style={styles.card}
            >
              <Text style={styles.title}>{loc.name}</Text>
              <Text style={styles.text}>📍 Charge: <Text style={styles.bold}>{loc.charge}</Text></Text>
              <Text style={styles.text}>⏳ Time: <Text style={styles.bold}>{loc.time}</Text></Text>
            </TouchableOpacity>
          ))}
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7d2c4',
    justifyContent: 'flex-start', // Aligning content at the top
     // To provide space from top
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
  cardsContainer: {
    flex: 1,
    justifyContent: 'center', // Center the cards vertically
    alignItems: 'center', // Center the cards horizontally
    paddingHorizontal: 20, // Add some space on the sides
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    width: '90%', // Keeping card width at 90% of parent container
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    color: '#555',
  },
  bold: {
    fontWeight: 'bold',
    color: '#000',
  }
});

export default Location;
