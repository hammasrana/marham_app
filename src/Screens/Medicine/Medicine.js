import React, {useState, useEffect} from 'react';
import {Button, RadioButton} from 'react-native-paper';
import {
  View,
  StatusBar,
  Image,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import Geocoder from 'react-native-geocoding';
import Geolocation from 'react-native-geolocation-service';
import Modal from 'react-native-modal';
import MapView, {Marker} from 'react-native-maps';
import styles from './styles';
import {Icon} from '@rneui/themed';
const myApiKey = 'AIzaSyDbfbWiIvjK79U_aI8urPCbcxcMWEVirW4';

const Doc = ({navigation}) => {
  const [nImage, setnImage] = useState('');
  const [isModel, setIsModel] = useState(false);
  const [curloc, setcurloc] = useState('');
  const [patientname, setPatientName] = useState('');
  const [patientnumber, setPatientNumber] = useState('');
  const [activePage, setActivepage] = useState('medicine');
  const[medi,setMedi]=useState('');

  const [geoInfo, setGeoInfo] = useState({
    latitude: 32.074,
    longitude: 72.686,
  });
  console.log(geoInfo);
  const [position, setPosition] = useState({
  
    latitude: 31.582045,
    longitude: 74.329376,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const postLabData = async () => {
    if ((patientname === '')) {
      alert('Please Enter Patient Name');
    } else if (patientnumber === '') {
      alert('Please Enter Contact Number');
 
    }
    else if (medi === '') {
      alert('Please enter medicines');
    }
    else{
    return fetch('https://health-care-fyp.herokuapp.com/medicine', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: patientname,
        contactnumber: patientnumber,
        location: curloc,
        medicine:medi,
        
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log('data posted successfully ==========>>>..', responseJson);
        navigation.navigate('Medical',{itemData:responseJson})
      })
      .catch(error => {
        console.error('error while posting data =====>>>.', error);
      });
  };
}
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
  // console.log(geoInfo);
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
          <Pressable onPress={() => setActivepage('medicine')}>
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
              // coordinate={{ latitude : geoInfo.latitude , longitude : geoInfo.longitude }}
              coordinate={geoInfo}
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
          style={{
            marginLeft: 85,
            top: 2,
            margin: 15,
            paddingTop: 14,
            paddingBottom: 10,
            bottom: 20,
            borderRadius: 9,
            elevation: 2,
            //   borderColor: 'black',
            bottom: 1,
            width: 198,
            backgroundColor: 'blue',
            // alignContent:"center",
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => {
            getAddressFromCoordinates();
            setActivepage('medicine');
          }}
          underlayColor="#fff">
          <Text style={{color: 'white', fontWeight: '500'}}>Booking Now</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <>
      {activePage === 'medicine' ? (
        <SafeAreaView style={styles.mainContainer}>
          <StatusBar barStyle="light-content" backgroundColor={'#014e78'} />
          {/* header */}

          <View style={styles.headerConatiner}>
            <Pressable
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon name="arrowleft" type="antdesign" color={'#014e78'} />
            </Pressable>
            <Text style={styles.headerText}> Order Medicines</Text>
            <Pressable style={styles.headerIcon}>
              <Text
                style={styles.headerIconText}
                onPress={() => {
                  navigation.navigate('Home');
                }}>
                Skip
              </Text>
            </Pressable>
          </View>
          <ScrollView>
            <View style={styles.widgets1}>
              <Image
                style={{height: '100%', width: '100%', backgroundColor: 'red'}}
                source={require('../../assets/old.png')}
                blurRadius={0.8}
                resizeMode="cover"
                opacity={0.9}
              />
              <View
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: '900',
                    fontSize: 18,
                    bottom: 109,
                    marginRight: 78,
                  }}>
                  Order Your Medicine(s) Online
                </Text>
                <Text
                  style={{
                    color: 'white',
                    bottom: 107,
                    marginRight: 7,
                    fontWeight: '600',
                  }}>
                  upload prescription and get medicne(s) at cheapest rate
                </Text>
              </View>
            </View>
            <View>
              <Modal
                isVisible={isModel}
                animationType="slide"
                // transparent={false}
                // height='50%'
                style={{
                  margin: 20,
                  marginVertical: 150,
                  backgroundColor: 'white',
                }}>
                <View
                  style={{
                    paddingHorizontal: '35.5%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    right: 85,
                  }}>
                  <Icon
                    name="form"
                    type="antdesign"
                    color="#014e78"
                    size={44}
                    backgroundColor="#D4F1F4"
                  />
                  <Text
                    style={{
                      color: '#014e78',
                      fontSize: 17,
                      fontWeight: '800',
                      fontStyle: 'normal',
                      top: 13,
                      left: 20,
                    }}>
                    Fill Form
                  </Text>
                  <Text
                    style={{
                      color: '#014e78',
                      top: 39,
                      right: 50,
                      fontWeight: '400',
                      fontSize: 12,
                      paddingTop: 3,
                    }}>
                    Fill Form and Send order Request
                  </Text>
                </View>

                <View
                  style={{
                    paddingHorizontal: '35.5%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingTop: '15%',
                    right: 85,
                  }}>
                  <Icon
                    name="check"
                    type="antdesign"
                    color="#014e78"
                    size={44}
                    borderRadius={105}
                    backgroundColor="#D4F1F4"
                  />
                  <Text
                    style={{
                      color: '#014e78',
                      fontSize: 17,
                      fontWeight: '800',
                      fontStyle: 'normal',
                      top: 1,
                      left: 17,
                      paddingTop: 9,
                    }}>
                    Confirm Order
                  </Text>
                </View>

                <Text
                  style={{
                    color: '#014e78',
                    marginLeft: 103,
                    fontWeight: '400',
                    fontSize: 12,
                    marginTop: 5,
                  }}>
                  Confirm Your
                </Text>
                <Text
                  style={{
                    color: '#014e78',
                    marginLeft: 103,
                    fontWeight: '400',
                    fontSize: 12,
                    marginTop: 0,
                  }}>
                  order request
                </Text>

                <View
                  style={{
                    paddingHorizontal: '35.5%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingTop: '9%',
                    right: 85,
                  }}>
                  <Icon
                    name="shopping-bag"
                    color="#014e78"
                    size={44}
                    borderRadius={105}
                    backgroundColor="#D4F1F4"
                  />
                  <Text
                    style={{
                      color: '#014e78',
                      fontSize: 17,
                      fontWeight: '800',
                      fontStyle: 'normal',
                      top: 1,
                      left: 17,
                      paddingTop: 2,
                    }}>
                    Receive Order
                  </Text>
                </View>
                <Text
                  style={{
                    color: '#014e78',
                    marginLeft: 103,
                    fontWeight: '400',
                    fontSize: 12,
                    marginTop: 5,
                  }}>
                  Recieve your
                </Text>
                <Text
                  style={{
                    color: '#014e78',
                    marginLeft: 103,
                    fontWeight: '400',
                    fontSize: 12,
                    marginTop: 0,
                  }}>
                  order at your door
                </Text>

                <TouchableOpacity onPress={() => setIsModel(false)}>
                  <Text
                    style={{color: 'red', fontSize: 20, alignSelf: 'center',top:33,fontWeight:"800"}}>
                    Close
                  </Text>
                </TouchableOpacity>
              </Modal>

              <TouchableOpacity onPress={() => setIsModel(true)}>
                <Text
                  style={{
                    paddingTop: 44,
                    alignSelf: 'center',
                    fontWeight: '700',
                    fontSize: 16,
                    color: 'red',
                  }}>
                  How can you order medicine(s) Online
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <Text
                style={{
                  color: '#014e78',
                  paddingTop: 33,
                  marginLeft: 16,
                  fontSize: 16,
                  fontWeight: '600',
                }}>
                Fill the Following Form
              </Text>
            </View>

            <View style={{paddingTop: 65}}>
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
                onChangeText={(text) => setPatientName(text)}
                value={patientname}
                placeholderTextColor={'grey'}
                placeholder="Enter Name"
              />
              <TextInput
                style={styles.input}
                onChangeText={(text) => setPatientNumber(text)}
                value={patientnumber}
                placeholder="92  xxxxxxxxx"
              />
            </View>
            <TouchableOpacity
              onPress={() => setActivepage('location')}
              style={{
                height: 50,
                bottom: 90,
                alignItems: 'flex-start',
                flexDirection: 'row',
              }}>
              <RadioButton color="#014e78" />
              <Text style={{marginTop: 8, color: 'black', fontSize: 14}}>
                Choose your location
              </Text>
            </TouchableOpacity>
            <View
              style={{
                height: 80,
                width: '90%',
                borderWidth: 1,
                borderColor: 'grey',
                bottom: 95,
                borderRadius: 10,
                marginLeft: 10,
                // marginRight:0,
                // marginHorizontal: 10
              }}>
              <TextInput placeholder="Enter your address" value={curloc} />
            </View>
            <Text style={{marginTop: 8, fontSize: 14,bottom:93,left:29,color:"black"}}>
                Select your Medicine(s):
              </Text>
            <View
              style={{
                height: 80,
                width: '90%',
                borderWidth: 1,
                borderColor: 'grey',
                bottom:80,
                borderRadius: 10,
                marginLeft: 10,
                 
              }}>
              <TextInput placeholder="Select Medicine  E.g like panadol ,Disperion"
              onChangeText={(text)=>setMedi({text})}
              value={medi} />
            </View>
            <TouchableOpacity
              style={styles.loginScreenButton10}
              onPress={()=>{postLabData()}}
              underlayColor="#fff">
              <Text style={{color: 'white', fontWeight: '900'}}>
                Booking Now
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      ) : (
        Location()
      )}
    </>
  );
};
export default Doc;
