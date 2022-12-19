import React from "react"
import { View,Text } from "react-native"
import styles from "./style"

function Box({bgColor,title}) {
    
    return(
        <View style={[styles.containerStyle,{
            backgroundColor: bgColor,
            
        }]}>
        <Text style={styles.titleStyle}>{title}</Text>
        </View>
    )
}

export default Box