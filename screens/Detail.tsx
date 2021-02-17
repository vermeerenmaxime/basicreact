import React, { useEffect } from 'react';

import { Text }  from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { container, headers } from '../styles/generic';

const Detail = ({ route, navigation}:any) => {
    const {title, description, rating } = route.params.item;
    useEffect(() => {
        navigation.setOptions({title: title});
    }, []);
    
    return(
        <ScrollView style={container.full}>
            {/* Todo :make screen dynamic */}
            <Text style={headers.medium}>
                { title }

            </Text>
            <Text style={{marginVertical:16,fontSize:16}}>
                {description}
            </Text>
            <Text>
                {'👍'.repeat(rating)}
            </Text>
        </ScrollView>
        
    );
}

export default Detail;