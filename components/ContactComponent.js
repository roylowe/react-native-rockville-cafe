import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    };

    render() {
        return(
            <ScrollView>
                <Card 
                    title={'Contact Information'}
                    wrapperStyle={{margin: 20}}                 
                 > 
                    <Text
                        style={{marginBottom: 10, fontSize: 18, lineHeight: 25}}>
                        1302 Rockville Way {"\n"}
                        Marysville, Pa. 17053{"\n"}
                        phone: 717-200-5076
                        Email: rockfood@gmail.co
                    </Text>
                </Card>

            </ScrollView>
        )
    }

}

export default Contact;

