/**
 * Created by leichen on 2017/1/13.
 */
import React from 'react';
import { View } from 'react-native';

//maike a Component

const Card = (props) => {
    const { containerStyle } = styles;

    return (
        <View style={containerStyle}>
            {props.children}
        </View>
    );
};

//Make the component available to other parts of the app
const styles = {

    containerStyle: {
       borderWidth: 1,
       borderRadius: 2,
       borderColor: '#ddd',
       borderBottomWidth: 0,
       shadowColor: '#000',
       shadowOffset: {
           width: 0,
           height: 2
       },
       shadowOpacity: 0.1,
       shadowRadius: 2,
       elevation: 1,
       marginLeft: 5,
       marginRight: 5,
       marginTop: 10
    }
};

export { Card };
