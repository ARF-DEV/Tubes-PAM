import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MenuScreen from '../screen/MenuScreen';
import DescribeScreen from '../screen/DescribeScreen';
import ProfileScreen from '../screen/ProfileScreen';
import { Icon } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MenuStack = createNativeStackNavigator();
function MenuStackScreen(){
    return(
        <MenuStack.Navigator screenOptions={{ headerShown: false }}>
            <MenuStack.Screen name="MenuScreen" component={MenuScreen}/>
            <MenuStack.Screen name="DescribeScreen" component={DescribeScreen}/>
        </MenuStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();
const BottomTab = ({navigation}) => {
    return(
       <Tab.Navigator
        screenOptions={{   
            headerShown: false,         
            tabBarStyle: { 
                position: 'absolute',     
                elevation: 10,
                backgroundColor: '#ffff',
                borderTopRightRadius: 30,
                borderTopLeftRadius: 30,
                height: 70,             
                paddingTop: 10,
                bottom:0,
            },
            tabBarInactiveTintColor: '#535151',
            tabBarActiveTintColor: '#498A77',
            tabBarHideOnKeyboard: true,
            tabBarLabelStyle: {
                marginBottom: 10,
                fontFamily: "Ubuntu-Medium",            
                fontSize:12,
            }

         }}
        >
        <Tab.Screen 
            name="Menu" 
            component={MenuStackScreen}
            options={{ 
                tabBarIcon: ({color}) =>(
                     <MaterialCommunityIcons name="text-box-search" color={color} size={25} />
                )
             }}
        />
        
        <Tab.Screen name="Profile" component={ProfileScreen}
            options={{ 
                tabBarIcon: ({color}) =>(
                     <MaterialCommunityIcons name="account" color={color} size={25} />
                )
             }}
        />
      </Tab.Navigator>  
    );
}
export default BottomTab;