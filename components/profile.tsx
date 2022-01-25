import React from 'react'
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Profile = () => {
    return (
        <View style={styles.background}>
            <View style={styles.profile}>
                <View style={styles.profileHeader}>
                    <View style={{width: "100%", justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 18, color: "#392413", lineHeight: 22.5, fontWeight: "500"}}>Profile</Text>
                    </View>
                    <View style={styles.profileInfoContainer}>
                        <View>
                            <Text style={styles.Username}>Elisabeth White</Text>
                            <View style={styles.alignProfileInfo}>
                                <Text style={styles.profileText}>5,0</Text>
                                <Icon name="star" size={15} style={{color: "#8AC43A", marginLeft: 4}} />
                                <Icon name="star" size={15} style={{color: "#8AC43A"}} />
                                <Icon name="star" size={15} style={{color: "#8AC43A"}} />
                                <Icon name="star" size={15} style={{color: "#8AC43A"}} />
                                <Icon name="star" size={15} style={{color: "#8AC43A", marginRight: 4}} />
                                <Text style={styles.profileText}>4 reviews</Text>
                            </View>
                            <View style={styles.alignProfileInfo}>
                                <Text style={styles.profileRegisterInfo}>Registration</Text>
                                <Text style={styles.profileRegisterInfo}>01.01.2022</Text>
                            </View>
                        </View>
                        <View>
                            <Image style={styles.profileImage} source={require('../assets/Kate_big.png')} />
                        </View>
                    </View>
                </View>
                <View style={styles.profileBody}>
                <Text style={styles.bodySectionTitle}>Pets</Text>
                    <View style={styles.sectionContainer}>
                        <View>
                            <Image style={styles.sectionObjectImage} source={require('../assets/cat.png')} />
                        </View>
                        <View style={styles.sectionTextContainer}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text style={styles.sectionText}>Cat: Kitty, 10y</Text>
                                <Text style={styles.sectionText}>Chip:Yes</Text>
                            </View>
                            <View>
                                <Text style={{marginTop: 5, marginBottom: 5, fontSize: 14, lineHeight: 17, fontWeight: "400"}}>Color: black</Text>
                                <Text style={styles.sectionText}>Description: found in Central park</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={styles.bodySectionTitle}>Events</Text>
                    <View style={styles.sectionContainer}>
                        <View>
                            <Image style={styles.sectionObjectImage} source={require('../assets/dog_big.png')} />
                        </View>
                        <View style={styles.sectionTextContainer}>
                            <Text style={{fontSize: 14, fontWeight: "700", lineHeight: 17.5}}>Dog is missing</Text>
                            <View style={{flexDirection: 'row', marginTop: 5, marginBottom: 5}}>
                                <Icon name="clock-time-five-outline" size={15} style={{color: "#8AC43A"}} />
                                <Text style={{fontSize: 12, lineHeight: 15, marginLeft: 5}}>Today, 9:20</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Icon name="map-marker-outline" size={15} style={{color: "#8AC43A"}} />
                                <Text style={{fontSize: 12, lineHeight: 15, marginLeft: 5}}>New York, 5th avenue</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.messageButtonContainer}>
                    <TouchableOpacity style={styles.messageButton}>
                        <Text style={{fontSize: 16, fontWeight: "700", color: "#FFFFFF", lineHeight: 19}}>MESSAGE ELISABETH</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#8AC43A",
    },
    profile: {
        height: "90%",
        backgroundColor: "#FFFFFF",
        shadowColor: "#000",
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    profileHeader: {
        marginTop: 35,
        width: "90%",
        flex: 3
    },
    profileInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    Username: {
        color: "#392413",
        fontSize: 16,
        lineHeight: 19,
        fontWeight: "700"
    },
    profileText: {
        color:"#392413",
        fontSize: 12,
        lineHeight: 15,
        opacity: 0.5,
        fontWeight: "500"
    },
    profileRegisterInfo: {
        fontSize: 12, 
        lineHeight: 14, 
        fontWeight: "400", 
        marginRight: 5
    },
    alignProfileInfo: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 4,
    },
    profileImage: {
        width: 100,
        height: 80,
        borderRadius: 8
    },
    profileBody: {
        width: "90%",
        flex: 9
    },
    bodySectionTitle: {
        marginTop:10,
        marginBottom: 10, 
        fontSize: 22, 
        color: "#392413", 
        lineHeight: 27, 
        fontWeight: "500"
    },
    sectionContainer: {
        flexDirection: 'row',
        marginTop: 10
    },
    sectionObjectImage: {
        width: 75, 
        height: 55, 
        borderRadius: 8
    },
    sectionTextContainer: {
        width: "60%",
        marginLeft: 20
    },
    sectionText: {
        fontSize: 14,
        lineHeight: 17,
        fontWeight: "400"
    },
    messageButtonContainer: {
        width: "90%",
        alignItems: 'center',
        flex: 2
    },
    messageButton: {
        width: "60%",
        height: "45%",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: "#8AC43A",
    }
})