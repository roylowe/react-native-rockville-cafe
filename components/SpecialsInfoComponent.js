import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { SPECIALS } from '../shared/specials';

function RenderSpecial({special}) {
    if (special) {
        return (
            <Card 
                featuredTitle={special.name}
                image={require('./images/eggPlateSpecial.jpeg')}>
                <Text style={{margin: 10}}>
                    {special.description}
                </Text>
            </Card>
        );
    }
    return <View />;
                
}

class SpecialInfo extends Component {

    constructor(props){
        super(props);
        this.state = {
            specials: SPECIALS
        };
    }

    static navigationOptions = {
        title: 'Special Information'
    }

    render(){
        const specialId = this.props.navigation.getParam('specialId');
        const special = this.state.specials.filter(special => special.id === specialId)[0];
         return <RenderSpecial special={special} />;

    }
}

export default SpecialInfo;