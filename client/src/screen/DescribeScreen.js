import React, {useState} from 'react';
import {SafeAreaView,View, Text, Pressable, Image,Modal, TouchableWithoutFeedback} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../style/DescribeScreenStyle';

const DescribeScreen = ({route, navigation}) => {
    const data = route.params.item;
    const [modalVisible, setModalVisible] = useState(false);
    
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <TouchableWithoutFeedback
                    onPress={() => setModalVisible(!modalVisible)}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Makanan berhasil dipesan</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    
                </Modal>
            </View>

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
                    <Text style={styles.menuTitle}>{data.name}</Text>
                    <Text style={styles.descText}>{data.long_desc} </Text>
                </View>                
            </View>
            <View style={styles.theButton}>
                <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
                    <Text style={styles.textButton}>Pesan Makanan</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default DescribeScreen;