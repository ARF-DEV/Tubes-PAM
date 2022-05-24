import React , { useEffect }from "react";
import {
SafeAreaView,
StatusBar,
Image} from "react-native";
import styles from '../style/SplashScreenStyle';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
        navigation.replace('BottomTab');
    }, 1000);
  }, [navigation]) 

  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#498A77" />
    <SafeAreaView style={styles.background}>         
        <Image 
            source={require('../asset/logo1.png')}
            style={styles.logo}
        />
    </SafeAreaView>
    </>
  );
};

export default SplashScreen;