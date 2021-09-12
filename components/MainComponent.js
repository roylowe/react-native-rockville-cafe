import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import SpecialsInfo from './SpecialsInfoComponent';
import { View } from 'react-native';
import { SPECIALS } from '../shared/specials';
import SpecialInfo from './SpecialsInfoComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            specials: SPECIALS,
            selectedSpecial: null
        };
    }

    onSpecialSelect(specialId){
        this.setState({selectedSpecial: specialId});
    }

    render() {
        return (
            <View style={{flex:1}}>
                <Directory 
                    specials={this.state.specials} 
                    onPress={specialId => this.onSpecialSelect(specialId)}    
                />
                <SpecialInfo
                    special={this.state.specials.filter(
                        special => special.id === this.state.selectedSpecial)[0]}
                />
            
            </View>
        );
    }
}

export default Main;