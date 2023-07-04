import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Modal, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { TwitterColors } from '../../constants';
import Header from '../../components/Header';
import Bottom from '../../components/Bottom';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { client } from '../../helpers/api';
import { Picker } from '@react-native-picker/picker';

const AddAccountScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      const credentials = { email, password, fullName, gender, address };
      const response = await client.post('/api/customer/', credentials, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      // handle successful response
      console.log(response.data);
      setSuccess(true);
      setEmail('');
      setPassword('');
      setFullName('');
      setGender('');
      setAddress('');
    } catch (error) {
      // handle error
      if (error.response) {
        console.log(error)
        setError('Invalid');
      } else if (error.request) {
        setError('Network error occurred, please try again later');
      } else {
        setError('Something went wrong, please try again later');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.box2}>
        <View style={styles.containerData}>
          <Text style={{ fontSize: 20, color: 'black' }}>Tạo mới</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Mật khẩu"
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            style={styles.input}
            placeholder="Họ và tên"
            value={fullName}
            onChangeText={setFullName}
          />
          <Picker
            style={styles.input}
            selectedValue={gender}
            onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
          >
            <Picker.Item label="Khác" value="OTHER" />
            <Picker.Item label="Nam" value="MALE" />
            <Picker.Item label="Nữ" value="FEMALE" />
          </Picker>
          <TextInput
            style={styles.input}
            placeholder="Địa chỉ"
            value={address}
            onChangeText={setAddress}
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Thêm mới</Text>
          </TouchableOpacity>
          {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
          <Modal
            animationType="slide"
            transparent={true}
            visible={success}
            onRequestClose={() => {
              setSuccess(false);
            }}
          >
            <View style={styles.modalView}>
              <FontAwesome name="check-circle" size={64} color="#00FF00" />
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Thêm mới thành công!</Text>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: TwitterColors.Gray }]}
                onPress={() => setSuccess(false)}
              >
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>OK</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </View>
      <Bottom />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: 'white'
  },
  box2: {
    flex: 8,
    backgroundColor: TwitterColors.Light_Gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerData: {
    backgroundColor: TwitterColors.Extra_Extra_Light_Gray,
    width: '98%',
    height: '98%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 20,
    padding: 10,
  },
  input: {
    height: 40,
    width: '100%',
    marginVertical: 10,
    paddingHorizontal: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  
  button: {
    backgroundColor: TwitterColors.Blue,
    height: 40,
    width: '100%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default AddAccountScreen;