import React from 'react';

import { FlatList, Button, Text, View }  from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import lessons from '../data/lessons';
import styles, { container, headers } from '../styles/generic';

const Overview = ({navigation}:any) => {
    const renderItem = "";
    return(
        <View style={container.full}>
            <Text style={headers.large}>
                Lessons
            </Text>
            <FlatList 
                data={lessons} 
                renderItem={({item}: any) => (
                    <TouchableOpacity onPress={() => {navigation.navigate('Detail', {item}); }}>
                        <Text style={headers.medium}>#{item.title}</Text>
                        {/* Todo: show correct amount of stars */}
                        <Text style={{color: 'gold'}}>{'★'.repeat(item.rating)}​​​​​</Text>
                        {/* {for (const rating of item.rating) {
                            return (<Text style={{color: 'gold'}}>★</Text>)
                        }} */}
                        {/* {item.rating.map((rating: any) => {
                            <Text style={{color: 'gold'}}>★</Text>
                        })}
                         */}
                        {/* <Button title={`Go to ${item.title}`} onPress={() => {navigation.navigate('Detail')}}/> */}
                    </TouchableOpacity>
                )} 
                keyExtractor={(item:any) => `${item.id}`} />
            
            {/* Todo: make a flatlist for each elsson */}
            {/* todo: make a button(?) to go to the detail */}
            {/* Todo: make detail screen dynamic */}

            
        </View>
    );
}
export default Overview;