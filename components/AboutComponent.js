import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

class About extends Component {

    static navigationOptions = {
        title: 'About Us'
    };

    render() {
        return(
            <ScrollView>
                <Card style={styles.card}
                title={'About Rockville Cafe'}>
                    <Text style={styles.para}>                        
                        Rockville Cafe is an eclectic, casual and quality cafe in Marysville, PA. Since opening in 2003, it immediately became a local, and not-so-local, favorite.  Stringent standards of excellence in service, food presentation, and quality ingredients, married with delicious innovative and traditional cuisine concepts, complete the dining experience.  A long-lasting clientele and staff will ensure that you see familiar faces each time you visit. </Text>
                        <Text style={styles.paraHeading}>History of the Rockville Bridge</Text>
                        <Text style={styles.para}>
                        The Rockville Bridge, at the time of its completion in 1902, was, and remains, the longest stone masonry arch railroad viaduct in the world. Constructed between April 1900 and March 1902 by the Pennsylvania Railroad, it has forty-eight 70-foot spans, for a total length of 3,820 feet (1,160 m).
                        The Rockville Bridge, an icon of railroad engineering, is the crowning achievement of William Henry Brown, chief engineer of the Pennsylvania Railroad. And this amazing stone bridge, composed of 220,000 tons of stone that took 800 workers two years to build, also stands as a monument to overcoming frustration. As the United States matured into an industrialized nation after the Civil War, the trains that moved the nation forward grew longer, heavier, faster, and more frequent.
                        At the Marysville exit off U.S. highway 15, on the west bank of the Susquehanna River, a community sign reads: “Welcome to Marysville, Home of the Rockville Bridge.” Opening on March 30, 1902, the Rockville Bridge was the most important and expensive undertaking of the Pennsylvania Railroad Company. Just north of the Enola train yards (once the largest train yard in the world), the Rockville Bridge is a National Historic Landmark and is currently used by Norfolk Southern and Amtrak railways.
                    </Text>
                </Card>

            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    paraHeading: {
        fontWeight: 'bold',
        fontSize: 20
        
    },

    para:{
        margin: 10,
        fontFamily: 'sans-serif-medium',
        fontSize: 16,
        lineHeight: 25
        
        
    
    },
    card:{
        margin: 10
    }
});

export default About;

