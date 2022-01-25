import React from 'react'
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Reviews = () => {
    return (
        <View style={styles.background}>
            <View style={styles.mainReviewContainer}>
                <View style={styles.returnContainer}>
                    <Icon name="chevron-left" size={25} />
                    <Text style={{color: "#392413", lineHeight: 17, fontSize: 14, fontWeight: "400"}}>Back</Text>
                </View>
                <View style={styles.reviewContainer}>
                    <View style={styles.reviewCount}>
                        <Text style={{color: "#392413", fontWeight: "700", fontSize: 20, lineHeight: 24, marginRight: 5}}>5,0</Text>
                        <View style={{justifyContent: 'flex-start'}}>
                            <View style={styles.alignItems}>
                                <Icon name="star" size={15} style={{color: "#8AC43A"}} />
                                <Icon name="star" size={15} style={{color: "#8AC43A"}} />
                                <Icon name="star" size={15} style={{color: "#8AC43A"}} />
                                <Icon name="star" size={15} style={{color: "#8AC43A"}} />
                                <Icon name="star" size={15} style={{color: "#8AC43A"}} />
                            </View>
                            <Text style={{fontSize: 9, lineHeight: 11, fontWeight: "400"}}>Based on 4 reviews</Text>
                        </View>
                    </View>
                    <View style={{flex: 3}}>
                        <View style={styles.alignStars}>
                            <View style={styles.alignItems}>
                                <Icon name="star" size={18} style={{color: "#8AC43A"}} />
                                <Icon name="star" size={18} style={{color: "#8AC43A"}} />
                                <Icon name="star" size={18} style={{color: "#8AC43A"}} />
                                <Icon name="star" size={18} style={{color: "#8AC43A"}} />
                                <Icon name="star" size={18} style={{color: "#8AC43A"}} />
                            </View>
                            <View style={{width: "65%", height: 1, backgroundColor: "#392413", opacity: 0.5, marginLeft: 10, marginRight: 10}} />
                            <Text style={{color: "#392413", fontSize: 18, lineHeight: 22, fontWeight: "700", opacity: 0.5}}>4</Text>
                        </View>
                        <View style={styles.alignStars}>
                            <View style={styles.alignItems}>
                                <Icon name="star" size={18} style={{color: "#8AC43A"}} />
                                <Icon name="star" size={18} style={{color: "#8AC43A"}} />
                                <Icon name="star" size={18} style={{color: "#8AC43A"}} />
                                <Icon name="star" size={18} style={{color: "#8AC43A"}} />
                                <Icon name="star-outline" size={18} style={{color: "#DADADA"}} />
                            </View>
                            <View style={{width: "65%", height: 1, backgroundColor: "#392413", opacity: 0.2, marginLeft: 10, marginRight: 10}} />
                            <Text style={{color: "#392413", fontSize: 18, lineHeight: 22, fontWeight: "700", opacity: 0.2}}>0</Text>
                        </View>
                        <View style={styles.alignStars}>
                            <View style={styles.alignItems}>
                                <Icon name="star" size={18} style={{color: "#8AC43A"}} />
                                <Icon name="star" size={18} style={{color: "#8AC43A"}} />
                                <Icon name="star" size={18} style={{color: "#8AC43A"}} />
                                <Icon name="star-outline" size={18} style={{color: "#DADADA"}} />
                                <Icon name="star-outline" size={18} style={{color: "#DADADA"}} />
                            </View>
                            <View style={{width: "65%", height: 1, backgroundColor: "#392413", opacity: 0.2, marginLeft: 10, marginRight: 10}} />
                            <Text style={{color: "#392413", fontSize: 18, lineHeight: 22, fontWeight: "700", opacity: 0.2}}>0</Text>
                        </View>
                        <View style={styles.alignStars}>
                            <View style={styles.alignItems}>
                                <Icon name="star" size={18} style={{color: "#8AC43A"}} />
                                <Icon name="star" size={18} style={{color: "#8AC43A"}} />
                                <Icon name="star-outline" size={18} style={{color: "#DADADA"}} />
                                <Icon name="star-outline" size={18} style={{color: "#DADADA"}} />
                                <Icon name="star-outline" size={18} style={{color: "#DADADA"}} />
                            </View>
                            <View style={{width: "65%", height: 1, backgroundColor: "#392413", opacity: 0.2, marginLeft: 10, marginRight: 10}} />
                            <Text style={{color: "#392413", fontSize: 18, lineHeight: 22, fontWeight: "700", opacity: 0.2}}>0</Text>
                        </View>
                        <View style={styles.alignStars}>
                            <View style={styles.alignItems}>
                                <Icon name="star" size={18} style={{color: "#8AC43A"}} />
                                <Icon name="star-outline" size={18} style={{color: "#DADADA"}} />
                                <Icon name="star-outline" size={18} style={{color: "#DADADA"}} />
                                <Icon name="star-outline" size={18} style={{color: "#DADADA"}} />
                                <Icon name="star-outline" size={18} style={{color: "#DADADA"}} />
                            </View>
                            <View style={{width: "65%", height: 1, backgroundColor: "#392413", opacity: 0.2, marginLeft: 10, marginRight: 10}} />
                            <Text style={{color: "#392413", fontSize: 18, lineHeight: 22, fontWeight: "700", opacity: 0.2}}>0</Text>
                        </View>
                    </View>
                    <View style={{flex: 15, flexDirection: 'row', marginTop: 40}}>
                        <View>
                            <Image style={styles.profileImage} source={require('../assets/Michael_big.png')} />
                        </View>
                        <View style={{width: "65%", marginLeft: 15}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text style={{fontWeight: "700", fontSize: 16, lineHeight: 20}}>Michael</Text>
                                <View style={styles.alignItems}>
                                    <Icon name="star" size={15} style={{color: "#8AC43A"}} />
                                    <Icon name="star" size={15} style={{color: "#8AC43A"}} />
                                    <Icon name="star" size={15} style={{color: "#8AC43A"}} />
                                    <Icon name="star" size={15} style={{color: "#8AC43A"}} />
                                    <Icon name="star" size={15} style={{color: "#8AC43A"}} />
                                </View>
                            </View>
                            <View>
                                <Text style={{opacity: 0.5, marginTop: 6, marginBottom: 3, fontSize: 10, lineHeight: 12, fontWeight: "500"}}>Dog in good hands</Text>
                            </View>
                            <View>
                                <Text style={{fontSize: 12, marginTop: 3, marginBottom: 6, lineHeight: 14.2, fontWeight: "500"}}>The deal is finished</Text>
                                <Text style={{fontSize: 12, lineHeight: 14.2, fontWeight: "500"}}>Thanks!</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Reviews

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: 'center'
    },
    mainReviewContainer: {
        width: "90%",
        flex: 1
    },
    reviewContainer: {
        flex: 15
    },
    returnContainer: {
        marginTop: 35,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    reviewCount: {
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 10,
        flex: 2
    },
    alignItems: {
        flexDirection: 'row'
    },
    alignStars: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    profileImage: {
        width: 100,
        height: 80,
        borderRadius: 8
    },
})