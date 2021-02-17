// 1 todo: new component

// 2 todo: home component text (wordt een navigator op zich)

// 3 todo: export


import React from 'react';
import { Text,TouchableOpacity}  from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import colors from '../styles/colors';

import { container, headers } from '../styles/generic';

// Todo: pick color for design app

const Settings = ({navigation}:any) => {
    return(
        <SafeAreaView style={container.full}>
            <Text style={headers.large}>Settings</Text>
            <TouchableOpacity style={{paddingVertical:16,paddingHorizontal:32}} onPress={() => {}}>
                <Text style={{color:colors.light,fontSize:24,fontWeight:'bold'}}>
                    {/* 🍔 */}
                    ☰
                    {/* SVG in productie */}
                </Text>
            </TouchableOpacity>

            {/* <Text style={{flexGrow:1}}>Grow</Text> */}
            <Text>Bottom</Text>
        </SafeAreaView>
    );
}

export default Settings;