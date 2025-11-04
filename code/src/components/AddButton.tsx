import { Platform, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

type AddButtonProps = { onPress: () => void }

const AddButton = ({onPress}: AddButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <AntDesign name="plus" size={50} color="#fff" />
    </TouchableOpacity>
  )
}

export default AddButton

const styles = StyleSheet.create({
    container:{
        height: 70,
        width:70,
        backgroundColor:"#1273DE",
        borderRadius: 40,
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        marginBottom:Platform.OS === "android" ? 30 : 0
    }
})