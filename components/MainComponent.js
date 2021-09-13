import 'react-native-gesture-handler';
import React, { Component } from 'react';
import Home from './HomeComponent';
import Directory from './DirectoryComponent';
import SpecialsInfo from './SpecialsInfoComponent';
import { View, Platform } from 'react-native';
import SpecialInfo from './SpecialsInfoComponent';
import Constants from 'expo-constants';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
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

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
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

 const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Directory: { screen: DirectoryNavigator }
    },
    {
        drawerBackgroundColor: '#CEC8FF'
    }
); 


const AppNavigator = createAppContainer(Main  Navigator);

class Main extends Component {
    render() {
        return (
            <View                
                style={{
                    flex:1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
                
                }}>
                <AppNavigator />
                            
            </View>
        );
    }
}

export default Main;