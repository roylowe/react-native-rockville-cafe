import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { SPECIALS } from '../shared/specials';

function RenderItem({item}) {
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                image={require('./images/eggPlateSpecial.jpeg')}
            >
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
                
            </Card>
            
        );
    }
    return <View />;
}

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            specials: SPECIALS
        };
    }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <RenderItem
                    item={this.state.specials.filter(special => special.featured)[0]} />

                <Card>
                    <Text>Come in...sit down... enjoy a home cooked meal!</Text>
                </Card>
            </ScrollView>

            
        );
    }
}

export default Home;