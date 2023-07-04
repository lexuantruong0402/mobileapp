import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Header = () => {
    return (
        <View style={styles.box1}>
            <ImageBackground source={require('../../../assets/topbg.jpg')} style={styles.backgroundImage}>
            </ImageBackground>
            <FontAwesome name="user" size={30} color="white"
                style={{
                    position: 'absolute', top: '50%',
                    right: 40,
                    transform: [{ translateY: -15 }], // Adjust to center the icon within the border
                    width: 36, height: 36,
                    borderRadius: 12, borderWidth: 1, borderColor: 'white', padding: 7
                }} />
        </View>
    );
};

const styles = StyleSheet.create({
    box1: {
        flex: 2,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
});

export default Header;