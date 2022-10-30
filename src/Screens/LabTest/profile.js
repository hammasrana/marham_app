import React from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  TextInput,
  Pressable,
  FlatList,
  ScrollView,
  Touchable,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Linking, Alert, Platform} from 'react-native';
import styles from './styles';
import {Icon} from '@rneui/themed';
import {useState} from 'react';
import {Modal, Portal, Provider} from 'react-native-paper';
import call from 'react-native-phone-call';

function Profile({navigation, route}) {
  const itemData = route.params.data;
  const [inputValue, setInputValue] = useState('03213945208');
  const [inputValue1, setInputValue1] = useState('03099081766');
  const triggerCall = () => {

    if (inputValue.length != 11) {
      alert('Please insert correct contact number');
      return;
    }

    const args = {
      number: inputValue,
      prompt: true,
    };
    // Make a call
    call(args).catch(console.error);
  };
  const triggerCall1 = () => {
    // Check for perfect 10 digit length
    if (inputValue.length != 11) {
      alert('Please insert correct contact number');
      return;
    }

    const args = {
      number: inputValue1,
      prompt: true,
    };
    // Make a call
    call(args).catch(console.error);
  };
 
  const [selectedId, setSelectedId] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const onRefresh = () => {
    //set isRefreshing to true
    setIsRefreshing(true);
    // callApiMethod()
    setTimeout(() => {
      ({refresh: true});
    }, 100);
  };

  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: 'white',
    padding: 20,
    height: '49%',
    width: '84%',
    marginLeft: 28,
    borderRadius: 13,
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
        <Text style={styles.headerText} numberOfLines={1}>
          {itemData.name}
        </Text>
        <TouchableOpacity  onPress={showModal} style={styles.headerIcon}>
          <Text style={styles.headerIconText}>Help?</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => {
          return (
            <>
       

              <View style={styles.widgets}>
                <View style={styles.img}>
                  <Image
                    source={{uri: `${itemData.icon}`}}
                    resizeMode="contain"
                    style={{
                      width: 60,
                      height: 60,
                      marginLeft: 19,
                      top: 29,
                      borderRadius: 30,
                    }}
                  />
                  <View>
                    <Text style={styles.txt1}>{itemData.name}</Text>
                    <View style={styles.icon}>
                      <Image
                      
                        style={{
                          width: 16,
                          height: 16,
                          marginLeft: 105,
                          bottom: 19,
                        }}
                      />
                    </View>
                    <View style={styles.icon2}>
                      <Image
                        source={require('../../assets/time.png')}
                        style={{
                          width: 16,
                          height: 16,
                          marginLeft: 105,
                          bottom: 19,
                        }}
                      />

                      <View>
                        <Text style={styles.logotext}>{itemData.timings}</Text>
                      </View>

                      <TouchableOpacity
                        style={styles.loginScreenButton3}
                        onPress={() => {
                          navigation.navigate('RateList', {data: itemData});
                        }}
                        underlayColor="#fff">
                        <Text style={{color: 'white', fontWeight: '900'}}>
                          Get Discount
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={showModal}
                        style={styles.loginScreenButton1}
                        //   onPress={() => navigate('HomeScreen')}
                        underlayColor="#fff">
                        <Text style={styles.loginText1}>Call Now</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{
                  height: 50,
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '90%',
                  marginHorizontal: '5%',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{fontSize: 14, color: '#014e78', fontWeight: '600'}}>
                  Available Test
                </Text>

                <Pressable
                  onPress={() => {
                    navigation.navigate('RateList', {data: itemData});
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#014e78',
                      fontWeight: '500',
                      bottom: 6,
                      marginLeft: 12,
                    }}>
                    View All
                    <Icon
                      name="right"
                      type="antdesign"
                      color={Theme.colors.primaryColor}
                      style={{top: 3, marginLeft: 4}}
                      size={18}
                    />
                  </Text>
                </Pressable>
              </View>
            </>
          );
        }}
        refreshing={true}
        nestedScrollEnabled
        data={itemData?.test}
        renderItem={({item}) => {
          return (
            <Pressable
              onPress={() => {
                navigation.navigate('RateList', {data: itemData});
              }}>
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
            </Pressable>
          );
        }}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
        ListFooterComponent={() => {
          return (
            <>
              <View>
                <TouchableOpacity
                  style={styles.loginScreenButton2}
                  onPress={() => {
                    navigation.navigate('RateList', {data: itemData});
                  }}
                  underlayColor="#fff">
                  <Text style={styles.loginText2}>View Test Rate List</Text>
                </TouchableOpacity>
              </View>

              <View>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: '#014e78',
                    marginLeft: 23,
                  }}>
                  About us
                </Text>
              </View>
              <View style={styles.widgets2}>
                <Text numberOfLines={20}>{itemData.about}</Text>
              </View>
            </>
          );
        }}
      />

      <Provider>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 30,
                fontWeight: 'bold',
                paddingTop: 210,
                top: 163,
                justifyContent: 'center',
              }}>
              Available 24/7 for you service
            </Text>
            <Image
              style={{
                height: 160,
                width: 100,
                bottom: 141,
                backgroundColor: 'white',
                marginLeft: 82,
              }}
              source={require('../../assets/screen2.png')}
            />
            <View
              style={{
                marginRight: 10,
                marginLeft: 19,
                marginTop: 10,
                paddingBottom: 10,
                backgroundColor: Theme.colors.primaryColor,
                borderRadius: 67,
                borderWidth: 0,
                borderColor: '#fff',
                width: 230,
                height: 45,
                bottom: 166,
              }}>
              <Icon
                name="phone"
                type="antdesign"
                style={{
                  paddingTop: 12,
                  paddingLeft: 42,
                  borderRadius: 4,
                  marginRight: 130,
                  transform: [{rotateY: '180deg'}],
                }}
                color={'red'}
              />

              <Text
                onPress={triggerCall}
                style={{
                  color: 'white',
                  fontSize: 17,
                  bottom: 23,
                  marginLeft: 73,
                  fontWeight: '600',
                }}>
                03213945208
              </Text>
            </View>
            <View
              style={{
                marginRight: 10,
                marginLeft: 19,
                marginTop: 10,
                paddingBottom: 10,
                backgroundColor: Theme.colors.primaryColor,
                borderRadius: 67,
                borderWidth: 0,
                borderColor: '#fff',
                width: 230,
                height: 45,
                bottom: 166,
              }}>
              <Icon
                name="phone"
                type="antdesign"
                style={{
                  paddingTop: 12,
                  paddingLeft: 42,
                  borderRadius: 24,
                  marginRight: 130,
                  transform: [{rotateY: '180deg'}],
                }}
                color={'red'}
              />

              <Text
                onPress={triggerCall1}
                style={{
                  color: 'white',
                  fontSize: 17,
                  bottom: 23,
                  marginLeft: 73,
                  fontWeight: '600',
                }}>
                03099081766
              </Text>
            </View>
          </Modal>
        </Portal>
      </Provider>
    </View>
  );
}

export default Profile;
