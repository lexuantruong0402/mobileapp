import React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TwitterColors } from '../../constants';

const Home = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000 * 60 * 60 * 24); // Update once per day
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.dateText}>{currentDate.toLocaleDateString()}</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.iconContainer}>
          <View style={styles.iconWrapper}>
            <Icon name="home" size={50} color={TwitterColors.Extra_Extra_Light_Gray} style={styles.icon} />
            <Text style={styles.iconText}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <View style={styles.iconWrapper}>
            <Icon name="user" size={50} color={TwitterColors.Extra_Extra_Light_Gray} style={styles.icon} />
            <Text style={styles.iconText}>Profile</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <View style={styles.iconWrapper}>
            <Icon name="shopping-cart" size={50} color={TwitterColors.Extra_Extra_Light_Gray} style={styles.icon} />
            <Text style={styles.iconText}>Cart</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.iconContainer}>
          <View style={styles.iconWrapper}>
            <Icon name="camera" size={50} color={TwitterColors.Extra_Extra_Light_Gray} style={styles.icon} />
            <Text style={styles.iconText}>Camera</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <View style={styles.iconWrapper}>
            <Icon name="music" size={50} color={TwitterColors.Extra_Extra_Light_Gray} style={styles.icon} />
            <Text style={styles.iconText}>Music</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <View style={styles.iconWrapper}>
            <Icon name="heart" size={50} color={TwitterColors.Extra_Extra_Light_Gray} style={styles.icon} />
            <Text style={styles.iconText}>Favorites</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 50,
  },
  iconContainer: {
    borderRadius: 50,
    backgroundColor: TwitterColors.Blue,
    padding: 15,
    margin: 20,
  },
  iconWrapper: {
    alignItems: 'center',
  },
  icon: {
    textAlign: 'center',
    width: 50,
  },
  iconText: {
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 5,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dateText: {
    fontSize: 18,
  },
});

export default Home;