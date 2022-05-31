import React from 'react';
import { SafeAreaView, View, Text, Pressable, Image, Alert } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../style/DescribeScreenStyle';


const DescribeScreen = ({ navigation, route }) => {

    const createTwoButtonAlert = () =>
        Alert.alert(
            "INFO",
            "Pesanan Berhasil di pesan",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Pressable onPress={() => navigation.goBack()} style={styles.backNav}>
                    <MaterialCommunityIcons name="menu-left-outline" color={'#498A77'} size={40} />
                    <Text style={styles.titleText}>Deskripsi Makanan</Text>
                </Pressable>
            </View>
            <View style={styles.descriptionCard}>
                <View>
                    <Image style={styles.image} source={require('../asset/food2.png')} />
                </View>
                <View style={styles.descriptionText}>
                    <Text style={styles.menuTitle}>{route.params.name}</Text>
                    <Text style={styles.descText}>{route.params.long_desc}</Text>
                </View>
            </View>
            <View style={styles.theButton}>
                <Pressable style={styles.button} onPress={createTwoButtonAlert}>
                    <Text style={styles.textButton}>Pesan Makanan</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default DescribeScreen;