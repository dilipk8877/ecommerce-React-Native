import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../features/productListing/ProductListingSlice';
const ProductListing = ({navigation}) => {
  const {product} = useSelector((state)=>state.userProduct)
  const [heart, setHeart] = useState(false);
console.log(product,"sdfgdf")

const dispatch = useDispatch()
useEffect(()=>{
  dispatch(getProduct())
},[])

  const handleHeartReset = () => {
    setHeart(!heart);
  };
  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <AntDesign
          style={styles.leftIcon}
          name="left"
          size={30}
          onPress={() => {
            navigation.navigate('CategoryListing');
          }}
        />
        <View>
          <Text style={styles.headerText}>Product Page</Text>
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
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => {
            navigation.navigate('ProductDeatils');
          }}>
          <Image
            source={require('../../assets/image/abc.jpg')}
            style={styles.image}
          />
          <AntDesign
            name="heart"
            style={styles.iconContainer}
            size={30}
            color={heart ? 'red' : 'white'}
            onPress={() => {
              handleHeartReset();
            }}
          />
          <View style={styles.productContainer}>
            <Text style={styles.productDetails}>Product name</Text>
            <Text style={styles.productDetails}>85421</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => {
            navigation.navigate('ProductDeatils');
          }}>
          <Image
            source={require('../../assets/image/abc.jpg')}
            style={styles.image}
          />
          <AntDesign
            name="heart"
            style={styles.iconContainer}
            size={30}
            color={heart ? 'red' : 'white'}
            onPress={() => {
              handleHeartReset();
            }}
          />
          <View style={styles.productContainer}>
            <Text style={styles.productDetails}>Product name</Text>
            <Text style={styles.productDetails}>85421</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => {
            navigation.navigate('ProductDeatils');
          }}>
          <Image
            source={require('../../assets/image/abc.jpg')}
            style={styles.image}
          />
          <AntDesign
            name="heart"
            style={styles.iconContainer}
            size={30}
            color={heart ? 'red' : 'white'}
            onPress={() => {
              handleHeartReset();
            }}
          />
          <View style={styles.productContainer}>
            <Text style={styles.productDetails}>Product name</Text>
            <Text style={styles.productDetails}>85421</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => {
            navigation.navigate('ProductDeatils');
          }}>
          <Image
            source={require('../../assets/image/abc.jpg')}
            style={styles.image}
          />
          <AntDesign
            name="heart"
            style={styles.iconContainer}
            size={30}
            color={heart ? 'red' : 'white'}
            onPress={() => {
              handleHeartReset();
            }}
          />
          <View style={styles.productContainer}>
            <Text style={styles.productDetails}>Product name</Text>
            <Text style={styles.productDetails}>85421</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => {
            navigation.navigate('ProductDeatils');
          }}>
          <Image
            source={require('../../assets/image/abc.jpg')}
            style={styles.image}
          />
          <AntDesign
            name="heart"
            style={styles.iconContainer}
            size={30}
            color={heart ? 'red' : 'white'}
            onPress={() => {
              handleHeartReset();
            }}
          />
          <View style={styles.productContainer}>
            <Text style={styles.productDetails}>Product name</Text>
            <Text style={styles.productDetails}>85421</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => {
            navigation.navigate('ProductDeatils');
          }}>
          <Image
            source={require('../../assets/image/abc.jpg')}
            style={styles.image}
          />
          <AntDesign
            name="heart"
            style={styles.iconContainer}
            size={30}
            color={heart ? 'red' : 'white'}
            onPress={() => {
              handleHeartReset();
            }}
          />
          <View style={styles.productContainer}>
            <Text style={styles.productDetails}>Product name</Text>
            <Text style={styles.productDetails}>85421</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => {
            navigation.navigate('ProductDeatils');
          }}>
          <Image
            source={require('../../assets/image/abc.jpg')}
            style={styles.image}
          />
          <AntDesign
            name="heart"
            style={styles.iconContainer}
            size={30}
            color={heart ? 'red' : 'white'}
            onPress={() => {
              handleHeartReset();
            }}
          />
          <View style={styles.productContainer}>
            <Text style={styles.productDetails}>Product name</Text>
            <Text style={styles.productDetails}>85421</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProductListing;

const styles = StyleSheet.create({
  headerContainer: {
    height: 50,
    backgroundColor: '#ff6600',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
  },
  cartIcon: {
    marginRight: 18,
  },
  leftIcon: {
    backgroundColor: '#fff',
    borderRadius: 5,
    margin: 8,
    padding: 3,
    width: 36,
    color: '#a5a1a1',
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
  cartItemValue: {
    color: '#fff',
    fontSize: 13,
    top: -2,
  },
  productContainer: {
    padding: 2,
  },
  productDetails: {
    color: '#75716f',
    fontSize: 17,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    backgroundColor: '#dfe4ea',
  },
  cardContainer: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 170,
    height: 260,
    backgroundColor: '#f6f6f6',
    margin: 5,
    borderRadius: 5,
  },
  iconContainer: {
    marginLeft: 110,
    position: 'absolute',
    top: 8,
    right: 12,
  },
  image: {
    width: '100%',
    height: 205,
    borderRadius: 10,
  },
});
