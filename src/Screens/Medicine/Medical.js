import React from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {Icon} from '@rneui/themed';
import styles from './styles';
import urid from 'urid';

function Medical({navigation, route}) {
    
  const itemData = route.params.itemData;

  // console.log(itemData);
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
        <Text style={styles.headerText}>Confirm Medicines</Text>
        <Pressable style={styles.headerIcon}>
          <Text
            style={styles.headerIconText}
            onPress={() => {
              navigation.navigate('Doc');
            }}>
            Skip
          </Text>
        </Pressable>
      </View>

      <View style={styles.widgets12}>
        <View style={{width: '100%'}}>
          <Text
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              fontWeight: '500',
              marginTop: 15,
              fontSize: 16,
            }}>
            Your medicine ID #:
          </Text>
          <Text style={{color:"green",fontSize:19,fontWeight:"800",paddingHorizontal:"37%"}}>{urid(6,'num')}</Text>
          <Text
            style={{
              marginTop: 9,
              alignSelf: 'center',
              fontWeight: '900',
              color: 'green',
              fontSize: 18,
            }}>
             {itemData.id}
          </Text>
          <View
            style={{
              height: 50,
              width: '100%',
              paddingHorizontal: '2.5%',
            }}>
            <View
              style={{
                height: '100%',
                alignItems: 'center',
                flexDirection: 'row',
                width: '50%',
              }}>
              <Text style={{fontWeight:"bold", fontSize: 16,paddingHorizontal:'3.5%',color:"black"}}>
                Name:
              </Text>
              <Text style={{paddingHorizontal:"16.5%"}}>
              {itemData.name}
              </Text>
            </View>
            <View
              style={{
                height: 50,
                width: '100%',
              }}>
              <Text
                style={{
                 fontWeight:"bold",
                  fontSize: 14,
                  lineHeight: 18,
                  paddingHorizontal:"2.4%",
                  color:"black"
                }}>
                Address:  
              </Text>
              <Text style={{paddingHorizontal:"2.5%",bottom:17,left:44,paddingHorizontal:"12.5%"}}>
              {itemData?.location}
              </Text>
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: '2.5%',
              height: 50,
              width: '50%',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 45,
            }}>
            <Text style={{ fontSize: 14, fontWeight: '900',Left:23,paddingHorizontal:"5.5%",color:"black"}}>
        Phone:     
            </Text>
            <Text style={{paddingHorizontal:"2.5%",paddingHorizontal:"12.5%"}}>
            {itemData.contactnumber}
              </Text>
          </View>
        
          <View
            style={{
              paddingHorizontal: '1.5%',
              marginRight: 103,
              justifyContent: 'space-around',
              flexDirection: 'row',
              paddingTop: '9%',
              bottom: 10,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '800',
                right: 1,
                color:"black"

              }}>
              Placement:   
            </Text>
            <Text style={{marginRight:19}}> inorder Placement </Text>
          </View>
        </View>
      </View>
      <View style={styles.widgets15}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: '0.1%',
            justifyContent: 'space-between',
            top: 10,
          }}>
          <Text>{itemData.title}</Text>
          <Text style={{textDecorationLine: 'line-through', marginLeft: 140}}>
            {itemData.rate}
          </Text>
          <Text style={{color: 'green', fontWeight: '800', marginLeft: 20}}>
            {itemData.discountrate}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: '2.5%',
          justifyContent: 'space-between',
          marginTop: 20,
          bottom: 12,
        }}>
        <Text
          style={{
            color: '#014e78',
            fontWeight: '900',
            fontSize: 16,
            marginLeft: 10,
          }}>
          
        </Text>
        <Text style={{textDecorationLine: 'line-through', marginLeft: 140}}>
          {itemData.rate}
        </Text>
        <Text style={{color: 'green', fontWeight: '800', marginLeft: 20}}>
          {itemData.discountrate}
        </Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.loginScreenButton30}
          underlayColor="#fff">
          <Text style={styles.loginText3}>Edit </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Medical;
