import { View, Text, Image, TouchableOpacity, StyleSheet} from "react-native"
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

type BookCardProps = {
    title: string;
    price: number | string;
    authorName: string;
    imageURI: string;
    onDeleteItem: () => void;
    onEditItem: () => void;
}

const BookCard = ({title, price, authorName, imageURI, onDeleteItem, onEditItem}: BookCardProps) => {
    return <View style={styles.container}>

        {/* Image Section */}
        <Image 
            source={{uri: imageURI}}
            style={styles.coverImage}
        
        />

        {/* DEtails Section */}
        <View style={styles.detailsContainer}>
            <Text style={styles.bookName}>{title}</Text>
            <Text style={styles.authorName}>{authorName}</Text>
            <Text style={styles.price}>${price}</Text>
        </View>

        {/* Delete And Edit Buttons */}
        <View style={styles.delEditContainer}>
            <TouchableOpacity style={styles.circleButton} onPress={onDeleteItem}>
                <MaterialIcons name="delete-outline" size={20} color="red" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.circleButton} onPress={onEditItem}>
                <AntDesign name="edit" size={20} color="#25a" />
            </TouchableOpacity>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        backgroundColor: "#fff",
        borderRadius: 10,
        padding:10,
        shadowColor:"#000",
        shadowOffset:{width:0, height:2},
        shadowOpacity: .1,
        shadowRadius:4,
        elevation: 3,
        margin:10
    },
    coverImage:{
        height: 120,
        width:"25%",
        borderRadius: 8,
        resizeMode:"stretch"
    },
    detailsContainer:{
        flex:1,
        marginHorizontal: 10,
        marginTop:10
    },
    bookName:{
        fontSize: 16,
        fontWeight:"bold",
        color:"#000"
    },
    authorName:{
        fontSize: 14,
        color:"#888",
        marginVertical: 3
    },
    price:{
        fontSize: 16,
        fontWeight:"bold",
        color:"#25a"
    },
    delEditContainer:{
        flexDirection:"row",
        alignItems:"center"
    },
    circleButton:{
        height:35,
        width:35,
        borderRadius: 20,
        backgroundColor: "#eee",
        justifyContent:"center",
        alignItems:"center",
        marginStart: 10
    }
})

export default BookCard