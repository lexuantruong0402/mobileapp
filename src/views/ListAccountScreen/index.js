import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, FlatList, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { TwitterColors } from '../../constants';
import Header from '../../components/Header';
import Bottom from '../../components/Bottom';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DATA = [
  {
    id: '1',
    name: 'John Doe',
    phone: '0123456789',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: '2',
    name: 'Jane Smith',
    phone: '0987654321',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: '3',
    name: 'Bob Johnson',
    phone: '0369852471',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
];

const ListItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.listItem}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
          <Text style={{ fontSize: 14, color: TwitterColors.Gray }}>{item.phone}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const ListAccountScreen = () => {
  const [searchText, setSearchText] = useState('');

  const renderItem = ({ item }) => {
    return <ListItem item={item} onPress={() => console.log('View details of', item.name)} />;
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.box2}>
        <View style={styles.containerData}>
          <Text style={{ fontSize: 20, color: 'black' }}>Danh sách Account</Text>
          <View style={styles.searchBar}>
            <FontAwesome name="search" size={18} color={TwitterColors.Gray} />
            <TextInput
              style={styles.searchInput}
              placeholder="Tìm kiếm"
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 10 }}
          />
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
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: TwitterColors.Extra_Light_Gray,
    borderRadius: 25,
    paddingHorizontal: 10,
    marginTop: 10,
    height: 40,
  },
  searchInput: {
    fontSize: 16,
    marginLeft: 5,
    flex: 1,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: TwitterColors.Extra_Light_Gray,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
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
});

export default ListAccountScreen;