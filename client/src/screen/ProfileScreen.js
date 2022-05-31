import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class ProfileScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={{uri: 'https://www.its.ac.id/international/wp-content/uploads/sites/66/2020/02/blank-profile-picture-973460_1280.jpg'}}/>

                <Text style={styles.name}>Gibran</Text>
                <Text style={styles.userInfo}>Member Platinum </Text>
                <Text style={styles.userInfo}>Indonesia</Text>
            </View>
          </View>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#498A77",
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
    fontSize:22,
    color:"#ffffff",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:16,
    color:"#ffffff",
    fontWeight:'600',
  },
  body:{
    backgroundColor: "#ffff",
    height:500,
  },
});