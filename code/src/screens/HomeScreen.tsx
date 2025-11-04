import { View, Text, SafeAreaView, FlatList, Modal } from "react-native";
import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import { deleteBookByID, getListOfBooks } from "../api/http";
import AddButton from "../components/AddButton";
import AddBookScreen from "./AddBookScreen";

const HomeScreen = () => {
  type Book = {
    id: string | number;
    name_of_author: string;
    price_of_book: number | string;
    cover: string;
    book_title: string;
  };

  const [bookList, setBookList] = useState<Book[] | undefined>();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Partial<Book>>({})

  const getListOfBooksFN = () => {
    getListOfBooks({
      onSuccess: (books) => setBookList(books),
      onError: (err) => console.log(err),
    });
  };

  useEffect(() => {
    getListOfBooksFN();
  }, []);

  const onDeleteItem = (item: Book) => {
    console.log(item.id);
    deleteBookByID({
      onSuccess: () => {
        getListOfBooksFN();
      },
      onError: (error) => console.log(error),
      itemID: item.id,
    });
  };

  const onEditItem = (item: Book) => {
    setModalVisible(true)
    setSelectedItem(item)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={bookList}
        keyExtractor={(item: Book) => item.id.toString()}
        renderItem={({ item }: { item: Book }) => (
          <BookCard
            authorName={item.name_of_author}
            price={item.price_of_book}
            imageURI={item.cover}
            title={item.book_title}
            onDeleteItem={() => onDeleteItem(item)}
            onEditItem={() => onEditItem(item)}
          />
        )}
      />
      <AddButton onPress={() => {
                                setModalVisible(true)
                                setSelectedItem({})
                            }}/>
      <Modal visible={modalVisible} animationType="slide">
        <AddBookScreen 
            onCloseIconPress={() => setModalVisible(false)}
            onCreateSuccess={() => getListOfBooksFN()}
            selectedItem={selectedItem}
          />
      </Modal>
    </SafeAreaView>
  );
};

export default HomeScreen;
