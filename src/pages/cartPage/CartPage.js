import jwtDecode from 'jwt-decode';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {getCartItem} from '../../features/productListing/ProductListingSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FlashList} from '@shopify/flash-list';
const CartPage = ({navigation}) => {
  const {isLoader, cartItem} = useSelector(state => state.userProduct);
  const dispatch = useDispatch();
  const [userId, setUser] = useState();
  const getToken = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      setUser(decodedToken?.id);
    }
  };

  useEffect(() => {
    dispatch(getCartItem(userId));
  }, [userId]);

  useEffect(() => {
    getToken();
  }, []);

  return (
    <>
      {isLoader ? (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#ff6600" />
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <AntDesign
              style={styles.iconContainer}
              name="left"
              size={30}
              onPress={() => {
                navigation.navigate('CategoryListing');
              }}
            />
          </View>
          <FlashList
            data={cartItem}
            estimatedItemSize={200}
            renderItem={item => {
              console.log('sdgdfhgfh', item.item.product.quantity);
              return (
                <View style={styles.cartProductList}>
                  <View>
                    <Image
                      source={require('../../assets/image/abc.jpg')}
                      style={styles.cartImage}
                    />
                    <Text style={styles.cartRemove}>Remove</Text>
                  </View>
                  <View style={styles.productDetails}>
                    <Text style={styles.cartName}>
                      {item?.item.product?.title}
                    </Text>
                    <View style={styles.counterContainer}>
                      <Pressable style={styles.IncDecIcon}>
                        <Text style={styles.IncDecIconText}>-</Text>
                      </Pressable>
                      <View style={styles.cartInput}>
                      <Text style={{fontSize:18, color:"black"}}>
                        {item?.item?.product?.quantity}
                      </Text>
                      </View>
                      <Pressable style={styles.IncDecIcon}>
                        <Text style={styles.IncDecIconText}>+</Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              );
            }}
          />
          <View style={styles.cartBottom}>
            <Text style={styles.cartPrice}>2561</Text>
            <Pressable style={styles.CartPageBottom}>
              <Text style={styles.CartPagePlace}>Place Order</Text>
            </Pressable>
          </View>
        </View>
      )}
    </>
  );
};

export default CartPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dfe4ea',
    height: '100%',
  },

  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  iconContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    margin: 8,
    padding: 3,
    width: 36,
    color: '#a5a1a1',
  },
  productDetails: {
    marginLeft: 10,
  },
  headerContainer: {
    height: 50,
    backgroundColor: '#ff6600',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 50,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  cartProductList: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 5,
    // marginBottom:50
  },
  cartPrice: {
    color: '#000',
    fontSize: 20,
    fontWeight: '500',
    padding: 5,
  },
  CartPageBottom: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff6600',
    height: 40,
    marginRight: 9,
  },
  CartPagePlace: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '400',
  },
  cartImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  cartName: {
    color: '#000',
    fontSize: 20,
    fontWeight: '500',
  },
  cartRemove: {
    color: '#e24444',
    fontSize: 18,
    fontWeight: '500',
  },
  counterContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  IncDecIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#ff6600',
    justifyContent: 'center',
    alignItems: 'center',
  },
  IncDecIconText: {
    position: 'absolute',
    bottom: -6,
    fontSize: 30,
    color: '#fff',
  },
  cartInput: {
    backgroundColor: '#cfcece',
    height: 25,
    width: 25,
    margin: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
