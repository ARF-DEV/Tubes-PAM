import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
} from 'react-native';

export default class ProfileScreen extends Component {

  render() {
    return (
      <SafeAreaView style={styles.container}>
          <View style={styles.container2}>
            <View style={styles.header}>
              <View style={styles.headerContent}>
                  <Image style={styles.avatar}
                    source={{uri: 'https://www.its.ac.id/international/wp-content/uploads/sites/66/2020/02/blank-profile-picture-973460_1280.jpg'}}/>

                  <Text style={styles.name}>Markikan Team</Text>
                  <Text style={styles.userInfo}>Member Platinum </Text>
                  <Text style={styles.userInfo}>Indonesia</Text>
              </View>
            </View>
            <View style={styles.theTeam}>
              <Text style={styles.text}>Apps By</Text>
              <Text style={styles.text2}>Muhammad Ariefuddin</Text>
              <Text style={styles.text2}>Eliza Maharani</Text>
              <Text style={styles.text2}>Della Salsabila</Text>
              <Text style={styles.text2}>Gibran Basyayef</Text>
            </View>
        </View>
      </SafeAreaView>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
        backgroundColor:'#498A77',
        flex: 1,
  },
  container2: {
        margin: 20,
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:30,
    color:"#ffffff",
    fontFamily: 'Roboto-Bold'
  },
  userInfo:{
    fontSize:16,
    color:"#ffffff",
    fontFamily: 'Roboto-Medium'
  },
  body:{
    backgroundColor: "#ffff",
    height:500,
  },
  theTeam:{
    marginTop: '30%',
    alignItems: 'center',
    backgroundColor: '#ffff',
    borderRadius: 10,
    padding:10,
  },
  text: {
    fontSize:24,
    color:'#498A77',
    fontFamily: 'Roboto-Bold'
  },
  text2:{
    fontSize:16,
    color:'#498A77',
    fontFamily: 'Roboto-Regular',

  }
});