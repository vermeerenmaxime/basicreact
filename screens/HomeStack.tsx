import React from 'react';
import { Text, View }  from 'react-native';



import { createStackNavigator } from '@react-navigation/stack';

import {stackHeaderStyle} from '../styles/generic';
import colors from '../styles/colors';

import { screensEnabled } from 'react-native-screens';


import Overview from './Overview';
import Detail from './Detail';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerActions } from '@react-navigation/native';



const Stack = createStackNavigator();

// todo: add stack nav
// todo: style overview
// todo: style detail page

// todo: make data dynamic

// overview
    //detail met labo 01 - 03


const HomeStack = ({navigation}: any) => {

    const headerScreenOptions = {
        headerStyle: stackHeaderStyle.app, display:'flex'
        header: ({scene}: any) => {
            // console.log({options})

            const { options} = scene.descriptor;

            const title = options.headerTitle == undefined && options ? options.headerTitle : options.title == undefined ? options.title : scene.route.name;

            return (
                <View style={{
                    ...stackHeaderStyle.app
                }}>
                    {/* Niks links, later backbutton */}
                    {/* <Text style={{marginTop:'auto',textAlign:'center',paddingBottom:8,fontWeight:'bold',fontSize:20}}>{title}</Text> */}
                    <Text style={{position:'absolute',left:'50%',bottom:16,textAlign:'center',transform:[{translateX:-0.5}],fontWeight:'bold',fontSize:20}}>{title}</Text>
                    {/* ndrawer, hamburger */}
                    <View style={{position:'absolute',bottom:0,right:0}} >
                        <TouchableOpacity style={{paddingVertical:16,paddingHorizontal:32}} onPress={() => {}}>
                            {DrawerActions.toggleDrawer}
                            <Text style={{color:colors.light,fontSize:24,fontWeight:'bold'}}>
                                {/* 🍔 */}
                                ☰
                                {/* SVG in productie */}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    
                    
                </View>
                
            )
        }
    }
    return(
        <Stack.Navigator initialRouteName='Overview' screenOptions={headerScreenOptions}>
            <Stack.Screen name="Overview" component={Overview}></Stack.Screen>
            <Stack.Screen name="Detail" component={Detail}></Stack.Screen>
        </Stack.Navigator>
    );
}

export default HomeStack;