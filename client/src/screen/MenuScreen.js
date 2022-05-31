import React, { useEffect, useState } from 'react';
import {SafeAreaView, View, Text, FlatList, StatusBar, Image, Pressable,ScrollView} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../style/MenuScreenStyle';
import { getProductList } from '../state/action-creator';
import { SearchBar } from 'react-native-elements';

const MenuScreen = ({navigation}) => {
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getProductList());
      changeUP();
    }, []);

   

    const { productList } = useSelector(state => state);
    console.log(productList.list)

    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);

     const changeUP = () => {
        fetch('https://immense-ridge-07575.herokuapp.com/v1/products')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch(getProductList())
                console.log(responseJson);
                setFilteredDataSource(responseJson);
                setMasterDataSource(responseJson);
            })
            .catch((error) => {
                console.error(error);
            })
    }

    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource
            // Update FilteredDataSource
            const newData = masterDataSource.filter(function (item) {
                const itemData = item.name
                    ? item.name.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;

            });
            setFilteredDataSource(newData);
            setSearch(text);
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
    };
    
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#498A77" />
            
                <SafeAreaView style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>Temukan Makanan Favoritmu</Text>
                </View>
                <View style={styles.searching}>
                    <SearchBar
                        placeholder="Cari disini"
                        round
                        searchIcon={{ size: 24 }}
                        onChangeText={(text) => searchFilterFunction(text)}
                        onClear={(text) => searchFilterFunction('')}
                        value={search}
                        lightTheme
                        containerStyle={{
                            width: "100%",
                            borderColor: 'none',
                            backgroundColor: '#ffff',
                            border: 'none',
                            height: 50,
                            borderRadius: 10,
                        }}
                        inputContainerStyle={{
                            height: 0,
                            backgroundColor: '#fff',
                            borderRadius: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontFamily: 'Roboto-Medium',
                            color: '#498A77'
                        }}
                    />
                </View>
                <View>
                    <Text style={styles.menuText}>Menu</Text>
                    <FlatList
                        style={styles.menuFlatList}
                        showsVerticalScrollIndicator ={false}
                        data = {filteredDataSource}
                        keyExtractor={(item) => {return item.id}}
                        renderItem={({item})=> {
                            return (
                                <>
                                    <View>
                                        <Pressable style={styles.card} onPress={() => navigation.navigate('DescribeScreen',{item})}>
                                            <View style={styles.image}>
                                                <Image 
                                                    source={require('../asset/food.png')}
                                                />
                                            </View>
                                            <View>
                                                <Text style={styles.foodTitle}>{item.name}</Text>
                                                <Text>{item.short_desc}</Text>
                                                <Text>{item.price}</Text>
                                            </View>
                                        </Pressable>
                                    </View>
                                </>
                            )
                        }
                        
                        }
                        
                    />
                </View>
            </SafeAreaView>
        </> 
        
    );
};

export default MenuScreen;