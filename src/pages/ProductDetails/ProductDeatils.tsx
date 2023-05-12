import React from 'react';
import {Button, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const ProductDeatils = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <AntDesign
          style={styles.iconContainer}
          name="left"
          size={30}
          onPress={() => {
            navigation.navigate('ProductListing');
          }}
        />
        <View>
          <Text style={styles.headerText}>Product Details</Text>
        </View>
        <View style={styles.cartValue}>
          <Text style={styles.cartItemValue}>0</Text>
        </View>
        <FontAwesome
          name="shopping-cart"
          size={25}
          color={'white'}
          style={styles.cartIcon}
          onPress={() => {
            navigation.navigate('CartPage');
          }}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/image/abc.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.productContainer}>
        <Text style={styles.productDetails}>Product name</Text>
        <Text style={styles.productPrice}>85421</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.buttonAddToCart}>
          <Text style={styles.buttonAddToCartText}>Add to cart</Text>
        </Pressable>
        <Pressable style={styles.buttonBuy}>
          <Text style={styles.buttonBuyNow}>Buy Now</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ProductDeatils;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dfe4ea',
    height: '100%',
  },
  headerText:{
    fontSize:20,
    color:"#fff"
  },
  iconContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    margin: 8,
    padding: 3,
    width: 36,
    color: '#a5a1a1',
  },
  image: {
    width: 350,
    height: 400,
    borderRadius: 10,
  },
  headerContainer: {
    height: 50,
    backgroundColor: '#ff6600',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartValue: {
    position: 'absolute',
    right: 4,
    top: 5,
    width: 16,
    height: 17,
    borderRadius: 50,
    backgroundColor: '#ff6600',
    borderColor: '#fff',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartIcon: {
    marginRight: 18,
  },
  cartItemValue: {
    color: '#fff',
    fontSize: 13,
    top: -2,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:10
  },
  productContainer: {
    padding: 5,
  },
  productDetails: {
    fontSize: 20,
    color: '#242222',
    fontWeight: '500',
  },
  productPrice: {
    fontSize: 20,
    fontWeight: '500',
    color: '#0059ff',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    position:"absolute",
    bottom:0
  },
  buttonAddToCart: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 50,
  },
  buttonBuy: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff6600',
    height: 50,
  },
  buttonAddToCartText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '400',
  },
  buttonBuyNow: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '400',
  },
});
