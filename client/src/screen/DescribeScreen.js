import React from 'react';
import {SafeAreaView,View, Text, Pressable, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../style/DescribeScreenStyle';

const DescribeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Pressable onPress={()=>navigation.goBack()} style={styles.backNav}>
                    <MaterialCommunityIcons name="menu-left-outline" color={'#498A77'} size={40} />
                    <Text style={styles.titleText}>Deskripsi Makanan</Text>
                </Pressable>
            </View>
            <View style={styles.descriptionCard}>
                <View>
                    <Image style={styles.image} source={require('../asset/food2.png')}/>
                </View>
                <View style={styles.descriptionText}>
                    <Text style={styles.menuTitle}>Hola</Text>
                    <Text style={styles.descText}>Deskripsinya nanti taro disini yang panjang itu </Text>
                </View>                
            </View>
            <View style={styles.theButton}>
                <Pressable style={styles.button} onPress={()=>console.log('kalo bisa diganti sama modal tulisannya kamu berhasil memesan makanan')}>
                    <Text style={styles.textButton}>Pesan Makanan</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default DescribeScreen;