import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function RenderSpecial({special}) {
    if (special) {
        return (
            <Card 
                featuredTitle={special.name}
                image={require('./images/eggPlateSpecial.jpeg')}
            >
                <Text style={{margin: 10}}>
                    {special.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

function SpecialInfo(props) {
    return <RenderCampsite special={props.special} />;
}

export default SpecialInfo;