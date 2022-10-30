import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Pressable,
  RefreshControl,
  ActivityIndicator,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import {Icon} from '@rneui/themed';
const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const Home = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  

 
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle="light-content" backgroundColor={'#014e78'} />
      {/* header */}
      <View style={styles.headerConatiner}>
        <Pressable>
          <Image
            style={styles.headerImage}
            source={require('../../assets/profile1.jpg')}
          />
        </Pressable>
        <Text style={styles.headerText}>Health Care App</Text>
        <Pressable style={styles.headerIcon}>
          <Icon name="bell" type="fontisto" color={'#014e78'} />
        </Pressable>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Search bar */}
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchBartext}
            placeholder="Search by Doctors,specialities and Hospital"
          />
          <Pressable style={styles.searchBarIcon}>
            <Icon name="search1" type="antdesign" color={'#014e78'} />
          </Pressable>
        </View>

        {/* Appoint bar */}
        <View style={styles.appointmentContainer}>
          <Pressable style={styles.searchBarIcon}>
            <Icon name="calendar" type="entypo" color={'#014e78'} />
          </Pressable>
          <Text style={styles.appointmentText}>Your appointments</Text>
          <Pressable style={styles.appointmentIcon}>
            <Icon name="right" type="antdesign" color={'#014e78'} />
          </Pressable>
        </View>

        {/* Doctor cards */}
        <View style={styles.cardWholeContainer}>
          <Pressable
            style={styles.cardminiContainer}
            onPress={() => {
              navigation.navigate('Doctor');
            }}>
            <View style={styles.cardText}>
              <Text style={styles.middleText}>Book Appointment</Text>
              <Text
                style={[
                  styles.middleText,
                  {
                    fontWeight: 'normal',
                    color: 'grey',
                    fontSize: 11,
                    marginTop: 2,
                  },
                ]}>
                16000+ PMC verified Doctors
              </Text>
            </View>
            <Image
              style={styles.cardImage}
              source={require('../../assets/doctor.jpg')}
            />
          </Pressable>

          <Pressable
            style={[styles.cardminiContainer, {backgroundColor: '#e7f3ff'}]}
            onPress={() => {
              navigation.navigate('Doctor');
            }}>
            <View style={styles.cardText}>
              <Text style={styles.middleText}>Online consultant</Text>
              <Text
                style={[
                  styles.middleText,
                  {
                    fontWeight: 'normal',
                    color: 'grey',
                    fontSize: 11,
                    marginTop: 2,
                  },
                ]}>
                Video consultant / Online Prescription
              </Text>
            </View>
            <View
              style={{
                overflow: 'hidden',
                height: '90%',
                width: '40%',
                marginVertical: '5%',
              }}>
              <Image
                style={styles.cardImage2}
                source={require('../../assets/doctorimg.jpg')}
              />
            </View>
          </Pressable>
        </View>

        {/* Explore more */}
        <View style={styles.exploreCardContainer}>
          <Text style={styles.exploreText}>Explore more</Text>
          <View style={styles.smallCardContainer}>
            <Pressable
              style={styles.eachCardContainer}
              onPress={() => {
                navigation.navigate('Doctor');
              }}>
              <Image
                source={require('../../assets/callingdoctor.png')}
                style={styles.eachCardImage}
              />
              <Text style={styles.eachCardText}>Call Doctor Now</Text>
            </Pressable>
            <Pressable
              style={styles.eachCardContainer}
              onPress={() => {
                navigation.navigate('LabTest');
              }}>
              <Image
                source={require('../../assets/lab.png')}
                style={styles.eachCardImage}
              />
              <Text style={styles.eachCardText}>Book Lab Tests</Text>
            </Pressable>
            <Pressable
              style={styles.eachCardContainer}
              onPress={() => {
                navigation.navigate('Doc');
              }}>
              <Image
                source={require('../../assets/medicines.png')}
                style={styles.eachCardImage}
              />
              <Text style={styles.eachCardText}>Order Medicine(s)</Text>
            </Pressable>
          </View>
          <View style={styles.smallCardContainer}>
            <Pressable style={styles.eachCardContainer}>
              <Image
                source={require('../../assets/diseases.png')}
                style={styles.eachCardImage}
              />
              <Text style={styles.eachCardText}>Search via Diseases</Text>
            </Pressable>
            <Pressable style={styles.eachCardContainer}>
              <Image
                source={require('../../assets/hospital.png')}
                style={styles.eachCardImage}
              />
              <Text style={styles.eachCardText}>View Hospital(s)</Text>
            </Pressable>
            <Pressable style={styles.eachCardContainer}>
              <Image
                source={require('../../assets/thinking.png')}
                style={styles.eachCardImage}
              />
              <Text style={styles.eachCardText}>Ask Doctor for Free</Text>
            </Pressable>
          </View>
        </View>

        {/* Health Community */}
        <View style={styles.healthContainer}>
          <Text style={styles.exploreText}>Health Community</Text>
          <TouchableOpacity style={styles.healthInnerContainer}>
            <View style={styles.healthinnermoreContainer}>
              <View style={styles.healthheadingText}>
                <Text
                  style={[
                    styles.healthinnerButtonText,
                    {fontSize: 16, marginTop: '2.5%'},
                  ]}>
                  Sugar patient Dizziness
                </Text>
                <Text style={[styles.healthDetailtext, {marginLeft: 0}]}>
                  Asking for Mother, Female, 61 years old, karachi
                </Text>
              </View>
              <View style={styles.healthMessagesContainer}>
                <Text
                  style={[
                    styles.healthDetailtext,
                    {marginLeft: 0, marginTop: 15},
                  ]}>
                  Meri mother 60+ hain or unhe achank se shadeed
                </Text>
                <View style={styles.healthMessageButton}>
                  <Icon
                    name="message-circle"
                    type="feather"
                    size={16}
                    color="#014e78"
                  />
                  <Text
                    style={[
                      styles.healthDetailtext,
                      {marginLeft: 5, color: '#014e78'},
                    ]}>
                    7
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={[
                styles.healthinnermoreContainer,
                {backgroundColor: '#e7f3ff', height: '60%'},
              ]}>
              <View style={styles.healthinnerTextContainer}>
                <Icon name="check" type="antdesign" color={'green'} size={16} />
                <Text style={styles.healthDetailtext}>Ask anonymously</Text>
              </View>
              <View style={styles.healthinnerTextContainer}>
                <Icon name="check" type="antdesign" color={'green'} size={16} />
                <Text style={styles.healthDetailtext}>
                  Free and ask question anytime
                </Text>
              </View>
              <View style={styles.healthinnerTextContainer}>
                <Icon name="check" type="antdesign" color={'green'} size={16} />
                <Text style={styles.healthDetailtext}>
                  Get replies from PMC verified Doctors
                </Text>
              </View>
              <View style={styles.healthinnerButtonContainer}>
                <Pressable style={styles.healthinnerButton}>
                  <Text style={styles.healthinnerButtonText}>
                    View All Questions
                  </Text>
                </Pressable>
                <Pressable
                  style={[
                    styles.healthinnerButton,
                    {backgroundColor: '#014e78'},
                  ]}>
                  <Text
                    style={[styles.healthinnerButtonText, {color: 'white'}]}>
                    Ask a Questions
                  </Text>
                </Pressable>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* consultant card */}
        <View style={styles.consultantContainer}>
          <View style={styles.consultantHeadingTextContainer}>
            <Text style={styles.consultantheadingText}>
              Consult Online with Top specialities
            </Text>
            <Text
              style={[
                styles.consultantheadingText,
                {fontWeight: 'normal', fontSize: 12},
              ]}>
              Anytime, Anywhere
            </Text>
          </View>
          <View style={styles.consultantImageContainer}>
            <Image
              style={styles.consultantImage}
              source={require('../../assets/doctorimg.jpg')}
            />
            <View style={{height: '100%'}}>
              <View style={styles.healthinnerTextContainer}>
                <Icon name="check" type="antdesign" color={'green'} size={16} />
                <Text style={styles.consultantDetailText}>
                  No Waiting, No Travel
                </Text>
              </View>
              <View style={styles.healthinnerTextContainer}>
                <Icon name="check" type="antdesign" color={'green'} size={16} />
                <Text style={styles.consultantDetailText}>
                  Secure and Refundable Payment
                </Text>
              </View>
              <View style={styles.healthinnerTextContainer}>
                <Icon name="check" type="antdesign" color={'green'} size={16} />
                <Text style={styles.consultantDetailText}>
                  Free Chat Follows-Ups
                </Text>
              </View>
              <View style={styles.healthinnerTextContainer}>
                <Icon name="check" type="antdesign" color={'green'} size={16} />
                <Text style={styles.consultantDetailText}>
                  Online Prescription
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.consultantbuttonContainer}>
            <Pressable style={styles.consultantButton}>
              <Text style={styles.consultantButtonText}>Consult Online</Text>
            </Pressable>
          </View>
        </View>

        {/* lab Test */}
        <View style={styles.labContainer}>
          <View style={styles.labHeadingContainer}>
            <Text style={styles.labHeadingText}>Book Lab Tests</Text>
          </View>
          <View style={styles.labImageContainer}>
            <Image
              style={styles.labImage}
              source={require('../../assets/blood.jpg')}
            />
          </View>
          <Text style={styles.labHeadingText}>25% Discount</Text>
          <Text style={styles.labdetailText}>Trusted Lab Partners</Text>
          <Pressable style={styles.labButton}>
            <Text style={styles.labButtonText}>Book Now</Text>
          </Pressable>
        </View>

        {/* top Searched diseases */}

        <View style={styles.diseaseContainer}>
          <Text style={styles.diseaseText}>Top - Searched Diseases</Text>
          <Text style={{color: 'grey'}}>
            Let's find the right doctor for your disease!
          </Text>
          <View style={styles.diseaseIconContainer}>
            <Pressable style={styles.diseaseIcon}>
              <Text style={styles.diseaseIconText}>Diabetes</Text>
            </Pressable>
            <Pressable style={styles.diseaseIcon}>
              <Text style={styles.diseaseIconText}>Hernia</Text>
            </Pressable>
            <Pressable style={styles.diseaseIcon}>
              <Text style={styles.diseaseIconText}>Migraine</Text>
            </Pressable>
          </View>
          <View style={styles.viewAllDisease}>
            <Text style={styles.viewAllText}>View All Diseases</Text>
          </View>
        </View>
        {/* footer container */}
        <View style={styles.bottomContainer}>
          <View style={styles.BottomHeadingText}>
            <Icon name="check" type="antdesign" color={'white'} size={26} />
            <View>
              <Text style={styles.consultantDetailText}>
                PMC Verified Doctors
              </Text>
              <Text style={styles.consultantDetailText}>
                16,000+ Doctors Available
              </Text>
            </View>
          </View>
          <View style={styles.BottomHeadingText}>
            <Icon name="check" type="antdesign" color={'white'} size={26} />
            <View>
              <Text style={styles.consultantDetailText}>
                12/7 Customer Support
              </Text>
              <Text style={styles.consultantDetailText}>
                Well-Trained and Supportive Team
              </Text>
            </View>
          </View>
          <View style={styles.BottomHeadingText}>
            <Icon name="check" type="antdesign" color={'white'} size={26} />
            <View>
              <Text style={styles.consultantDetailText}>
                Secure Online Payments
              </Text>
              <Text style={styles.consultantDetailText}>
                We possess SSL/ Secure certificate
              </Text>
            </View>
          </View>
        </View>

        {/* social Media container */}
        <View style={styles.footerContainer}>
          <Text style={styles.footerHeadingtext}>Follow Us 0n </Text>
          <View style={styles.footerImageContainer}>
            <Image
              source={require('../../assets/youtube1.jpg')}
              style={styles.footerImage}
            />
            <Image
              source={require('../../assets/facebook.png')}
              style={styles.footerImage}
            />
            <Image
              source={require('../../assets/images.jpg')}
              style={styles.footerImage}
            />
            <Image
              source={require('../../assets/blog.png')}
              style={styles.footerImage}
            />
          </View>
        </View>
        <View style={{height: 20}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
