import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import defaultStyles from '../constants/default-styles';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={defaultStyles.titleText}>Game is over</Text>
            <View style={styles.imageContainer}>
                <Image 
                    source={require('../assets/success.png')}
                    style={styles.image}
                    resizeMode='cover' />
            </View>
            <Text style={defaultStyles.bodyText}>Number of rounds: {props.roundsNumber}</Text>
            <Text style={defaultStyles.bodyText}>Number was: {props.userNumber}</Text>
            <Button title='New game' onPress={props.onRestart} />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden'
    },  
    image: {
        width: '100%',
        height: '100%'
    }
});

export default GameOverScreen;