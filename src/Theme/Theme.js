import {moderateScale} from './Dimensions';
import {Platform} from 'react-native';

export default Theme = {
  colors: {
    primaryColor: '#014e78',
    secondaryColor: '#e7f3ff',
    bluePColor: '#094994',
    yellowPColor: '#fcbd17',
    textColor: '#221f1f',
    whiteColor: '#ffffff',
    blackColor: '#070202',
    redColor: '#A72E31',
    lightRedColor: '#E84B27',
    grayColor: '#676767',
    lightGrayColor: '#A1A0A0',
    startGColor: '#FFF200',
    endGColor: '#FCBD17',
  },
  fontFamily: {
    regular: 'Roboto-Regular',
    medium: 'Roboto-Medium',
    bold: 'Roboto-Bold',
    urdu: 'Jameel Noori Nastaleeq Kasheeda',
  },
  fontSizes: {
    xxbig: moderateScale(34),
    xbig: moderateScale(26),
    big: moderateScale(22),
    xxmedium: moderateScale(19),
    xmedium: moderateScale(17),
    medium: moderateScale(15),
    small: moderateScale(13),
    verySmall: moderateScale(11),
    tinySmall: moderateScale(9),
  },
};
