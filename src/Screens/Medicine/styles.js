import React from 'react';
import {StyleSheet, Dimensions,StatusBar} from 'react-native';
import {moderateScale} from '../../Theme/Dimensions';
import Theme from '../../Theme/Theme';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Theme.colors.whiteColor,
    width: '100%',
    // alignItems: 'center',
    // paddingTop: StatusBar.currentHeight,
  },
  headerConatiner: {
    height: (height / 100) * 8,
    width: (width / 100) * 100,
    backgroundColor: Theme.colors.whiteColor,
    borderBottomColor: Theme.colors.grayColor,
    borderBottomWidth: 0.5,
    paddingHorizontal: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ld1:
  {
    width:339,
    marginLeft:14,


  },
  picker1:
  {
    width:"90%",borderRadius:12,borderColor:"transparent",marginLeft:20,
  },
  iconStyle:{
    height:moderateScale(30),
    width:moderateScale(30),
    flexDirection:"row"
  },
  headerText: {
    fontFamily: Theme.fontFamily.bold,
    fontSize: Theme.fontSizes.big,
    fontWeight: '800',
    alignSelf: 'center',
    color: Theme.colors.primaryColor,
  },
  headerImage: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: moderateScale(20),
    overflow: 'hidden',
  },
  widgets1:{
    backgroundColor:'#fff',
    elevation: 5,
    borderBottomWidth:0,
    height:moderateScale(300),
    width:"95%",
    marginHorizontal:moderateScale(10),
    // flex: 1,
    // height:160,
    // marginLeft: 15,
    // marginRight: 15,
    borderRadius:10,
    

    top:12,
  },
  headerIcon: {
    // marginRight: moderateScale(2.5),
    width: moderateScale(70),
    backgroundColor: 'red',
    height: moderateScale(40),
    borderRadius: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIconText: {
    color: Theme.colors.whiteColor,
    fontSize: Theme.fontSizes.xmedium,
    fontWeight: '600',
  },

  locationContainer: {
    width: '90%',
    height: moderateScale(40),
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: '5%',
    marginTop: moderateScale(20),
    borderBottomColor: '#cfd0d1',
    borderBottomWidth: 0.5,
    backgroundColor: Theme.colors.whiteColor,
   
  },

  locationTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  // bottom
  },
  locationText: {
    color: Theme.colors.grayColor,
    fontSize: Theme.fontSizes.medium,
    marginRight:231
  },
  locationIcon: {
    width: '15%',
    // backgroundColor: Theme.colors.secondaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',

  },
  searchBarContainer: {
    width: '90%',
    height: moderateScale(50),
    borderRadius: moderateScale(5),
    // elevation: 2,
    marginVertical: moderateScale(10),
    flexDirection: 'row',
    marginHorizontal: '5%',
    backgroundColor: '#cfd0d1',
    borderRadius: moderateScale(8),
    bottom:-9
    
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 47,
    top:49,
    borderBottomColor: 'black',
    borderBottomWidth: 0.6,
    
  },
  searchBartext: {
    color: Theme.colors.grayColor,
    fontSize: Theme.fontSizes.xmedium,
    width: '85%',
    paddingHorizontal: moderateScale(10),
  },
  searchBarIcon: {
    width: '15%',
    // backgroundColor: Theme.colors.Color,
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: '100%',
 
  },
  scrollComponentContainer: {
    marginTop: moderateScale(5),
    height: (height / 100) * 80,
  },
  componentheaderContainer: {
    height: moderateScale(50),
    // backgroundColor: 'red',
    width: '100%',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  componentheaderContainer2: {
    height: moderateScale(80),
    // backgroundColor: 'red',
    width: '100%',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  componentheaderText: {
    paddingHorizontal: '5%',
    color: Theme.colors.primaryColor,
    fontSize: Theme.fontSizes.xmedium,
    fontWeight: '600',
  },
  componentheaderText2: {
    paddingHorizontal: '5%',
    color: Theme.colors.grayColor,
    fontSize: Theme.fontSizes.medium,
    fontWeight: '400',
  },
  cardContainer: {
    height: moderateScale(120),
    width: '100%',
    paddingHorizontal: '5%',
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  cardImageContainer: {
    height: '100%',
    width: '20%',
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    height: moderateScale(60),
    width: moderateScale(60),
    backgroundColor: Theme.colors.primaryColor,
    borderRadius: moderateScale(30),
  },
  cardTextContainer: {
    // backgroundColor: 'red',
    width: '65%',
    height: '100%',
    // alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: Theme.colors.grayColor,
    borderBottomWidth: 0.5,
    paddingHorizontal: moderateScale(10),
  },
  cardheadingText: {
    color: Theme.colors.blackColor,
    fontSize: Theme.fontSizes.medium,
    fontWeight: '400',
    marginTop: moderateScale(5),
  },
  cardIcon: {
    width: '15%',
    height: '100%',
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: Theme.colors.grayColor,
    borderBottomWidth: 0.5,
  },
  carddetailText: {
    color: Theme.colors.primaryColor,
    fontSize: Theme.fontSizes.medium,
    fontWeight: '400',
    marginTop: moderateScale(5),
  },
  input: {
    height: 40,
    borderColor:Theme.colors.primaryColor,
    width:"94%",
    margin: 19,
    paddingTop:4,
    marginLeft:12,
    borderRadius:14,
    borderWidth: 1,
    padding: 10,
    bottom:78
  },
  loginScreenButton10:{
    marginLeft:85,
  margin:1,
  bottom:53,
    paddingTop:14,
    paddingBottom:10,

  //   // backgroundColor:'#1E6738',
    borderRadius:9,
  elevation:2,
  //   borderColor: 'black',

    width:198,
    backgroundColor:"red",
    // alignContent:"center",
    alignItems:"center",
    justifyContent:"center",
  },
  widgets12:{
    backgroundColor:'#F0F0F0',
 elevation: 5,
 marginTop:24,
 height:moderateScale(360),
 margin:moderateScale(10),
 width:"95%",
 borderRadius:10},
 loginScreenButton30:{
  marginLeft:67,
top:24,
  paddingTop:12,
  paddingBottom:10,
  borderRadius:9,
elevation:4,
  bottom:90,
  width:230,
  borderWidth:1,
  Color:"red",
  borderColor:'red',
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'white',
  borderRadius:5,
}
});
export default styles;
