import React, {useEffect, useState} from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  TextInput,
  Pressable,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import {Icon} from '@rneui/themed';
import {Searchbar} from 'react-native-paper';

function RateList({navigation, route}) {
  const [searchQuery, setSearchQuery] = useState('');
  const testData = route?.params?.data;
  const [totalPrice, setTotalPrice] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showindicator, setShowindicator] = useState(false);
  const showingIndicator = () => {
    setShowindicator(true);
    setTimeout(() => {
      setShowindicator(false);
    }, 300);
  };

  useEffect(() => {
    showingIndicator();
  }, []);
  const onChangeSearch = query => {
    setSearchQuery(query);
    console.log(searchQuery);
  };
  const movingNext = () => {
    if (totalPrice.length === 0) {
      alert('Please select the atleast one test!');
    } else {
      navigation.navigate('Final', {
        data: testData,
        confirmitem: totalPrice,
      });
    }
  };
  // const handleSubmit = item => {
  //   // console.log(item);
  //   let temp = [];
  //   const i = 0;
  //   for (const iterator of filteredData) {
  //     if(item === iterator)
  //       temp.push(item);

  //   }

  //   console.log(temp);
  // };
  useEffect(() => {
    setFilteredData(testData?.testall);
  }, [testData?.length]);
  const totalData = item => {
  var temp =[];
  // temp.push(item);
  temp.push.apply(item);
  setTotalPrice(temp);
  // console.log(temp);
  var arr1 = [1,2,3]
var obj = item;
var newData = [...arr1, obj] // [1,2,3,4]
console.log(newData);
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="light-content" backgroundColor={'#014e78'} />
      {/* header */}
      <View style={styles.headerConatiner}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="arrowleft" type="antdesign" color={'#014e78'} />
        </Pressable>
        <Text style={styles.headerText}>Available Tests</Text>
        <Pressable
          style={styles.headerIcon}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={styles.headerIconText}>Skip</Text>
        </Pressable>
      </View>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBartext}
          placeholder="Search Test(CBT,CT Scan etc)"
          onChangeText={onChangeSearch}
          value={testData?.testall}
        />
        <Pressable style={styles.searchBarIcon}>
          <Icon name="search1" type="antdesign" color={'#014e78'} />
        </Pressable>
      </View>

      {showindicator == true ? (
        <ActivityIndicator color={'#014e78'} size={50} />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredData}
          renderItem={({item, index}) => {
            if (searchQuery === '') {
              return (
                <TouchableOpacity onPress={() => totalData(item, index)}>
                  <View
                    style={{
                      height: 80,
                      width: '95%',
                      shadowOffset: {
                        width: 0,
                        height: 6,
                      },
                      backgroundColor: 'white',
                      marginHorizontal: '2.5%',
                      paddingHorizontal: 15,
                      borderRadius: 5,
                      justifyContent: 'center',
                      marginTop: 5,
                      elevation: 5,
                      marginBottom: 10,
                    }}>
                    <View
                      style={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row',
                      }}>
                      <Text style={{margin: 5, paddingBottom: 13}}>
                        {item.title}
                      </Text>
                      <View></View>
                      <Icon
                        name="circle-with-plus"
                        type="entypo"
                        color={'lightgreen'}
                        size={24}
                      />
                    </View>

                    <View style={{flexDirection: 'row', width: '100%'}}>
                      <Text
                        style={{
                          color: 'black',
                          fontWeight: '600',
                          fontSize: 14,
                          textDecorationLine: 'line-through',
                        }}>
                        {item.rate}
                      </Text>
                      <Text
                        style={{
                          color: 'black',
                          fontWeight: '600',
                          fontSize: 14,
                          marginLeft: 20,
                        }}>
                        {item.discountrate}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }
            if (
              item.title
                .toUpperCase()
                .includes(searchQuery.toUpperCase().trim().replace(/\s/g, ''))
            ) {
              return (
                <TouchableOpacity onPress={() => setTotalPrice(item)}>
                  <View
                    style={{
                      height: 80,
                      width: '95%',
                      shadowOffset: {
                        width: 0,
                        height: 6,
                      },
                      backgroundColor: 'white',
                      marfsrginHorizontal: '2.5%',
                      paddingHorizontal: 15,
                      borderRadius: 5,
                      justifyContent: 'center',
                      marginTop: 5,
                      elevation: 5,
                      marginBottom: 10,
                    }}>
                    <View
                      style={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row',
                      }}>
                      <Text style={{margin: 5, paddingBottom: 13}}>
                        {item.title}
                      </Text>
                      <View></View>
                      <Icon
                        name="circle-with-plus"
                        type="entypo"
                        color={'lightgreen'}
                        size={24}
                      />
                    </View>

                    <View style={{flexDirection: 'row', width: '100%'}}>
                      <Text
                        style={{
                          color: 'black',
                          fontWeight: '600',
                          fontSize: 14,
                          textDecorationLine: 'line-through',
                        }}>
                        {item.rate}
                      </Text>
                      <Text
                        style={{
                          color: 'black',
                          fontWeight: '600',
                          fontSize: 14,
                          marginLeft: 20,
                        }}>
                        {item.discountrate}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }
          }}
        />
      )}
      <View
        style={{
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 0,
          height: 110,
          width: '100%',
        }}>
        <View
          style={[
            styles.widgets3,
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              // width: '100%',
            },
          ]}>
          <Text
            style={{
              top: 1,
              fontWeight: '600',
              marginTop: '1%',
            }}>
            Sub Total
          </Text>
          <Text
            style={{
              top: 1,
              fontWeight: '60',
              marginTop: '1%',
            }}>
            {totalPrice?.discountrate}
          </Text>
        </View>

        <View
          style={{
            paddingTop: 14,
            // margin: 8,
            bottom: 15,
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => {
              movingNext();
            }}
            style={styles.loginScreenButton6}
            underlayColor="#fff">
            <Text style={styles.loginText1}>Review Selected</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              movingNext();
            }}
            style={[styles.loginScreenButton4, {backgroundColor: 'red'}]}
            //
            underlayColor="#fff">
            <Text style={{color: 'white', fontWeight: '700'}}>
              Confirm Booking
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default RateList;
