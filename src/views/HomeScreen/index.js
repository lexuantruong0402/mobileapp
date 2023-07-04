import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { TwitterColors } from '../../constants';
import Header from '../../components/Header';
import Bottom from '../../components/Bottom';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header></Header>
      <View style={styles.box2}>
        <View style={styles.containerData}>
          <View style={styles.containerHello}>
            <Text style={{ fontSize: 36, fontWeight: 'bold', color: TwitterColors.Blue }}>Xin chào, Admin</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
              <FontAwesome name="calendar" size={24} color={TwitterColors.Blue} style={{ marginRight: 10 }} />
              <Text style={{ fontSize: 24, color: TwitterColors.Blue }}>{new Date().toLocaleDateString()}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
              <View style={{ flex: 1, height: 1, backgroundColor: TwitterColors.Blue }}></View>
              <FontAwesome name="circle" size={10} color={TwitterColors.Blue} style={{ marginHorizontal: 10 }} />
              <View style={{ flex: 1, height: 1, backgroundColor: TwitterColors.Blue }}></View>
            </View>
          </View>

          <View style={styles.containerMenu}>
            <Text style={{ fontSize: 18, marginTop: 0 }}>Danh mục chính</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
              <TouchableOpacity style={styles.menuItem}>
                <FontAwesome name="home" size={30} color={TwitterColors.Blue} />
                <Text style={{ fontSize: 16, color: 'black' }}>Trang chủ</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <FontAwesome name="envelope" size={30} color={TwitterColors.Blue} />
                <Text style={{ fontSize: 16, color: 'black' }}>Hộp thư</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <FontAwesome name="user" size={30} color={TwitterColors.Blue} />
                <Text style={{ fontSize: 16, color: 'black'}}>Tài khoản</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
              <TouchableOpacity style={styles.menuItem}>
                <FontAwesome name="cog" size={30} color={TwitterColors.Blue} />
                <Text style={{ fontSize: 16, color: 'black'}}>Cài đặt</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <FontAwesome name="camera" size={30} color={TwitterColors.Blue} />
                <Text style={{ fontSize: 16, color: 'black' }}>Máy ảnh</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <FontAwesome name="globe" size={30} color={TwitterColors.Blue} />
                <Text style={{ fontSize: 16, color: 'black'}}>Ngôn ngữ</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
              <TouchableOpacity style={styles.menuItem}>
                <FontAwesome name="bell" size={30} color={TwitterColors.Blue} />
                <Text style={{ fontSize: 16, color: 'black' }}>Thông báo</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <FontAwesome name="lock" size={30} color={TwitterColors.Blue} />
                <Text style={{ fontSize: 16, color: 'black'  }}>Bảo mật</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <FontAwesome name="question-circle" size={30} color={TwitterColors.Blue} />
                <Text style={{ fontSize: 16, color: 'black' }}>Trợ giúp</Text>
              </TouchableOpacity>
            </View>
          </View>

          
        </View>
      </View>
      <Bottom></Bottom>
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
  containerHello: {
    flex: 3,
    marginTop: 30
  },
  containerMenu: {
    flex: 7,
    padding: 10,
  },
  menuItem: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: TwitterColors.Extra_Light_Gray,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
  },
  box2: {
    flex: 8,
    backgroundColor: TwitterColors.Light_Gray,
    justifyContent: 'center',
    alignItems: 'center',
  },


});

export default Home;