import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useNavigation } from '@react-navigation/native';
import {View,Text,TouchableOpacity} from 'react-native';

import styles from "./styles";


const Available =()=>{
  const navigation = useNavigation();
    return(
      <>
      <View>
        <TouchableOpacity  
      onPress={()=>{ navigation.navigate('RateList')
     
      }}
          style={styles.loginScreenButton2}
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
        <Text>
          Chughtai Lab and Healthcare has been providing quality
          diagnostic services in Pakistan since 1983. Over the past 37
          years, we have focused on the provision of innovative and
          high-quality pathology services, and have expanded into
          multiple related areas of healthcare. Since our inception,
          we have delivered healthcare services to our patients with
          timely results and accurate diagnosis. The lab operates 24
          hours a day, every day of the year, ensuring our patients
          can avail our services at all times. Chughtai Lab operates
          STAT Labs in Lahore, Gujranwala, Multan, Rawalpindi and
          Karachi.
        </Text>
        <Text>
          These labs perform many common chemistry and immunology
          tests, dramatically reducing reporting time. All of the STAT
          Labs are equipped with automated analyzers of the same
          standard as the Central Lab in Lahore. Using automated
          instruments al all of these labs enables us to maintain the
          same high-standard of quality across the network. Chughtai
          Lab uses the Diasorin Liaison and the Abbott i10300SR
          instruments for Vitamin D testing.
        </Text>
      </View>
    </>
    )
  }
  export default Available;