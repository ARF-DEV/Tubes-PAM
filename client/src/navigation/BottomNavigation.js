import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MenuScreen from '../screen/MenuScreen';
import DescribeScreen from '../screen/DescribeScreen';
import ProfileScreen from '../screen/ProfileScreen';

import { Icon } from 'react-native-elements';

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
                height: 60,             
                paddingTop: 10,
                bottom:0,
            },
            tabBarInactiveTintColor: '#535151',
            tabBarActiveTintColor: '#283593',
            tabBarHideOnKeyboard: true,
            tabBarLabelStyle: {
                marginBottom: 5,
                fontFamily: "Ubuntu-Light",            
                fontSize:10,
            }

         }}
        >
        <Tab.Screen 
            name="Menu" 
            component={MenuStackScreen}
            options={{ 
                tabBarIcon: ({color}) =>(
                    <Icon 
                    name='home'         
                    size={20} 
                    color={color}                
                    />
                )
             }}
        />
        
        <Tab.Screen name="Profile" component={ProfileScreen}
            options={{ 
                tabBarIcon: ({color}) =>(
                    <Icon 
                    name='user-alt'   
                    size={20} 
                    color={color}                   
                    />
                )
             }}
        />
      </Tab.Navigator>  
    );
}
export default BottomTab;