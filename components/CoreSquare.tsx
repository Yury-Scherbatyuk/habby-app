import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Icons, SquareSizes } from '../constants';


type CoreSquareType = {
    color: string,
    size: SquareSizes,
    icon: Icons,
    isHighlited: boolean
}

export default function CoreSquare({ color, size, icon, isHighlited } : CoreSquareType) {

    const getSize = (size: SquareSizes, color: string, isHighlited: boolean) => {
        switch (size) {
            case SquareSizes.Big:
                return {
                    width: 42,
                    height: 42,
                    borderRadius: 13,
                    backgroundColor: color,
                    borderWidth: isHighlited ? 2 : 0,
                    borderColor: "white",
                }
            case SquareSizes.Medium:
                return {
                    width: 36,
                    height: 36,
                    borderRadius: 9,
                    backgroundColor: color
                }
            case SquareSizes.Small:
                return {
                    width: 12,
                    height: 12,
                    borderRadius: 3,
                    backgroundColor: color
                }
        }
        
    }

    function getIcon(icon:Icons, color:string){
        if(icon===Icons.Tick){
            return (
                /*width: 12,
                height: 12,
                borderRadius: 3,
                backgroundColor: 'blue'*/
                <View style={{justifyContent:'center', alignItems:'center', maxHeight:'100%'}}>
                    <Image
                        source={require('../assets/adaptive-icon.png')} 
                        style={{ maxWidth:'85%', maxHeight:'85%' }} 
                    />
                </View> 
            )
        } else if(icon===Icons.Cross) {
            return (
                <View style={{justifyContent:'center', alignItems:'center', maxHeight:'100%', maxWidth:'100%'}}>
                    <Image
                        source={require('../assets/favicon.png')} 
                        style={{ maxWidth:'85%', maxHeight:'85%' }} 
                    />
                </View> 
            )
        }
    } 

    return(
        <View 
            // style={[styles.square, {backgroundColor: color, transform: [{scale: size}]}]}
            style={getSize(size, color, isHighlited)}
        >
            {getIcon(icon, color)}
        </View>
    )
}

const styles = StyleSheet.create({
    bigSquare: {
        width: 42,
        height: 42,
        borderRadius: 13,
    },
    mediumSquare: {
        width: 36,
        height: 36,
        borderRadius: 13,
    },
    smallSquare: {
        width: 12,
        height: 12,
        borderRadius: 13,
    },

})
