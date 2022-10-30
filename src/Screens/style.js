import { StyleSheet, Dimensions } from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    shadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
  
      elevation: 6,
    },
    loginText3:{
      color:"white"
      },
    button:{
      padding: 5,
      backgroundColor: 'white',
      borderRadius: 5,
      paddingHorizontal: 40,
      margin: 1
    },
    setCenter:{
      justifyContent: 'center',
      alignItems: 'center'
    },
    sWidth: {
      width: Dimensions.get('window').width*0.70,
    },
    tiniIcon:{
      height: 30,
      width: 30,
    },
    largeText:{
      fontSize: 20,
    }
});