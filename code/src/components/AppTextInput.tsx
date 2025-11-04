import { StyleSheet, TextInput, View, type TextInputProps, type KeyboardTypeOptions } from 'react-native'
import React from 'react'

type AppTextInputProps = Omit<TextInputProps, 'value' | 'onChangeText' | 'placeholder' | 'keyboardType'> & {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
}

const AppTextInput = ({value, onChangeText, placeholder, keyboardType, ...otherProps}: AppTextInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput 
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        
        {...otherProps}
      />
    </View>
  )
}

export default AppTextInput

const styles = StyleSheet.create({container:{
    backgroundColor: "#EEEFEE",
    width:"100%",
    height: 40,
    borderRadius: 8,
    justifyContent:"center",
    paddingHorizontal: 8,
    marginBottom: 20
}})