import React, {useEffect} from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  TextInput,
  Pressable,
  FlatList,
  PermissionsAndroid,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-crop-picker';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

import styles from './styles';
import {Icon} from '@rneui/themed';
import {Button, RadioButton} from 'react-native-paper';

import {useState} from 'react';
import Geocoder from 'react-native-geocoding';
import {ScrollView} from 'react-native';

import call from 'react-native-phone-call';
const myApiKey = 'AIzaSyDbfbWiIvjK79U_aI8urPCbcxcMWEVirW4';
function Final({navigation, route}) {
  const itemData = route.params.data;
  const list = route.params.confirmitem;
  const [patientname, setPatientName] = useState('');
  const [patientnumber, setPatientNumber] = useState('');
  const [image, setImage] = useState(require('../../assets/file2.jpg'));
  const [curloc, setcurloc] = useState('');
  const [nImage, setnImage] = useState('');
  const [checked, setChecked] = useState('first');
  const [activePage, setActivepage] = useState('confirm');
  const [isModalVisible, setModalVisible] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [visible, setVisible] = React.useState(false);
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
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [geoInfo, setGeoInfo] = useState({
    latitude: 32.074,
    longitude: 72.686,
  });
  const [position, setPosition] = React.useState({
    latitude: 31.582045,
    longitude: 74.329376,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const containerStyle = {
    backgroundColor: 'white',
    // padding: 20,
    // height: '49%',
    // width: '84%',
    // marginLeft: 28,
    // borderRadius: 13,
  };
  const postLabData = async () => {
    if (patientname === '') {
      alert('Please Enter Patient Name');
    } else if (patientnumber === '') {
      alert('Please Enter Contact Number');
    } else if (searchQuery === '') {
      alert('please select branch');
    } else {
      return fetch('https://health-care-fyp.herokuapp.com/book/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: patientname,
          title: list.title,
          rate: list.rate,
          discountrate: list?.discountrate,
          contactnumber: patientnumber,
          branche: searchQuery,
          location: curloc,
          document: nImage,
        }),
      })
        .then(response => response.json())
        .then(responseJson => {
          console.log('data posted successfully ==========>>>..', responseJson);
          navigation.navigate('Order', {data: responseJson});
        })
        .catch(error => {
          console.error('error while posting data =====>>>.', error);
        });
    }
  };
  const choosePhotoFromLibrary = () => {
    //   setnImage('')
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image.path);
      setnImage(image.path);
    });
  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const location1 = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          position => {
            var data = position.coords;
            setGeoInfo(data);
          },
          error => {
            console.log('error ==========>>>', error);
          },
          {enableHighAccuracy: true, timeout: 20000, maximumAge: 10000},
        );
      } else {
        alert('Loaction Permission denied');
      }
    } catch (e) {
      console.log('error 2 ===========>>', e);
    }
  };
  console.log(geoInfo);
  useEffect(() => {
    location1();
  }, []);
  const getAddressFromCoordinates = () => {
    Geocoder.init(myApiKey);
    Geocoder.from({
      latitude: geoInfo.latitude,
      longitude: geoInfo.longitude,
    })
      .then(json => {
        var addressComponent = json?.results[0]?.formatted_address;
        console.log(addressComponent);
        setcurloc(addressComponent);
      })
      .catch(error => console.warn(error));
  };

  const Location = () => {
    return (
      <View style={styles.mainContainer}>
        <StatusBar barStyle="light-content" backgroundColor={'#014e78'} />
        {/* header */}
        <View style={styles.headerConatiner}>
          <Pressable onPress={() => setActivepage('confirm')}>
            <Icon name="arrowleft" type="antdesign" color={'#014e78'} />
          </Pressable>
          <Text style={styles.headerText}>Location</Text>
          <Pressable
            onPress={() => {
              navigation.navigate('RateList');
            }}
            style={styles.headerIcon}>
            <Text style={styles.headerIconText}>Skip</Text>
          </Pressable>
        </View>

        <View>
          <MapView
            initialRegion={{
              latitude: geoInfo?.latitude,
              longitude: geoInfo?.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            showsUserLocation={true}
            showsMyLocationButton={true}
            followsUserLocation={true}
            showsCompass={true}
            scrollEnabled={true}
            zoomEnabled={true}
            pitchEnabled={true}
            rotateEnabled={true}
            style={{
              height: 550,
              width: 400,
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <Marker
              // coordinate={currentloc}
              coordinate={{
                latitude: geoInfo.latitude,
                longitude: geoInfo.longitude,
              }}
              // coordinate={geoInfo}
              style={{height: 40, width: 40}}></Marker>
          </MapView>

          <View
            style={{
              flex: 1,
              width: '95%',
              height: '100%',
              borderRadius: 2,
              backgroundColor: 'blue',
            }}></View>
        </View>
        <TouchableOpacity
          style={styles.loginScreenButton11}
          onPress={() => {
            getAddressFromCoordinates();
            setActivepage('confirm');
          }}
          underlayColor="#fff">
          <Text style={{color: 'white', fontWeight: '500'}}>Booking Now</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      {activePage === 'confirm' ? (
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
            <Text style={styles.headerText}>Confirm Lab Test</Text>
            <Pressable style={styles.headerIcon} onPress={showModal}>
              <Text style={styles.headerIconText}>Help?</Text>
            </Pressable>
          </View>
          <ScrollView contentContainerStyle={{paddingBottom: 30}}>
            <View style={styles.widgets8}>
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
                    <Text
                      style={{
                        bottom: 56,
                        marginLeft: 285,
                        fontWeight: '800',
                      }}>
                      {list?.discountrate}
                    </Text>
                    <Text
                      style={{
                        bottom: 56,
                        marginLeft: 285,
                        textDecorationLine: 'line-through',
                      }}>
                      {list.rate}
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: 18,
                      paddingRight: 10,
                      bottom: 65,
                      color: Theme.colors.primaryColor,
                    }}>
                    Enter Your Details
                  </Text>
                </View>
              </View>
            </View>
            <View style={{paddingTop: 144}}>
              <Text
                style={{
                  fontSize: 14,
                  marginLeft: 17,
                  bottom: 46,
                  fontWeight: '500',
                }}>
                Patients name
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  marginLeft: 17,
                  top: 14,
                  fontWeight: '500',
                }}>
                Phone Number
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={value => {
                  setPatientName(value);
                }}
                value={patientname}
                onClear={() => setPatientName()}
                placeholderTextColor={'grey'}
                placeholder="Enter Name"
              />
              <TextInput
                style={styles.input}
                onChangeText={value => setPatientNumber(value)}
                value={patientnumber}
                placeholder="92  xxxxxxxxx"
              />
            </View>
            <View>
              <Text style={{marginLeft: 17, bottom: 78}}>
                Select your Preference
              </Text>
              <View
                style={{
                  paddingHorizontal: '2.4%',
                  bottom: 64,
                  marginRight: 100,
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '50%',
                  }}>
                  <RadioButton
                    value="first"
                    color="#014e78"
                    status={checked === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('first')}
                  />
                  <Text style={{color: 'black', fontSize: 14, marginLeft: 5}}>
                    Lab visit
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',

                    alignItems: 'center',
                    width: '50%',
                  }}>
                  <RadioButton
                    value="second"
                    color="#014e78"
                    status={checked === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('second')}
                  />
                  <Text style={{color: 'black', fontSize: 14, marginLeft: 5}}>
                    Home sample
                  </Text>
                </View>
              </View>
              {checked === 'first' ? null : (
                <View
                  style={{
                    height: 100,
                    width: '100%',
                    marginHorizontal: '2.5%',
                  }}>
                  <View
                    style={{
                      height: 50,
                      bottom: 60,
                      alignItems: 'flex-start',
                      flexDirection: 'row',
                    }}>
                    <RadioButton
                      onPress={() => {
                        setActivepage('location');
                      }}
                      color="#014e78"
                    />
                    <Text
                      style={{
                        marginTop: 8,
                        color: 'black',
                        fontSize: 14,
                      }}>
                      Choose your location
                    </Text>
                  </View>
                  <View
                    style={{
                      height: 80,
                      width: '90%',
                      borderWidth: 1,
                      borderColor: 'grey',
                      bottom: 75,
                      borderRadius: 10,
                    }}>
                    <TextInput
                      placeholder="Enter your address"
                      value={curloc}
                      style={{padding: 20}}
                      multiline={true}
                    />
                  </View>
                </View>
              )}
              <Text
                style={{
                  color: '#014e78',
                  marginLeft: 22,
                  bottom: 34,
                  fontWeight: '600',
                }}>
                Choose Branch of {itemData?.name}
              </Text>

              <Pressable onPress={() => setModalVisible(!isModalVisible)}>
                <View style={styles.locationContainer5}>
                  <View style>
                    <Text style={{marginLeft: 12, top: 14}}>
                      {searchQuery === '' ? 'Select Branch' : searchQuery}
                    </Text>
                  </View>

                  <View style={styles.locationIcon}>
                    <Icon
                      name="chevron-down"
                      type="feather"
                      color={'#014e78'}
                      style={{marginLeft: 60}}
                    />
                  </View>
                </View>
              </Pressable>

              <View>
                <Modal
                  style={{
                    marginTop: 250,
                    marginHorizontal: 0,
                    marginBottom: 0,
                  }}
                  isVisible={isModalVisible}
                  onBackdropPress={() => setModalVisible(false)}
                  swipeDirection="left">
                  <View style={{flex: 1, backgroundColor: 'white'}}>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 15,
                        marginHorizontal: 12,
                      }}>
                      <Text
                        style={{
                          color: '#014e78',
                          fontSize: 22,
                          fontWeight: '500',
                          justifyContent: 'center',
                        }}>
                        Select Branch
                      </Text>
                    </View>
                    {/* <ScrollView> */}
                    <View style={{flex: 9, margin: 2}}>
                      <FlatList
                        data={itemData?.branches}
                        nestedScrollEnabled
                        renderItem={({item}) => (
                          <TouchableOpacity
                            style={{
                              flexDirection: 'row',
                              width: '90%',
                              marginHorizontal: '5%',
                              height: 60,
                              paddingHorizontal: 10,
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              borderRadius: 10,
                              elevation: 5,
                              marginTop: 5,
                              backgroundColor: 'white',
                              marginBottom: 5,
                            }}
                            onPress={() => {
                              setSearchQuery(item?.name);
                              toggleModal();
                            }}>
                            <Text style={styles.item}>{item?.name}</Text>
                            <Icon
                              name="right"
                              type="antdesign"
                              color={'#014e78'}
                              size={24}
                            />
                          </TouchableOpacity>
                        )}
                      />
                    </View>
                  </View>
                </Modal>
              </View>
              <Text
                style={{
                  marginLeft: 23,
                  paddingTop: 14,
                  color: '#014e78',
                  fontWeight: '500',
                }}>
                Attach prescription (Optional)
              </Text>
            </View>
            <View style={styles.widgets5}>
              <Image
                style={{
                  marginLeft: 133,
                  top: 10,
                  height: 47,
                  width: 54,
                  backgroundColor: '#D4F1F4',
                }}
                source={nImage === '' ? image : {uri: nImage}}
              />
              <Text style={{fontSize: 12, marginLeft: 76, top: 34}}>
                You can add Prescription/ Report here
              </Text>
              <TouchableOpacity
                style={styles.loginScreenButton9}
                onPress={choosePhotoFromLibrary}
                underlayColor="#fff">
                <Text style={styles.loginText1}> upload attachment</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.loginScreenButton10}
              onPress={() => {
                postLabData();
              }}
              underlayColor="#fff">
              <Text style={{color: 'white', fontWeight: '900'}}>
                Confirm Now
              </Text>
            </TouchableOpacity>

            <Modal isVisible={visible} onBackdropPress={hideModal}>
              <View
                style={{
                  backgroundColor: 'white',
                  height: 320,
                  width: '80%',
                  marginHorizontal: '10%',
                  alignItems: 'center',
                  borderRadius: 10,
                }}>
                <Image
                  style={{
                    height: 160,
                    width: 100,
                    backgroundColor: 'white',
                  }}
                  source={require('../../assets/screen2.png')}
                />
                <View
                  style={{
                    marginTop: 10,
                    backgroundColor: Theme.colors.primaryColor,
                    borderRadius: 67,
                    borderColor: '#fff',
                    width: 230,
                    height: 45,
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
                    marginTop: 10,
                    backgroundColor: Theme.colors.primaryColor,
                    borderRadius: 67,
                    borderColor: '#fff',
                    width: 230,
                    height: 45,
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
                <Text
                  style={{
                    fontSize: 16,
                    // marginLeft: 30,
                    fontWeight: 'bold',
                    color: 'black',
                    paddingTop: 20,
                    // top: 163,
                    // justifyContent: 'center',
                  }}>
                  Available 24/7 for you service
                </Text>
              </View>
            </Modal>
          </ScrollView>
        </View>
      ) : (
        Location()
      )}
    </>
  );
}

export default Final;
