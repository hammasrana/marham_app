import React,{useState} from 'react';
import Modal from "react-native-modal";

import {
  View,
  StatusBar,
  Image,
  Text,
  ActivityIndicator,
  TextInput,
  Pressable,
  Button,
  FlatList,
  ScrollView,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './styles';
import {Icon} from '@rneui/themed';
import { Searchbar } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const FindDoctor = ({navigation}) => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = React.useState(null);
  const [items, setItems] = React.useState([
    {label: 'Lahore', value: 'Lahore' },
    {label: 'Karachi', value: 'karachi',},
    {label: 'Islamabad', value: 'Islamabad',},
    {label: 'Sialkot', value: 'Sialkot',},
    {label: 'Sargodha', value: 'Sargodha',},
    {label: 'Mandi bahudin', value: 'Mandibahudin',}

  ]);
  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  const [isModalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
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
        <Text style={styles.headerText}>Choose speciality</Text>
        <Pressable style={styles.headerIcon}>
          <Text style={styles.headerIconText}>Help?</Text>
        </Pressable>
      </View>

     
     <View style={styles.locationContainer}>
        <View style={styles.locationTextContainer}>
          <Icon name="marker" type="foundation" color={'#014e78'} />
         
           <Text style={styles.locationText} onPress={toggleModal}>Lahore</Text> 
        
        </View>
        
       <Pressable style={styles.locationIcon}>
          <Icon name="chevron-down" type="feather" color={'#014e78'} />
        </Pressable> 
      </View>
      <View >
        <Modal 
          style={{marginTop: 250,marginHorizontal: 0,marginBottom: 0}}
          isVisible={isModalVisible}
          onBackdropPress={() => setModalVisible(false)}
          swipeDirection="left"
     
        >
        
        <View style={{ flex: 1,backgroundColor:'white' }}>
      <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',margin:15,marginHorizontal:12}}>
        <Searchbar
      placeholder="Search City"
      onChangeText={onChangeSearch}
      value={searchQuery}
    style={{
      backgroundColor: '#ECF0F1',
      
    }}
    />         
    </View>
    {/* <ScrollView> */}
    <View style={{flex: 12,margin: 15,bottom: 50}}>
     
      <FlatList
        data={[
          {key: 'Lahore'},
          {key: 'karachi'},
          {key: 'Peshawar'},
          {key: 'Isalmabad'},
          {key: 'lahore'},
          {key: 'Sargodha'},
          {key: 'Sialkot'},
          {key: 'mansera'}, 
          {key: 'Quetta'},
          {key: 'Manddibahudin'},
          // {key: 'Ali>'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}{item.image}  </Text>}
      />
    </View>
    
        </View>
      </Modal>
        </View>
      <View style={styles.searchBarContainer}>
        <Pressable style={styles.searchBarIcon}>
          <Icon name="search1" type="antdesign" color={'grey'} />
        </Pressable>
        <TextInput
          style={styles.searchBartext}
          placeholder="Search speciality "
        />
      </View>

      <View style={styles.scrollComponentContainer}>
        
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.componentheaderContainer}>
            <Text style={styles.componentheaderText}>Top Specialities</Text>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Pressable style={styles.imageContainer} ></Pressable>
            </View>
            <View style={styles.cardTextContainer}>
              <Pressable onPress={()=>navigation.navigate('Diabetes')}>
              <Text style={styles.cardheadingText}>Urologist</Text>
              <Text style={[styles.cardheadingText, {color: 'green'}]}>
                نظام اخراج کے سپیشلسٹ ڈاکٹر
              </Text>
              <Text style={styles.carddetailText}>413 Doctor Available</Text>
          </Pressable>
            </View>
            <Pressable style={styles.cardIcon}>
              <Icon name="right" type="antdesign" color={'green'} />
            </Pressable>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Pressable style={styles.imageContainer}onPress={()=>navigation.navigate('Diabetes')}></Pressable>
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardheadingText}>Dermatologist</Text>
              <Text style={[styles.cardheadingText, {color: 'green'}]}>
                امراض جلد کے سپیشلسٹ ڈاکٹر
              </Text>
              <Text style={styles.carddetailText}>872 Doctor Available</Text>
            </View>
            <Pressable style={styles.cardIcon}>
              <Icon name="right" type="antdesign" color={'green'} />
            </Pressable>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Pressable style={styles.imageContainer}onPress={()=>navigation.navigate('Diabetes')}></Pressable>
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardheadingText}>Psychiastrist</Text>
              <Text style={[styles.cardheadingText, {color: 'green'}]}>
                ماہر نفسیات (ڈاکٹر)
              </Text>
              <Text style={styles.carddetailText}>461 Doctor Available</Text>
            </View>
            <Pressable style={styles.cardIcon}>
              <Icon name="right" type="antdesign" color={'green'} />
            </Pressable>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Pressable style={styles.imageContainer}></Pressable>
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardheadingText}>Urologist</Text>
              <Text style={[styles.cardheadingText, {color: 'green'}]}>
                نظام اخراج کے سپیشلسٹ ڈاکٹر
              </Text>
              <Text style={styles.carddetailText}>413 Doctor Available</Text>
            </View>
            <Pressable style={styles.cardIcon}onPress={()=>navigation.navigate('Diabetes')}>
              <Icon name="right" type="antdesign" color={'green'} />
            </Pressable>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Pressable style={styles.imageContainer}></Pressable>
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardheadingText}>Gastroenterologist</Text>
              <Text style={[styles.cardheadingText, {color: 'green'}]}>
                معدے کے سپیشلسٹ ڈاکٹر
              </Text>
              <Text style={styles.carddetailText}>474 Doctor Available</Text>
            </View>
            <Pressable style={styles.cardIcon}>
              <Icon name="right" type="antdesign" color={'green'} />
            </Pressable>
          </View>
          <View style={styles.componentheaderContainer2}onPress={()=>navigation.navigate('Diabetes')}>
            <Text style={styles.componentheaderText}>
              All Specialities(A - Z)
            </Text>
            <Text style={styles.componentheaderText2}>
              5000+ verified Doctors
            </Text>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Pressable style={styles.imageContainer}></Pressable>
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardheadingText}>Acupuncture</Text>
              <Text style={[styles.cardheadingText, {color: 'green'}]}>
                سپیشلسٹ ڈاکٹر
              </Text>
              <Text style={styles.carddetailText}>9 Doctor Available</Text>
            </View>
            <Pressable style={styles.cardIcon}>
              <Icon name="right" type="antdesign" color={'green'} />
            </Pressable>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Pressable style={styles.imageContainer}></Pressable>
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardheadingText}>Allergy specialist</Text>
              <Text style={[styles.cardheadingText, {color: 'green'}]}>
                سپیشلسٹ ڈاکٹر
              </Text>
              <Text style={styles.carddetailText}>14 Doctor Available</Text>
            </View>
            <Pressable style={styles.cardIcon}onPress={()=>navigation.navigate('Diabetes')}>
              <Icon name="right" type="antdesign" color={'green'} />
            </Pressable>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Pressable style={styles.imageContainer}></Pressable>
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardheadingText}>Andrologist</Text>
              <Text style={[styles.cardheadingText, {color: 'green'}]}>
                سپیشلسٹ ڈاکٹر
              </Text>
              <Text style={styles.carddetailText}>9 Doctor Available</Text>
            </View>
            <Pressable style={styles.cardIcon}onPress={()=>navigation.navigate('Diabetes')}>
              <Icon name="right" type="antdesign" color={'green'} />
            </Pressable>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Pressable style={styles.imageContainer}></Pressable>
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardheadingText}>Anesthetist</Text>
              <Text style={[styles.cardheadingText, {color: 'green'}]}>
                سپیشلسٹ ڈاکٹر
              </Text>
              <Text style={styles.carddetailText}onPress={()=>navigation.navigate('Diabetes')}>45 Doctor Available</Text>
            </View>
            <Pressable style={styles.cardIcon}>
              <Icon name="right" type="antdesign" color={'green'} />
            </Pressable>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Pressable style={styles.imageContainer}></Pressable>
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardheadingText}>Audiologist</Text>
              <Text style={[styles.cardheadingText, {color: 'green'}]}>
                سپیشلسٹ ڈاکٹر
              </Text>
              <Text style={styles.carddetailText}>39 Doctor Available</Text>
            </View>
            <Pressable style={styles.cardIcon}>
              <Icon name="right" type="antdesign" color={'green'} />
            </Pressable>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Pressable style={styles.imageContainer}></Pressable>
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardheadingText}>
                Bariatric / Weight Loss Surgeon
              </Text>
              <Text style={[styles.cardheadingText, {color: 'green'}]}>
                سپیشلسٹ ڈاکٹر
              </Text>
              <Text style={styles.carddetailText}>14 Doctor Available</Text>
            </View>
            <Pressable style={styles.cardIcon}>
              <Icon name="right" type="antdesign" color={'green'} />
            </Pressable>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Pressable style={styles.imageContainer}></Pressable>
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardheadingText}>Cancer Specialist</Text>
              <Text style={[styles.cardheadingText, {color: 'green'}]}>
                سپیشلسٹ ڈاکٹر
              </Text>
              <Text style={styles.carddetailText}>13 Doctor Available</Text>
            </View>
            <Pressable style={styles.cardIcon}>
              <Icon name="right" type="antdesign" color={'green'} />
            </Pressable>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Pressable style={styles.imageContainer}></Pressable>
            </View>
            <View style={styles.cardTextContainer}>
              <Pressable onPress={navigation.navigate}>
              <Text style={styles.cardheadingText}>Cardiac Surgeon</Text>
              <Text style={[styles.cardheadingText, {color: 'green'}]}>
                سپیشلسٹ ڈاکٹر
              </Text>
              <Text style={styles.carddetailText}>122 Doctor Available</Text>
            
            </Pressable>
            </View>
            <Pressable style={styles.cardIcon}>
              <Icon name="right" type="antdesign" color={'green'} />
            </Pressable>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Pressable style={styles.imageContainer}></Pressable>
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardheadingText}>
                Cardiothoracic Anesthetist
              </Text>
              <Text style={[styles.cardheadingText, {color: 'green'}]}>
                معدے کے سپیشلسٹ ڈاکٹر
              </Text>
              <Text style={styles.carddetailText}>1 Doctor Available</Text>
            </View>
            <Pressable style={styles.cardIcon}>
              <Icon name="right" type="antdesign" color={'green'} />
            </Pressable>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Pressable style={styles.imageContainer}></Pressable>
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardheadingText}>Chest Surgeon</Text>
              <Text style={[styles.cardheadingText, {color: 'green'}]}>
                سپیشلسٹ ڈاکٹر
              </Text>
              <Text style={styles.carddetailText}>6 Doctor Available</Text>
            </View>
            <Pressable style={styles.cardIcon}>
              <Icon name="right" type="antdesign" color={'green'} />
            </Pressable>
          </View>
          <View style={{height: 100}}></View>
        </ScrollView>
      </View>
    </View>
  );
};
export default FindDoctor;
