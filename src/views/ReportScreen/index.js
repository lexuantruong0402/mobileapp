import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { TwitterColors } from '../../constants';
import Header from '../../components/Header';
import Bottom from '../../components/Bottom';

const ReportScreen = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        barColors: ['#348feb']
      }
    ]
  };

  const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.box2}>
        <View style={styles.containerData}>
          <Text style={{ fontSize: 20, color: 'black' }}>Báo cáo</Text>

          <View style={styles.box3}>
            <Text style={{ fontSize: 16, color: 'gray', marginBottom: 5 }}>Total Profit</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 20, color: 'black', marginRight: 15 }}>$95,340</Text>
              <Text style={{ fontSize: 20, color: 'green' }}>+3.55%</Text>
            </View>
          </View>

          <View style={styles.box3}>
            <Text style={{ fontSize: 16, color: 'gray', marginBottom: 5 }}>Total Expenses</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 20, color: 'black', marginRight: 15 }}>$12,344</Text>
              <Text style={{ fontSize: 20, color: 'green' }}>+1.25%</Text>
            </View>
          </View>

          <View style={styles.box3}>
            <Text style={{ fontSize: 16, color: 'gray', marginBottom: 5 }}>New User</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 20, color: 'black', marginRight: 15 }}>212</Text>
              <Text style={{ fontSize: 20, color: 'red' }}>-13.55%</Text>
            </View>
          </View>

          <View style={styles.box4}>
            <BarChart
              data={data}
              width={Dimensions.get('window').width * 0.96}
              height={220}
              chartConfig={chartConfig}
              style={{ marginVertical: 20, borderRadius: 16 }}
            />

          </View>

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
  box3: {
    flex: 1,
    backgroundColor: TwitterColors.White,
    width: '97%',
    height: '97%',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 20,
    padding: 10,
    marginTop: 10
  },
  box4: {
    flex: 6,
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
  }
});

export default ReportScreen;