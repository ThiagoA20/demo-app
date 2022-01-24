import React from 'react'
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Chat = () => {
    return (
        <View style={styles.background}>
            <View style={styles.messageViewer}>
                <View style={styles.messageHeader}>
                    <TouchableOpacity>
                        <Icon name="chevron-left" size={25} />
                    </TouchableOpacity>
                    <View style={{marginLeft: -55, justifyContent: 'flex-start'}}>
                        <Text style={{color: "#392413", fontSize: 14, lineHeight: 17, fontWeight: "400"}}>Kate White</Text>
                        <Text style={{marginTop: 5, color: "#8AC43A", fontSize: 14, lineHeight: 17, fontWeight: "700"}}>Dog Missing</Text>
                    </View>
                    <View style={{marginLeft: -55, justifyContent: 'flex-start'}}>
                        <Text style={{color: "#392413", fontSize: 10, lineHeight: 12, opacity: 0.6, fontWeight: "400"}}>online 3h ago</Text>
                    </View>
                    <View style={{justifyContent: 'flex-start'}}>
                        <Image style={styles.messageImageIcon} source={require('../assets/dog_image.png')} />
                    </View>
                </View>
                <View style={styles.messageBody}>
                    <View style={styles.messageSender}>
                        <Image style={styles.messageImageUser} source={require('../assets/Kate.png')} />
                        <Text style={styles.messageText}>Where have you seen my dog?</Text>
                        <Text style={styles.messageTime}>15:12</Text>
                    </View>
                    <View style={styles.messageReceiver}>
                        <Text style={styles.messageTime}>15:15</Text>
                        <Text style={styles.messageText}>I saw the dog in the Central park</Text>
                        <Image style={styles.messageImageUser} source={require('../assets/Michael.png')} />
                    </View>
                    <View style={styles.messageSender}>
                        <Image style={styles.messageImageUser} source={require('../assets/Kate.png')} />
                        <Text style={styles.messageText}>Thanks!)</Text>
                        <Text style={styles.messageTime}>15:25</Text>
                    </View>
                </View>
            </View>
            <View style={styles.sendMessageContainer}>
                <TouchableOpacity style={{width: "10%", alignItems: 'flex-start', justifyContent: 'center'}}>
                    <Icon name="plus" size={25} />
                </TouchableOpacity>
                <TextInput style={styles.textinputStyle} placeholder="Message here" />
                <TouchableOpacity style={{width: "10%", alignItems: 'flex-end', justifyContent: 'center'}}>
                    <Icon name="send" size={25} style={{color: "#8AC43A"}} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Chat

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    messageViewer: {
        flex: 10,
        width: "90%"
    },
    messageHeader: {
        flex: 1,
        marginTop: 35,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    messageImage: {
        height: "100%",
        width: "20%",
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    messageImageIcon: {
        width: 50,
        height: 50,
        borderRadius: 7
    },
    messageBody: {
        flex: 8,
        width: "100%"
    },
    messageImageUser: {
        width: 30,
        height: 30
    },
    messageSender: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    messageReceiver: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    messageText: {
        fontSize: 10,
        color: "#392413",
        marginLeft: 9,
        marginRight: 9,
        lineHeight: 12
    },
    messageTime: {
        fontSize: 10,
        color: "#392413",
        lineHeight: 12,
        opacity: 0.6
    },
    sendMessageContainer: {
        flex: 1,
        width: "90%",
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopColor: "#8AC43A",
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent'
    },
    textinputStyle: {
        fontSize: 14,
        color: "#392413",
        opacity: 0.6,
        fontWeight: 'bold',
        height: "100%",
        outline: "none",
        width: "80%"
    },
})