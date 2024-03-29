import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { SPECIALS } from '../shared/specials';

class Directory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            specials: SPECIALS
        };
    }

    static navigationOptions = {
        title: 'Directory'
    };


    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('SpecialInfo', { specialId: item.id })}
                    leftAvatar={{ source: require('./images/eggPlateSpecial.jpeg')}}
                />
            );
        };

        return (
            <FlatList
                data={this.state.specials}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
  }
}

export default Directory;