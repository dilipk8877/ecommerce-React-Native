import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Button,
  ActivityIndicator,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {getCategory} from '../../features/categoryListing/CategoryListingSlice';
import {displayImageUrl} from '../../utils/ImageUrl';
import {FlashList} from '@shopify/flash-list';
import {getProduct} from '../../features/productListing/ProductListingSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {logOutUser} from '../../features/loginSlice/LoginSlice';
const CategoryListing = ({navigation}) => {
  const {category, isLoader} = useSelector(state => state.userCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, []);
  const [heart, setHeart] = useState(false);

  const handleHeartReset = () => {
    setHeart(!heart);
  };

  const handleProductPage = id => {
    dispatch(getProduct(id));
    navigation.navigate('ProductListing');
  };
  const handleLogout = () => {
    dispatch(logOutUser());
  };
  return (
    <>
      {isLoader ? (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#ff6600" />
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <View>
              <Button onPress={() => handleLogout()} title="logout" />
            </View>
            <View>
              <Text style={styles.headerText}>Category Page</Text>
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
          <View style={styles.cardContainer}>
            <FlashList
              // horizontal={true}
              data={category}
              estimatedItemSize={200}
              numColumns={2}
              renderItem={item => {
                return (
                  <TouchableOpacity
                    style={styles.card}
                    onPress={() => {
                      handleProductPage(item?.item._id);
                    }}>
                    <Image
                      source={require('../../assets/image/samantha-borges-gXsJ9Ywb5as-unsplash.jpg')}
                      style={styles.categoryImage}
                    />
                    <View style={styles.productContainer}>
                      <Text style={styles.CategoryDetails}>
                        {item.item.name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      )}
    </>
  );
};

export default CategoryListing;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#dfe4ea',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
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
    marginLeft: 110,
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
    left: 3,
    height: '100%',
    width: '100%',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    backgroundColor: '#dfe4ea',
    width:"100%",
    height:"100%",
  },
  card: {
    padding: 5,
    width: '95%',
    height: 240,
    backgroundColor: '#f6f6f6',
    margin: 5,
    borderRadius: 5,
  },
  categoryImage: {
    height: 200,
    width: '100%',
  },
  CategoryDetails: {
    color: 'black',
  },
});
