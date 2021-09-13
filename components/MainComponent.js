import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import SpecialsInfo from './SpecialsInfoComponent';
import { View, Platform } from 'react-native';
import SpecialInfo from './SpecialsInfoComponent';
import Constants from 'expo-constants';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

const DirectoryNavigator = createStackNavigator(
    {
        Directory: { screen: Directory },
        SpecialInfo: { screen: SpecialInfo}
    },
    {
        intialRouteName: 'Directory',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }

);

const AppNavigator = createAppContainer(DirectoryNavigator);

class Main extends Component {
    /* constructor(props) {
        super(props);
        this.state = {
            specials: SPECIALS,
            selectedSpecial: null
        };
    } */

    /* onSpecialSelect(specialId){
        this.setState({selectedSpecial: specialId});
    }
 */
    render() {
        return (
            <View                
                style={{
                    flex:1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
                
                }}
                
            >
                <AppNavigator />
                {/* <Directory 
                    specials={this.state.specials} 
                    onPress={specialId => this.onSpecialSelect(specialId)}    
                />
                <SpecialInfo
                    special={this.state.specials.filter(
                        special => special.id === this.state.selectedSpecial)[0]}
                /> */}
            
            </View>
        );
    }
}

export default Main;