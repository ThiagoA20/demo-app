import React from 'react'
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Details = () => {
    return (
        <View style={styles.background}>
            <View style={styles.mainDetailsContainer}>
                <View style={styles.returnContainer}>
                    <Icon name="chevron-left" size={25} />
                    <Text style={{color: "#392413", lineHeight: 17, fontSize: 14, fontWeight: "400"}}>Back</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image style={{width: 180, height: 180}} source={require('../assets/dog_image2.png')} />
                    <Image style={{width: 180, height: 180}} source={require('../assets/dog_image2.png')} />
                </View>
                <View style={styles.DetailsContainer}>
                    <Text style={{color: "#8AC43A", fontSize: 28, lineHeight: 35, fontWeight: "700"}}>Header</Text>
                    <View style={{flexDirection: 'row', marginTop: 5, marginBottom: 5, alignItems: 'center'}}>
                        <Icon name="clock-time-five-outline" size={20} style={{color: "#8AC43A"}} />
                        <Text style={{fontSize: 14, lineHeight: 17, marginLeft: 5}}>Today, 9:20</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Icon name="map-marker-outline" size={20} style={{color: "#8AC43A"}} />
                        <Text style={{fontSize: 14, lineHeight: 17, marginLeft: 5}}>142, 5th avenue, NY</Text>
                    </View>
                    <View style={{width: "100%", marginTop: 10, marginBottom: 10}}>
                        <Text style={{fontSize: 14, lineHeight: 17.5, fontWeight: "400"}}>Details Details Details Details Details Details</Text>
                        <Text style={{fontSize: 14, lineHeight: 17.5, fontWeight: "400"}}>Details Details Details Details Details Details</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View>
                            <Text style={{marginBottom: 3}}>Elisabeth Hollow</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.profileInfo}>5,0</Text>
                                <Icon name="star" size={15} style={{color: "#8AC43A", marginLeft: 4}} />
                                <Icon name="star" size={15} style={{color: "#8AC43A"}} />
                                <Icon name="star" size={15} style={{color: "#8AC43A"}} />
                                <Icon name="star" size={15} style={{color: "#8AC43A"}} />
                                <Icon name="star" size={15} style={{color: "#8AC43A", marginRight: 4}} />
                                <Text style={styles.profileInfo}>4 reviews</Text>
                            </View>
                        </View>
                        <View>
                            <Image style={{width: 50, height: 50, borderRadius: 7}} source={require('../assets/Kate_big.png')}/>
                        </View>
                    </View>
                    <View>
                        <Text style={{color: "#8AC43A"}}>Comments</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View>
                                <Text>I saw the dog in the park! Message me</Text>
                                <Text style={styles.profileInfo}>Michael Anderson, 14:50 10th December 2021</Text>
                            </View>
                            <View>
                                <Image style={{width: 30, height: 30, borderRadius: 7}} source={require('../assets/Michael_big.png')}/>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.messageContainer}>
                    <TouchableOpacity style={styles.btnMessage}>
                        <Text style={{fontSize: 16, fontWeight: "700", color: "#FFFFFF", lineHeight: 19}}>MESSAGE ELISABETH</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.addComment}>
                    <TouchableOpacity style={{width: "10%", alignItems: 'flex-start', justifyContent: 'center'}}>
                        <Icon name="plus" size={25} />
                    </TouchableOpacity>
                    <TextInput style={{width: "80%"}} placeholder="Add a comment" />
                    <TouchableOpacity style={{width: "10%", alignItems: 'flex-end', justifyContent: 'center'}}>
                        <Icon name="send" size={25} style={{color: "#8AC43A"}} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: 'center'
    },
    returnContainer: {
        marginTop: 35,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    mainDetailsContainer: {
        width: "90%",
        flex: 1
    },
    imageContainer: {
        flex: 3,
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    DetailsContainer: {
        flex: 4,
        marginTop: 15
    },
    messageContainer: {
        flex: 2,
        marginTop: 20,
        width: "100%",
        alignItems: "center"
    },
    profileInfo: {
        fontSize: 12, 
        lineHeight: 15,
        opacity: 0.5, 
        fontWeight: "500",
    },
    btnMessage: {
        width: "70%",
        height: "35%",
        marginTop: 15,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "#8AC43A"
    },
    addComment: {
        flex: 1,
        flexDirection: 'row',
        width: "100%",
        borderWidth: 1,
        borderTopColor: "#8AC43A",
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent'
    }
})