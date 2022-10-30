import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from '../../Theme/Dimensions';
import Theme from '../../Theme/Theme';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Theme.colors.whiteColor,
    width: '100%',
    // alignItems: 'center',
  },
  headerConatiner: {
    height: (height / 100) * 8,
    width: (width / 100) * 100,
    // backgroundColor: Theme.colors.redColor,
    borderBottomColor: Theme.colors.grayColor,
    borderBottomWidth: 0.5,
    paddingHorizontal: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
   
  },
  headerText: {
    width:"50%",
    fontSize:18,
    fontWeight: '700',
    // paddingRight:30,
    alignSelf: 'center',
    color: Theme.colors.primaryColor,
  },
  headerImage: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: moderateScale(20),
    overflow: 'hidden',
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
  searchBarIcon: {
    width: '15%',
    backgroundColor: Theme.colors.secondaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  searchBartext: {
    color: Theme.colors.grayColor,
    fontSize: Theme.fontSizes.small,
    width: '85%',
    paddingHorizontal: moderateScale(10),
  },
  
  searchBarContainer: {
    width: '90%',
    height: moderateScale(50),
    borderRadius: moderateScale(5),
    elevation: 2,
    marginVertical: moderateScale(20),
    flexDirection: 'row',
    marginHorizontal: '5%',
    backgroundColor: Theme.colors.whiteColor,
    borderRadius: moderateScale(5),
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
    marginTop: moderateScale(15),
    borderBottomColor: '#cfd0d1',
    borderBottomWidth: 0.5,
    backgroundColor: Theme.colors.whiteColor,
  },
  locationContainer5: {
    width: '90%',
    height: moderateScale(50),
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal:'4%',
    // marginTop: moderateScale(1),
    borderBottomColor: '#cfd0d1',
    borderBottomWidth: 0.5,
    backgroundColor: Theme.colors.whiteColor,
    elevation:4,
    borderRadius:6,
    bottom:28
  },



  locationTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '25%',
    height: '100%',
    justifyContent: 'space-between',
  },
  locationText: {
    color: Theme.colors.grayColor,
    fontSize: Theme.fontSizes.medium,
  },
  locationIcon: {
    width: '35%',
    // backgroundColor: Theme.colors.secondaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  changelocationText: {
    color: Theme.colors.primaryColor,
    fontSize: Theme.fontSizes.medium,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  searchBarContainer: {
    width: '90%',
    height: moderateScale(50),
    borderRadius: moderateScale(5),
    // elevation: 2,
    marginVertical: moderateScale(10),
    flexDirection: 'row',
    marginHorizontal: '5%',
    backgroundColor: Theme.colors.whiteColor,
    borderRadius: moderateScale(8),
    overflow: 'hidden',
    elevation: 5,
  },
  searchBartext: {
    color: Theme.colors.grayColor,
    fontSize: Theme.fontSizes.xmedium,
    width: '85%',
    paddingHorizontal: moderateScale(10),
  },
  searchBarIcon: {
    width: '15%',
    backgroundColor: Theme.colors.secondaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  cardContainer: {
    height: moderateScale(200),
    width: '95%',
    marginHorizontal: '2.5%',
    elevation: 5,
    backgroundColor: Theme.colors.whiteColor,
    marginTop: moderateScale(20),
    borderRadius: moderateScale(10),
  },
  offtextcontainer: {
    height: '13%',
    width: '100%',
    // backgroundColor: 'red',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(10),
  },
  offtext: {
    color: Theme.colors.blackColor,
    fontSize: Theme.fontSizes.xmedium,
    marginLeft:4
  },
  wholeContainer: {
    height: '50%',
    width: '100%',
    flexDirection: 'row',
    // backgroundColor: 'red',
  },
  imageContainer: {
    width: '35%',
    height: '65%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  cardimage: {
    height: moderateScale(80),
    width: moderateScale(80),
    borderRadius: moderateScale(40),
    resizeMode: 'contain',
  },
  textContainer: {
    height: '65%',
    width: '65%',
    // backgroundColor: 'red',
    justifyContent: 'center',
  },
  headingText: {
    color: Theme.colors.primaryColor,
    fontSize: Theme.fontSizes.xmedium,
    fontWeight: '600',
    top:9,
        marginBottom: moderateScale(5),
  },
  detailText: {
    color: Theme.colors.grayColor,
    fontSize: Theme.fontSizes.medium,
    // marginBottom: moderateScale(5),
    marginHorizontal: moderateScale(5),
    // left:45
  },
  wholeButtonContainer: {
    height: '35%',
    width: '100%',
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '25%',
    paddingRight: '5%',
  },
  buttonContainer: {
    height: moderateScale(40),
    width: moderateScale(120),
    borderRadius: moderateScale(10),
    backgroundColor: Theme.colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  buttonText: {
    color: Theme.colors.whiteColor,
    fontSize: Theme.fontSizes.medium,
  },
  row: {
    height:moderateScale(400),
    backgroundColor:"red",
    // flex: 1,
    // flexDirection: 'row',
    // height:10,
    // marginTop: 15,
    // marginBottom: 15,
  },
  row1: {
    height:moderateScale(200),
    backgroundColor:"blue",
    // backgroundColor:"red",
    // flex: 1,
    flexDirection: 'row',
    height:10,
    marginTop: 15,
    // marginBottom: 15,
  },
  widgets: {
    backgroundColor: '#fff',
    elevation: 6,
    height:moderateScale(180),
    width:"95%",
    marginTop:20,
    marginHorizontal:moderateScale(10),
    // flex: 1,
    // height:160,
    // marginLeft: 15,
    // marginRight: 15,
    borderRadius:10,
    // bottom:267,
  

  },
  widgets5: {
    backgroundColor:'#D4F1F4',
    elevation: 5,
    borderBottomWidth:0,
    height:moderateScale(180),
    width:"95%",
    marginHorizontal:moderateScale(10),
    // flex: 1,
    // height:160,
    // marginLeft: 15,
    // marginRight: 15,
    borderRadius:10,
    

    top:12,
  
  },
  input: {
    height: 40,
    borderColor:Theme.colors.primaryColor,
    width:"94%",
    margin: 19,
    // paddingTop:4,
    marginLeft:12,
    borderRadius:14,
    borderWidth: 1,
    padding: 10,
    bottom:78
  },
  widgets8: {
    backgroundColor: '#fff',
    elevation: 6,
    height:moderateScale(150),
    width:"95%",
    marginHorizontal:moderateScale(10),
    // flex: 1,
    // height:160,
    // marginLeft: 15,
    // marginRight: 15,
    borderRadius:10,
    top:25
  
  },
  widgets3: {
    backgroundColor: 'lightgrey',
    elevation: 45,
    height:moderateScale(30),
    width:"96%",
    // marginLeft:8,
    marginHorizontal:'2%',
    borderRadius:10,
  paddingBottom:1,
  bottom:75,
  position:"absolute",
//  top:14
  
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor: 'green',
    width: '40%',
    height: 40
  },
  widgets1: {
    backgroundColor: '#fff',
    elevation: 5,
    height:moderateScale(60),
    margin:moderateScale(10),
    paddingHorizontal:moderateScale(20),
    justifyContent:'space-between',
    width:"95%",
    alignContent:"center",
    borderRadius:10
  },

 txt1:
 {
  fontSize:15,
  color: Theme.colors.primaryColor,
  paddingBottom:63,
  bottom:41,
  marginLeft:104
 },
 icon:
 {
   bottom:85,
   fontSize:12,
 },icon2:{
   bottom:80
 },
 logotext:{
  bottom:37,
  marginLeft:125
 },
 loginScreenButton:{
  marginRight:10,
  marginLeft:199,
 marginTop:10,
  paddingTop:10,
  paddingBottom:10,
  backgroundColor:'#1E6738',
  borderRadius:8,
  borderWidth: 1,
  borderColor: '#fff',
  bottom:21,
  width:120,
  backgroundColor:Theme.colors.primaryColor
},
loginScreenButton3:{
  marginLeft:195,
top:-20,
  paddingTop:12,
  paddingBottom:10,
  borderRadius:9,
elevation:2,
  bottom:90,
  width:128,
  backgroundColor:"red",
  alignItems:"center",
  justifyContent:"center",
},
loginScreenButton10:{
  marginLeft:85,
top:26,
margin:15,
  paddingTop:14,
  paddingBottom:10,
  borderRadius:9,
elevation:2,
  bottom:1,
  width:198,
  backgroundColor:"red",
  alignItems:"center",
  justifyContent:"center",
},
loginScreenButton11:{
  marginLeft:85,
top:2,
margin:15,
  paddingTop:14,
  paddingBottom:10,
  bottom:20,
  borderRadius:9,
elevation:2,
//   borderColor: 'black',
  bottom:1,
  width:198,
  backgroundColor:"blue",
  // alignContent:"center",
  alignItems:"center",
  justifyContent:"center",
},
loginText3:{
color:"white"
},
loginScreenButton4:{
marginLeft:40,
  borderRadius:9,
elevation:2,
  width:140,
  height:40,
  alignItems:"center",
  justifyContent:"center",
  backgroundColor:"white"
},
loginScreenButton30:{
  marginLeft:67,
top:24,
  paddingTop:12,
  paddingBottom:10,
  borderRadius:9,
elevation:2,
  bottom:90,
  width:230,
  borderWidth:1,
  borderColor:'red',
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'white',
  borderRadius:5,
},
loginScreenButton2:{
  marginRight:10,
  marginLeft:77,
 marginTop:30,
  paddingTop:10,
  paddingBottom:10,
  backgroundColor:'red',
  borderRadius:8,
  borderWidth: 1,
  borderColor: '#fff',
  bottom:21,
  width:200,
  backgroundColor:"red"
},
loginText2:{
  color:"white",
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10,
    fontWeight:"bold"
},
loginText3:{
  color:"red",
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10,
    fontWeight:"bold",
    width:150
},
loginScreenButton1:{
  marginRight:10,
  marginLeft:67,
 marginTop:2,
  paddingTop:10,
  paddingBottom:10,
  borderRadius:9,
elevation:2,
  bottom:63,
  width:120,
  backgroundColor:"white"
},
loginScreenButton9:{
  marginRight:1,
  marginLeft:87,
  paddingTop:10,
  paddingBottom:10,
  borderRadius:10,
elevation:2,
top:53,
  width:160,
  backgroundColor:"lightblue"
},
loginScreenButton6:{
 height:40,
 alignItems:"center",justifyContent:"center",
 marginLeft:20,
  borderRadius:9,
elevation:2,
  // bottom:90,
  width:140,
  backgroundColor:"white"
},
loginText1:{
  color:Theme.colors.primaryColor,
  // elevation:19,
    textAlign:'center',
    // paddingLeft : 10,
    // paddingRight : 10,
    fontWeight:"bold"
},

widgets12:{
   backgroundColor:'#F0F0F0',
elevation: 5,
marginTop:24,
height:moderateScale(360),
margin:moderateScale(10),
width:"95%",
borderRadius:10},


widgets15:{
  backgroundColor: '#fff',
elevation: 5,
marginTop:12,
height:moderateScale(60),
margin:moderateScale(10),
paddingHorizontal:moderateScale(20),
width:"95%",
alignContent:"center",
borderRadius:4
},
widgets2: {
  backgroundColor: '#fff',
  elevation: 5,
  marginTop:15,
  margin:moderateScale(10),
  paddingHorizontal:moderateScale(20),
  padding:10,
  width:"95%",
  justifyContent:"center",
  alignItems:"center",
  borderRadius:10
},
item: {
  fontSize:14,color:"black",
  textTransform:"capitalize",
},
title: {
  fontSize: 12,
},
setCenter:{
  justifyContent: 'center',
  alignItems: 'center'
}
});
export default styles;
