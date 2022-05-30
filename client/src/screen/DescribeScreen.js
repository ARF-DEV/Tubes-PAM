import React from 'react';
import {SafeAreaView,View, Text, Pressable} from 'react-native';
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
            <View>
                {/* kontennya */}
            </View>
        </SafeAreaView>
    );
};

export default DescribeScreen;