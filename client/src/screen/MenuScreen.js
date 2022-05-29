import React, { useEffect } from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../style/MenuScreenStyle';
import { getProductList } from '../state/action-creator';

const MenuScreen = ({navigation}) => {
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getProductList());
    }, []);
    const { productList } = useSelector(state => state);
    console.log(productList.list)
    return (
        <SafeAreaView>
            <View>
                <FlatList
                    data = {productList.list}
                    renderItem={({item}) => 
                    <Text
                    style={{color: "black"}}
                    >{item.name}</Text>}
                    keyExtractor={item => item.id}
                />
                <Text>menu</Text>
            </View>
        </SafeAreaView>
    );
};

export default MenuScreen;