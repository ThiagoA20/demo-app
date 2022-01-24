import React from 'react'
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'

const Messages = () => {
    return (
        <View style={styles.background}>
            <View style={styles.messages}>
                <View style={styles.searchContainer}>
                    <View style={styles.searchbar}>
                        <TouchableOpacity style={styles.btnsearch}>
                            <Icon name="search" size={20} />
                        </TouchableOpacity>
                        <TextInput
                            style={styles.textinputStyle}
                            placeholder="Search in messages" 
                        />
                        <TouchableOpacity style={styles.btnsearch}>
                            <Icon name="close" size={20} style={{color: "#BDC7AC"}} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.messagesContainer}>
                    <View style={styles.messageObject}>
                        <View style={styles.messageImage}>
                            <Image style={styles.messageImageIcon} source={require('../assets/dog_image.png')} />
                        </View>
                        <View style={styles.messageObjectText}>
                            <Text style={{fontSize: 14}}>Kate White</Text>
                            <Text style={{fontWeight:"bold", color: "#8AC43A", fontSize: 12, lineHeight: 15}}>Dog Missing</Text>
                            <Text style={{color: "#392413", fontSize: 12, opacity: 0.6}}>Thanks!)</Text>
                        </View>
                        <View style={styles.userImage}>
                            <Image style={styles.messageImageUser} source={require('../assets/Kate.png')} />
                        </View>
                        <View style={styles.dateContainer}>
                            <Text style={{color: "#392413", opacity: 0.6, fontSize: 10}}>7 December 2020</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Messages


const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#8AC43A",
    },
    messages: {
        height: "90%",
        backgroundColor: "#FFFFFF",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    searchContainer: {
        flex: 1,
        marginTop: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchbar: {
        backgroundColor: "#F5F5F5",
        width: "90%",
        borderRadius: 100,
        flex: 1,
        flexDirection: 'row'
    },
    btnsearch: {
        width: "15%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    textinputStyle: {
        fontSize: 14,
        color: "#000",
        fontWeight: 'bold',
        width: "70%"
    },
    messagesContainer: {
        flex: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    messageObject: {
        marginTop: 15,
        height: "10%",
        width: "90%",
        flexDirection: 'row',
        borderWidth: 1,
        borderBottomColor: "#8AC43A",
        justifyContent: 'space-between',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: 'transparent',
        paddingBottom: 10,
    },
    messageImage: {
        height: "100%",
        width: "20%",
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    messageObjectText: {
        width: "30%",
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: -30
    },
    messageImageIcon: {
        width: 50,
        height: 50,
        borderRadius: 7
    },
    userImage: {
        width: "10%"
    },
    messageImageUser: {
        marginLeft: -30,
        width: 30,
        height: 30
    },
    dateContainer: {
        justifyContent: 'flex-start',
    }
})