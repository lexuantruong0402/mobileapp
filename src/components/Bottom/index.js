import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { TwitterColors } from '../../constants';

const Bottom = () => {
    return (
        <View style={styles.container}>
        <View style={styles.bottomMenu}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                <TouchableOpacity style={styles.bottomMenuItem}>
                    <Ionicons name="home-outline" size={24} color={TwitterColors.Blue} />
                    <Text style={{ color: TwitterColors.Blue, fontSize: 12, marginTop: 5 }}>Trang chủ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomMenuItem}>
                    <Ionicons name="search-outline" size={24} color={TwitterColors.Blue} />
                    <Text style={{ color: TwitterColors.Blue, fontSize: 12, marginTop: 5 }}>Tìm kiếm</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomMenuItem}>
                    <Ionicons name="add-circle-outline" size={24} color={TwitterColors.Blue} />
                    <Text style={{ color: TwitterColors.Blue, fontSize: 12, marginTop: 5 }}>Thêm mới</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomMenuItem}>
                    <Ionicons name="notifications-outline" size={24} color={TwitterColors.Blue} />
                    <Text style={{ color: TwitterColors.Blue, fontSize: 12, marginTop: 5 }}>Thông báo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomMenuItem}>
                    <Ionicons name="person-outline" size={24} color={TwitterColors.Blue} />
                    <Text style={{ color: TwitterColors.Blue, fontSize: 12, marginTop: 5 }}>Tài khoản</Text>
                </TouchableOpacity>
            </View>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: TwitterColors.Light_Gray
    },
    bottomMenu: {
        height: 60,
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 20,
        padding: 10,
        backgroundColor: TwitterColors.Extra_Extra_Light_Gray,
    },
    bottomMenuItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Bottom;