import axios from "axios";
import { Alert } from "react-native";

const endpointURL = "https://6755c1d011ce847c992b1144.mockapi.io/books";

type SuccessHandler<T = unknown> = (data: T) => void;
type ErrorHandler = (error: unknown) => void;

export const getListOfBooks = async ({onSuccess, onError}: { onSuccess?: SuccessHandler; onError?: ErrorHandler }) => {
  try {
    const response = await axios.get(endpointURL);
    console.log(JSON.stringify(response.data, null));
    onSuccess && onSuccess(response.data)
  } catch (error) {
    onError && onError(error)
    console.log(error);
  }
};

export const getBookByID = async ({onSuccess, onError}: { onSuccess?: SuccessHandler; onError?: ErrorHandler }) => {
  try {
    const response = await axios.get(`${endpointURL}/5`);
    console.log(JSON.stringify(response.data, null, 3));
    onSuccess && onSuccess(response.data)
  } catch (error) {
    onError && onError(error)
    console.log("An Error Occurred", error);
  }
};

export const deleteBookByID = async({onSuccess, onError, itemID}: { onSuccess?: SuccessHandler; onError?: ErrorHandler; itemID: string | number }) => {
  try {
    const response = await axios.delete(`${endpointURL}/${itemID}`)
    Alert.alert("Book Is Deleted Successfully")
    onSuccess && onSuccess(response.data)
  } catch (error) {
    onError && onError(error)
    console.log(error)
  }
}


export const createBook = async({onSuccess, onError, body}: { onSuccess?: SuccessHandler; onError?: ErrorHandler; body: Record<string, unknown> }) => {
  try {
    const response = await axios.post(endpointURL, body)

    Alert.alert("Book Has Been Created!")
    onSuccess && onSuccess(response.data)
  } catch (error) {
    onError && onError(error)
    console.log(error)
  }
}

export const updateBook = async({onSuccess, onError, body, ID}: { onSuccess?: SuccessHandler; onError?: ErrorHandler; body: Record<string, unknown>; ID: string | number }) => {
  try {
    const response = await axios.put(`${endpointURL}/${ID}`, body)

    Alert.alert("Book Has Been Updated!")
    onSuccess && onSuccess(response.data)
  } catch (error) {
    onError && onError(error)
    console.log(error)
  }
}