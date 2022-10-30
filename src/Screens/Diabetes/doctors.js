import React from "react";
import { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions, Image} from 'react-native';
  import {Icon} from '@rneui/themed';
// import {Icon} from 'react-native-elements';


const Hospital = ({name, address,wDays,timing,price,btn})=>(
    <View style={[styles.container,styles.shadow,styles.sWidth,{borderRadius:8,
      backgroundColor: 'white',margin: 6,}]}>
      <View style={{flex: 4}}>
        <View style={[styles.container,{padding: 8}]}>
          <Text>{name}</Text>
          <Text style={{fontSize: 12}}>{address}</Text>
        </View>
        <View style={[styles.container,{flexDirection: 'row',padding: 8}]}>
          <View style={{flex: 8}}>
            <Text>{wDays}</Text>
            <Text style={{fontSize: 12}}>{timing}</Text>
          </View>
          <View style={{flex: 2}}>
            <Text>{price}</Text>
          </View>
        </View>
      </View>
      <View style={[styles.setCenter,{flex: 3,padding: 8}]}>
        <TouchableOpacity style={[styles.button,styles.shadow,
          {borderWidth: 1,borderColor: 'red'}]} 
          onPress={console.log("TouchableOpacity pressed")}>
          <Text>{btn}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  
  const Doctor =({name,image,review,degree,desig,work,hospital})=>(
    <View style={[styles.container,styles.shadow,{backgroundColor: 'white',margin: 10,padding: 5,
      borderRadius: 10}]}>
      <View style={{flex: 3}}>
        <View style={{flex: 9.2,flexDirection: 'row'}}>
          <View style={{flex: 2}}>
            <Image
              style={{height: 70,width: 70, borderRadius: 150/2}}
              source={{uri:image}}/>
          </View>
          <View style={{flex: 8,padding: 2}}>
            <Text style={styles.largeText}>{name}{'\n'}</Text>
            <Text>{degree}</Text>
            <Text>{desig}</Text>
          </View>
        </View>
        <View style={{flex: 0.8, flexDirection: 'row',padding: 5}}>
          <View style={{flex: 2}}>
            <Icon
              style={styles.tiniIcon}
              type='material'
              name='star'
              color='yellow' />
            <Text>{review}</Text>
          </View>
          <View style={{flex: 8}}>
            <Icon
              style={styles.tiniIcon}
              type='material'
              name='verified'
              color='green' />
            <Text style={{color: 'green'}}>PCM Varified</Text>
          </View>
        </View>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          horizontal
          data ={work}
          renderItem={({item})=>(
            <TouchableOpacity style={{padding: 5,borderWidth: 1,borderColor: 'blue',
              borderRadius: 5}}>
              <Text style={{color: 'blue'}}>{item}</Text>
            </TouchableOpacity>
          )}
          />
      </View>
      <View style={{flex: 4}}>
        <FlatList
          horizontal
          data= {hospital}
          renderItem={({item})=>(
            <Hospital name={item.name} address={item.address} wDays={item.wDays}
              timing={item.timing} price={item.price} btn={item.btn} />
          )}
          keyExtractor={item => item.key}/>
      </View>
      <View style={{flex: 2,flexDirection: 'row'}}>
        <View style={[styles.container]}>
          <TouchableOpacity style={[styles.button,styles.shadow,styles.setCenter,
            {borderWidth: 1,borderColor: 'red',paddingHorizontal: 4,paddingVertical: 15,height: 65}]} 
            onPress={console.log("TouchableOpacity pressed")}>
            <Text style={{color: 'red'}}>Book Appointment</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.container]}>
          <TouchableOpacity style={[styles.button,styles.shadow,styles.setCenter,
            {borderWidth: 1,borderColor: 'red',backgroundColor: 'blue',paddingHorizontal: 4,paddingVertical: 15,height: 65}]} 
            onPress={console.log("TouchableOpacity pressed")}>
            <Text style={{color: 'white'}}>Video Consultant</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.container]}>
          <TouchableOpacity style={[styles.button,styles.shadow,styles.setCenter,
            {borderWidth: 1,borderColor: 'red',backgroundColor: 'red',paddingHorizontal: 4,paddingVertical: 15,height: 65}]} 
            onPress={console.log("TouchableOpacity pressed")}>
            <Text style={{color: 'white'}}>View Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );  

export default function Doctors(){
    // ذیا بیطس لے مریضوں کی دیکھ بھال
  // نشونما اور بلوغت کے مسائل
  // حمل میں ذیا بیطس
  const [doctor,setDoctor] = useState([
    { key: 0, name:'Dr. Gulshad Hasan', degree:'| MBBS | MRCP (UK) | FRCP (UK) | SC',
      image: 'https://q4q4u7z4.stackpathcdn.com/assets/doctors/7773/dr-gulshad-hasan-endocrinologist-lahore_170X170.jpg',
      desig:'Head of Department with over 30 years of experience.',review: 339,
      work:['ذیا بیطس لے مریضوں کی دیکھ بھال','نشونما اور بلوغت کے مسائل','حمل میں ذیا بیطس'],
      hospital:[
        {key: 0, name: 'Video Consultation Hospital',address: 'Audio/Video',
          wDays: 'Mon, Tue, Thur', timing:'6:30PM-7:30PM', price: 2500, btn: 'Consult Online'},
        {key: 1, name: 'National Hospital & Medical Center',address: 'DHA Defence Lahore',
          wDays: 'Wed, Sat', timing:'6:00PM-8:00PM', price: 3000, btn: 'Book Appointment'},
        {key: 2, name: 'Dr, Amena Endocrinology Clinic',address: 'Garden Town, Lahore',
          wDays: 'Mon, Tue, Thur', timing:'3:00PM-5:30PM', price: 2500, btn: 'Book AppointMent'},  
      ]},
    { key: 1, name:'Dr. Amena Moazzam baig', degree:'| MBBS | MRCP | FCPS (Medicine) | FCPS',
      image: 'https://q4q4u7z4.stackpathcdn.com/assets/doctors/7782/dr-amena-moazzam-baig-endocrinologist-lahore_450X450.jpg',
      desig:'Consultant with over 18 years of experience.',review: 497,
      work:['ذیا بیطس لے مریضوں کی دیکھ بھال','نشونما اور بلوغت کے مسائل','حمل میں ذیا بیطس'],
      hospital:[
        {key: 0, name: 'Video Consultation Hospital',address: 'Audio/Video',
          wDays: 'Mon, Tue, Thur', timing:'6:30PM-7:30PM', price: 2500, btn: 'Consult Online'},
        {key: 1, name: 'National Hospital & Medical Center',address: 'DHA Defence Lahore',
          wDays: 'Wed, Sat', timing:'6:00PM-8:00PM', price: 3000, btn: 'Book Appointment'},
        {key: 2, name: 'Dr, Amena Endocrinology Clinic',address: 'Garden Town, Lahore',
          wDays: 'Mon, Tue, Thur', timing:'3:00PM-5:30PM', price: 2500, btn: 'Book AppointMent'},  
      ]},
    { key: 2, name:'Dr. Matiullah', degree:'| MBBS (Gold Medalist) | FCPS (diabetes)',
      image: 'https://q4q4u7z4.stackpathcdn.com/assets/doctors/17228/dr-matiullah-endocrinologist-quetta-60_450X450.jpg',
      desig:'Consultant with over 8 years of experience.',review: 365,
      work:['ذیا بیطس لے مریضوں کی دیکھ بھال','نشونما اور بلوغت کے مسائل','حمل میں ذیا بیطس'],
      hospital:[
        {key: 0, name: 'Video Consultation Hospital',address: 'Audio/Video',
          wDays: 'Mon, Tue, Thur', timing:'6:30PM-7:30PM', price: 2500, btn: 'Consult Online'},
        {key: 1, name: 'National Hospital & Medical Center',address: 'DHA Defence Lahore',
          wDays: 'Wed, Sat', timing:'6:00PM-8:00PM', price: 3000, btn: 'Book Appointment'},
        {key: 2, name: 'Dr, Amena Endocrinology Clinic',address: 'Garden Town, Lahore',
          wDays: 'Mon, Tue, Thur', timing:'3:00PM-5:30PM', price: 2500, btn: 'Book AppointMent'},  
      ]},    
  ]);
  const renderHosp = ({ item }) => (
    <Doctor name={item.name} image={item.image} degree={item.degree} 
      review={item.review} desig={item.desig} work={item.work} 
      hospital={item.hospital}/>
  );
  return(
    <View style={[styles.container,{padding: 2}]}>
      <FlatList
        //  horizontal
         data={doctor}
         renderItem={renderHosp}
         keyExtractor={item => item.key}
      />
    </View>
  );
}