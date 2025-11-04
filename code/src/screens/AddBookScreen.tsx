import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { createBook, updateBook } from "../api/http";

type Book = {
  id: string | number;
  book_title: string;
  name_of_author: string;
  price_of_book: number | string;
  cover: string;
}

type AddBookScreenProps = {
  onCloseIconPress: () => void;
  onCreateSuccess: () => void;
  selectedItem?: Partial<Book>;
}

const AddBookScreen = ({ onCloseIconPress, onCreateSuccess, selectedItem }: AddBookScreenProps) => {
  const [bookName, setBookName] = useState( selectedItem?.book_title ?? "");
  const [authorName, setAuthorName] = useState( selectedItem?.name_of_author ?? "");
  const [coverURL, setCoverURL] = useState( selectedItem?.cover ?? "");
  const [price, setPrice] = useState( selectedItem?.price_of_book ?? "");

  console.log(!!selectedItem);
 
  const createNewBook = () => {
    createBook({
      body:{
        book_title: bookName,
        name_of_author: authorName,
        price_of_book: price,
        cover: coverURL
      },
      onSuccess: () => { 
        onCloseIconPress() 
        onCreateSuccess()
      },
      onError: (err) => { Alert.alert("Error Happen") }
    })
  }

  const editBook = () => {
    updateBook({
      ID: selectedItem?.id,
      body:{
        book_title: bookName,
        name_of_author: authorName,
        price_of_book: price,
        cover: coverURL
      },
      onSuccess: () => { 
        onCloseIconPress() 
        onCreateSuccess()
      },
      onError: (err) => { Alert.alert("Error Happen") }
    })
  }



  return (
    <SafeAreaView>
      <AntDesign
        name="closecircle"
        size={24}
        color="#E81D1D"
        onPress={onCloseIconPress}
      />
      <View style={styles.body}>
        <Text style={styles.title}>Book Details</Text>
        <AppTextInput
          value={bookName}
          onChangeText={setBookName}
          placeholder={"Book Name"}
        />
        <AppTextInput
          value={authorName}
          onChangeText={setAuthorName}
          placeholder={"Author Name"}
        />
        <AppTextInput
          value={coverURL}
          onChangeText={setCoverURL}
          placeholder={"Cover Image"}
        />
        <AppTextInput
          value={price}
          onChangeText={setPrice}
          placeholder={"Book Price"}
          keyboardType={"numeric"}
        />
      <AppButton onPress={ !!selectedItem ? editBook : createNewBook}/>
      </View>
    </SafeAreaView>
  );
};

export default AddBookScreen;

const styles = StyleSheet.create({
  body: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 15,
    paddingTop: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 20,
  },
});
