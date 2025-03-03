import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, ActivityIndicator, FlatList} from 'react-native'
import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

const Gift = ({ navigation }) => {
    const isIPhone = Platform.OS === 'ios';
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <View style={{ marginLeft: 20, }} >
                    <TouchableOpacity onPress={() => navigation.navigate("Trang chủ")} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../assets/icons/arrow-left.png')} style={{ width: 13, height: 15 }} />
                        <Text style={{ marginLeft: 10, fontSize: isIPhone ? 15 : 17, fontWeight: 400, color: '#1A93D4' }}>Quay lại</Text>
                    </TouchableOpacity>
                </View>
            ),
        });
    }, []); 
    const [wallairconditioner, setwallairconditioner] = useState([
        {
            id: 1,
            name: 'Vệ sinh máy lạnh từ 1 HP - 2.5 HP',
            image: require('../../assets/images/airconditioner1.png'),
            price: 120000,
            cost: 199000,
            discount: 79000,
            promotion_apply_at: "Khuyến mãi áp dụng tại Hồ Chí Minh",
        },
        {
            id: 2,
            name: 'Máy lạnh multi (1 dàn nóng + 2 dàn lạnh)',
            image: require('../../assets/images/airconditioner2.png'),
            price: 630000,
            cost: 700000,
            discount: 70000,
            promotion_apply_at: "Khuyến mãi áp dụng tại Hồ Chí Minh",
        },
        {
            id: 3,
            name: 'Máy lạnh multi (1 dàn nóng + 3 dàn lạnh)',
            image: require('../../assets/images/airconditioner3.png'),
            price: 675000,
            cost: 750000,
            discount: 75000,
            promotion_apply_at: "Khuyến mãi áp dụng tại Hồ Chí Minh",
        },
    ]);
    const [airconditioner, setairconditioner] = useState([
        {
            id: 1,
            name: 'Máy lạnh âm trần 3H-5HP',
            image: require('../../assets/images/airconditioner5.png'),
            price: 300000,
            cost: 500000,
            discount: 200000,
            promotion_apply_at: "Khuyến mãi áp dụng tại Hồ Chí Minh",
        },
        {
            id: 2,
            name: 'Máy lạnh tủ đứng 3H-5HP',
            image: require('../../assets/images/airconditioner6.png'),
            price: 450000,
            cost: 500000,
            discount: 50000,
            promotion_apply_at: "Khuyến mãi áp dụng tại Hồ Chí Minh",
        },
    ]);
    const numberToCurrency = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      };
    return (
        <View style={styles.container}>
            <View style={{borderWidth: 0, paddingBottom: 10}}>
                <Text style={{fontSize: isIPhone?30:32, marginLeft: 20, fontWeight: 700}}>Đặt lịch vệ sinh thiết bị</Text>
            </View>
            <ScrollView style={{flex: 1,}}>
                <View style={{alignItems: 'center',marginTop: 40, paddingBottom: 13}}>
                    <Image source={require('../../assets/images/tantam.png')} style={{width: 224, height:72,}} resizeMode='contain'/>
                    <View style={{marginHorizontal: isIPhone?18:23, marginTop: 28}}>
                        <Text style={{color: '#5F5F5F', fontSize: 16, fontWeight: 400, textAlign: 'justify'}}>Anh Trần Quang Huy cần vệ sinh thiết bị gì? Vui lòng xem danh sách bên dưới. 
                        <Text style={{color: '#0366D6'}}> “Sản phẩm mua tại Điện máy XANH, hay bất kỳ cửa hàng nào khác đều được phục vụ Anh nhé!”</Text></Text>
                    </View>
                </View>
                <View style={{backgroundColor: '#FFF', paddingHorizontal: isIPhone?5:10}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 6, paddingHorizontal: isIPhone?10:10}}>
                        <Text style={{color: 'rgba(3, 102, 214, 1)', fontSize: isIPhone?22:24, fontWeight: 500,}}>Vệ sinh máy lạnh treo tường</Text>
                        <TouchableOpacity>
                            <MaterialIcons name="expand-less" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={wallairconditioner}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={2}
                        scrollEnabled={false}
                        
                        renderItem={({item}) => (
                            <View style={{marginTop: 15, alignItems: 'center', borderBottomWidth: 3, borderRightWidth: 3, borderRightColor: 'rgba(245, 245, 245, 1)'
                                , borderBottomColor: 'rgba(245, 245, 245, 1)', borderBottomRightRadius: 15,width: isIPhone?175:185, height:isIPhone?384:425, marginHorizontal: isIPhone?4:5}}>
                                <View style={{height: 124, alignItems: 'center', justifyContent: 'center'}}>
                                    <Image source={item.image}  resizeMode='contain'/>
                                </View>
                                <View style={{marginTop: 32, marginHorizontal: 8, borderBottomColor: '#CCC', borderBottomWidth: 1, paddingBottom: 5, height: isIPhone?90:125}}>
                                    <Text style={{fontSize: isIPhone?16:18, fontWeight: 500, color: '#104887',}}>{item.name}</Text>
                                    <View style={{flexDirection: 'row', marginTop: 3, justifyContent: 'space-between'}}>
                                        <Text style={{fontSize: isIPhone?18:19, fontWeight: 500, color: '#094383'}}>{numberToCurrency(item.price)}₫</Text>
                                        <Text style={{color: '#3A689C', fontSize: 16}}>/ Thiết bị</Text>
                                    </View>
                                    <Text style={{fontSize: isIPhone?15:15, fontWeight: 400, color: '#CFCFCF', textDecorationLine: 'line-through', textDecorationStyle: 'solid', marginTop: 3}}>{numberToCurrency(item.cost)}₫</Text>
                                </View>
                                <View style={{paddingTop: 20, alignItems: 'flex-start', width: '100%', paddingHorizontal: 8,}}>
                                    <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                        <Image source={require('../../assets/icons/gift-solid.png')} style={{width: 18, height: 18, }}/>
                                        <Text style={{marginLeft: 5, fontSize: isIPhone?13:13, fontWeight: 500, color: '#616161'}}>Giảm {numberToCurrency(item.discount)}₫</Text>
                                    </View>
                                    <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 10}}>
                                        <Image source={require('../../assets/icons/gift-solid.png')} style={{width: 18, height: 18, }}/>
                                        <Text style={{marginLeft: 5, fontSize: isIPhone?15:15, fontWeight: 500, color: '#616161', width: 145, }}>{item.promotion_apply_at}</Text>
                                    </View>
                                </View>
                                <View style={{width: '100%', alignItems: 'flex-end', marginRight: 10, marginTop: 10}}>
                                    <TouchableOpacity style={{backgroundColor: '#FFC62D', width: 37, height: 37, borderRadius: 15, alignItems: 'center', justifyContent: 'center'}}>
                                        <Image source={require('../../assets/icons/plus-solid-2.png')} style={{width: 14, height: 16,}}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </ScrollView> 
        </View>
    );
}

export default Gift;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(245, 245, 245, 1)',
    },
});
