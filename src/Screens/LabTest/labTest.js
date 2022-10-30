import React, {useEffect, useReducer, useState, useRef} from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './styles';
import {RNCamera} from 'react-native-camera';
import {Icon} from '@rneui/themed';
import axios from 'axios';
import {Searchbar} from 'react-native-paper';
import Modal from 'react-native-modal';


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const LabTest = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshing,setRefreshing]=useState(false);  
  const [searchQuery, setSearchQuery] = useState('');
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activecity, setactivecity] = useState('lahore');
  const [filteredData, setFilteredData] = useState([]);
  const [showindicator, setShowindicator] = useState(false);
  const [citysearch, setcitysearch] = useState([]);

  const isMounted = useRef(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const onChangeSearch = query => {
    setSearchQuery(query);
    console.log(searchQuery);
  };
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const showingIndicator = () => {
    setShowindicator(true);
    setTimeout(() => {
      setShowindicator(false);
    }, 300);
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  useEffect(() => {
    if (data.length === 0) {
      setIsLoading(true);
      console.log('Data fetching...');
    } else setIsLoading(false);
     axios
      .get('https://health-caree.herokuapp.com/Labtests')
      .then(res => {
        setFilteredData(res.data);
        setData(res.data);
      })
      .catch(err => console.log(err));
  }, [data?.length]);

  const cityData = [
    {
      id: 1,
      city: 'lahore',
    },
    {
      id: 2,
      city: 'islamabad',
    },
    {
      id: 3,
      city: 'karachi',
    },
    {
      id: 4,
      city: 'sargodha',
    },
    {
      id: 5,
      city: 'peshawar',
    },
    {
      id: 6,
      city: 'hyderabad',
    },

    {
      id: 7,
      city: 'Mardan',
    },
    {
      id: 8,
      city: 'NawabShah', 
    },
    {
      id: 9,
      city: 'Mureedke',
    },
    {
      id: 10,
      city: 'TobaTeikSingh',
    },
    {
      id: 11,
      city: 'sialkot',
    },
  ];
  useEffect(() => {
    setcitysearch(cityData);
  }, [cityData.length]);

  const renderitem = (item, index) => {
    if (searchQuery === '') {
      return (
        <View style={styles.cardContainer} key={index} value={filteredData}>
          <View>
            <Modal
              style={{
                marginTop: 140,
                marginHorizontal: 0,
                marginBottom: 0,
                backgroundColor: '#f4f4f4f4',
              }}
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}>
              <View style={{flex: 1, backgroundColor: 'white'}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 15,
                    marginHorizontal: 12,
                  }}>
                  <Searchbar
                    placeholder="Search"
                    onChangeText={text => {
                      setSearch(text);
                    }}
                    value={search}
                  />
                </View>
                {/* <ScrollView> */}
                <View style={{flex: 9, margin: 2, bottom: 10}}>
                  {showindicator == true ? (
                    <ActivityIndicator color={'#014e78'} size={50} />
                  ) : (
                    <ScrollView contentContainerStyle={{paddingBottom: 30}}>
                      {citysearch.map(item => {
                        if (search === '') {
                          return (
                            <TouchableOpacity
                              key={item.id}
                              showsVerticalScrollIndicator={true}
                              style={{
                                flexDirection: 'row',
                                width: '90%',
                                marginHorizontal: '5%',
                                marginBottom: 10,
                                height: 60,
                                paddingHorizontal: 10,
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                borderRadius: 10,
                                elevation: 5,
                                backgroundColor: 'white',
                              }}
                              onPress={() => {
                                setactivecity(item.city);
                                toggleModal();
                              }}>
                              <Text style={styles.item}>{item.city}</Text>
                              <Icon
                                name="right"
                                type="antdesign"
                                color={'#014e78'}
                                size={24}
                              />
                            </TouchableOpacity>
                          );
                        }
                        if (
                          item.city
                            .toUpperCase()
                            .includes(
                              search.toUpperCase().trim().replace(/\s/g, ''),
                            )
                        ) {
                          return (
                            <TouchableOpacity
                              key={item.id}
                              showsVerticalScrollIndicator={true}
                              style={{
                                flexDirection: 'row',
                                width: '90%',
                                marginHorizontal: '5%',
                                marginBottom: 10,
                                height: 60,
                                paddingHorizontal: 10,
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                borderRadius: 10,
                                elevation: 5,
                                backgroundColor: 'white',
                              }}
                              onPress={() => {
                                setactivecity(item.city);
                                toggleModal();
                              }}>
                              <Text style={styles.item}>{item.city}</Text>
                              <Icon
                                name="right"
                                type="antdesign"
                                color={'#014e78'}
                                size={24}
                              />
                            </TouchableOpacity>
                          );
                        }
                      })}
                    </ScrollView>
                  )}
                </View>
              </View>
            </Modal>
          </View>
          <View style={styles.offtextcontainer}>
            <Text style={styles.offtext}>{item.offers}</Text>
          </View>
          <View style={styles.wholeContainer}>
            <View style={styles.imageContainer}>
              <Image style={styles.cardimage} source={{uri: `${item.icon}`}} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.headingText}>{item.name}</Text>
              <Text style={{top: 4, fontSize: 14}}>
                {' '}
                Available branches:{item.quantity}
              </Text>
              <Text style={{top: 4, marginLeft: 5}}>{item.timings}</Text>
            </View>
          </View>
          <View style={styles.wholeButtonContainer}>
            <Pressable
              onPress={() => navigation.navigate('Profile', {data: item})}
              style={[styles.buttonContainer, {backgroundColor: 'white'}]}>
              <Text style={[styles.buttonText, {color: '#014e78'}]}>
                View Profile
              </Text>
            </Pressable>
            <Pressable
              style={styles.buttonContainer}
              onPress={() => navigation.navigate('RateList', {data: item})}>
              <Text style={styles.buttonText}>Select Tests</Text>
            </Pressable>
          </View>
        </View>
      );
    }
    if (
      item.name
        .toUpperCase()
        .includes(searchQuery.toUpperCase().trim().replace(/\s/g, ''))
    ) {
      return (
        <View style={styles.cardContainer} key={index} value={filteredData}>
          <View>
            <Modal
              style={{
                marginTop: 140,
                marginHorizontal: 0,
                marginBottom: 0,
                backgroundColor: '#f4f4f4f4',
              }}
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}>
              <View style={{flex: 1, backgroundColor: 'white'}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 15,
                    marginHorizontal: 12,
                  }}>
                  <Searchbar
                    placeholder="Search"
                    onChangeText={text => {
                      setSearch(text);
                      value = {searchQuery};
                    }}
                  />
                </View>
                {/* <ScrollView> */}
                <View style={{flex: 9, margin: 2, bottom: 10}}>
                  {showindicator == true ? (
                    <ActivityIndicator color={'#014e78'} size={50} />
                  ) : (
                    <ScrollView contentContainerStyle={{paddingBottom: 30}}>
                      {citysearch.map(item => {
                        return (
                          <TouchableOpacity
                            key={item.id}
                            showsVerticalScrollIndicator={true}
                            style={{
                              flexDirection: 'row',
                              width: '90%',
                              marginHorizontal: '5%',
                              marginBottom: 10,
                              height: 60,
                              paddingHorizontal: 10,
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              borderRadius: 10,
                              elevation: 5,
                              backgroundColor: 'white',
                            }}
                            onPress={() => {
                              setactivecity(item.city);
                              toggleModal();
                            }}>
                            <Text style={styles.item}>{item.city}</Text>
                            <Icon
                              name="right"
                              type="antdesign"
                              color={'#014e78'}
                              size={24}
                            />
                          </TouchableOpacity>
                        );
                      })}
                    </ScrollView>
                  )}
                </View>
              </View>
            </Modal>
          </View>
          <View style={styles.offtextcontainer}>
            <Text style={styles.offtext}>{item.offers}</Text>
          </View>
          <View style={styles.wholeContainer}>
            <View style={styles.imageContainer}>
              <Image style={styles.cardimage} source={{uri: `${item.icon}`}} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.headingText}>{item.name}</Text>
              <Text style={{top: 4, fontSize: 14}}>
                {' '}
                Available branches:{item.quantity}
              </Text>
              <Text style={{top: 4, marginLeft: 5}}>{item.timings}</Text>
            </View>
          </View>
          <View style={styles.wholeButtonContainer}>
            <Pressable
              onPress={() => navigation.navigate('Profile', {data: item})}
              style={[styles.buttonContainer, {backgroundColor: 'white'}]}>
              <Text style={[styles.buttonText, {color: '#014e78'}]}>
                View Profile
              </Text>
            </Pressable>
            <Pressable
              style={styles.buttonContainer}
              onPress={() => navigation.navigate('RateList', {data: item})}>
              <Text style={styles.buttonText}>Select Tests</Text>
            </Pressable>
          </View>
        </View>
      );
    }
  };

  return (
    <View style={styles.mainContainer} >
      
      <StatusBar barStyle="light-content" backgroundColor={'#014e78'} />
      {/* header */}

      <View style={styles.headerConatiner}>
        <Pressable
          onPress={() => {
            navigation.goBack();
            // setcity('lahore')
            // getfetch();
          }}>
          <Icon name="arrowleft" type="antdesign" color={'#014e78'} />
        </Pressable>
        <Text style={styles.headerText}>Book Lab Test</Text>

        <Pressable
          style={styles.headerIcon}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text style={styles.headerIconText}>Skip?</Text>
        </Pressable>
      </View>

      {/* location container */}
      <View style={styles.locationContainer}>
        
        <View style={styles.locationTextContainer}>
          <Icon name="marker" type="foundation" color={'#014e78'} />

          <View>
            <TouchableOpacity
              onPress={() => {
                toggleModal(), showingIndicator();
              }}>
              <Text
                style={{
                  paddingLeft: 5,
                  width: '100%',
                  fontSize: 16,
                  color: 'black',
                  fontWeight: '700',
                  textTransform: 'capitalize',
                }}>
                {activecity}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View></View>
      </View>

      {/* search bar */}

      <View style={styles.searchBarContainer}   
     
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
      
        <TextInput
          style={styles.searchBartext}
          placeholder="Search Test (CBC, CT Scan etc) "
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <Pressable style={styles.searchBarIcon}>
          <Icon name="search1" type="antdesign" color={'grey'} />
        </Pressable>
      </View>

      {isLoading === true ? (
        <ActivityIndicator size={50} color="#014e78" />
      ) : (
        <ScrollView
          contentContainerStyle={{marginBottom: 50}}
          showsVerticalScrollIndicator={false}>
          {filteredData?.map((item, index) => {
            return (
              <>
                {item.city == 'lahore' && activecity == 'lahore'
                  ? renderitem(item, index)
                  : item.city == 'islamabad' && activecity == 'islamabad'
                  ? renderitem(item, index)
                  : item.city == 'karachi' && activecity == 'karachi'
                  ? renderitem(item, index)
                  : item.city == 'sargodha' && activecity == 'sargodha'
                  ? renderitem(item, index)
                  : item.city == 'sialkot' && activecity == 'sialkot'
                  ? renderitem(item, index)
                  : item.city == 'peshawar' && activecity == 'peshawar'
                  ? renderitem(item, index)
                  : item.city == 'hyderabad' && activecity == 'hyderabad'
                  ? renderitem(item, index)
                  : item.city == 'NawabShah' && activecity == 'NawabShah'
                  ? renderitem(item, index)
                  : item.city == 'Mardan' && activecity == 'Mardan'
                  ? renderitem(item, index)
                  : item.city == 'Mureedke' && activecity == 'Mureedke'
                  ? renderitem(item, index)
                  : item.city == 'Tobateiksingh' &&
                    activecity == 'Tobateiksingh'
                  ? renderitem(item, index)
                  : null}
              </>
            );
          })}

          <View style={{height: 30}}></View>
        </ScrollView>
      )}
    </View>
  );
};
export default LabTest;
