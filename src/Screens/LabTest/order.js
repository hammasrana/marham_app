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
import urid from 'urid';

import styles from './styles';

function Order({navigation, route}) {
  
  const itemData = route.params.data;
  console.log(itemData);
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
        <Text style={styles.headerText}>Order</Text>
        <Pressable style={styles.headerIcon}>
          <Text
            style={styles.headerIconText}
            onPress={() => {
              navigation.navigate('Final');
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
            Your Lab ID #
          </Text>
          <Text
            style={{
              marginTop: 9,
              alignSelf: 'center',
              fontWeight: '900',
              color: 'green',
              fontSize: 18,
            }}>
            {urid(6, 'num')}
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
              <Text style={{color: 'black', fontSize: 15, fontWeight: '700'}}>
                Name:
              </Text>

              <Text style={{fontWeight: '700', marginLeft: 28}}>
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
                  color: 'black',
                  fontWeight: '700',
                  fontSize: 14,
                  lineHeight: 18,
                }}>
                Address:
              </Text>
              <Text
                style={{
                  bottom: 17,
                  marginLeft: 74,
                  fontSize: 14,
                  fontWeight: '700',
                }}>
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
            <Text style={{color: 'black',    marginLeft:5, fontSize: 14, fontWeight: '700'}}>
              PhoneNo:
            </Text>
            <Text style={{fontSize: 14,  marginLeft:10, fontWeight: '700'}}>
              {itemData.contactnumber}
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: '2.5%',
              marginRight: 116,
              justifyContent: 'space-around',
              flexDirection: 'row',
              paddingTop: '9%',
              bottom: 10,
            }}>
            <Text style={{fontWeight: '700', fontSize: 14, color: 'black'}}>
              Branch:
            </Text>
            <Text style={{fontWeight: '800'}}>{itemData.branche}</Text>
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
                fontWeight: '700',
                color: 'black',
              }}>
              Placement:
            </Text>
            <Text style={{marginRight: 23, fontWeight: '800'}}>
              Inorder Placement
            </Text>
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
          SubTotal
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
          <Text style={styles.loginText3}>Edit order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Order;
