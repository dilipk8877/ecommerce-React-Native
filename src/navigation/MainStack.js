import React from 'react';
import CategoryListing from '../pages/categoryListing/CategoryListing';
import ProductListing from '../pages/ProductListing/ProductListing';
import ProductDeatils from '../pages/ProductDetails/ProductDeatils';
import CartPage from '../pages/cartPage/CartPage';


const MainStack = Stack => {
  return (
    <>
     <Stack.Screen
          name="CategoryListing"
          component={CategoryListing}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductListing"
          component={ProductListing}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductDeatils"
          component={ProductDeatils}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CartPage"
          component={CartPage}
          options={{headerShown: false}}
        />
    </>
  );
};

export default MainStack;