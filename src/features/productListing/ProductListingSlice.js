import {axiosInstance} from '../../utils/AxiosInstance';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const getProduct = createAsyncThunk(
  'product/getProduct',
  async (id, thunkAPI) => {
    try {
      const res = await axiosInstance.get(`/category/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const getProductDetails = createAsyncThunk(
  'product/getProductDetails',
  async (id, thunkAPI) => {
    try {
      const res = await axiosInstance.get(`/products/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const addToCart = createAsyncThunk(
  'add/addToCard',
  async (data, thunkAPI) => {
    try {
      const res = await axiosInstance.post('/cart/add', data);
      console.log("addtocart",res.data);
      return res.data;
    } catch (error) {
      console.log("errorTocart",error)
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const getCartItem = createAsyncThunk(
  'get/getCartItem',
  async (userId, thunkAPI) => {
    try {
      const res = await axiosInstance.get(`cart/${userId}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = {
  product: [],
  productDetals: [],
  status: null,
  isLoader: false,
  cartItem: [],
  isAddToCart: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    productReset: state => {
      state.product = [];
    },
    setIsAddToCartTrue: state => {
      state.isAddToCart = true
    },
    setIsAddToCartFalse: state => {
      state.isAddToCart = false
    },
  },
  extraReducers: builder => {
    builder.addCase(getProduct.pending, state => {
      state.status = 'pending';
      state.isLoader = true;
    }),
      builder.addCase(getProduct.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.product = action.payload;
        state.isLoader = false;
      }),
      builder.addCase(getProduct.rejected, (state, action) => {
        state.status = 'rejected';
        state.isLoader = false;
      });
    builder.addCase(getProductDetails.pending, state => {
      state.status = 'pending';
      state.isLoader = true;
    }),
      builder.addCase(getProductDetails.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.productDetals = action.payload;
        state.isLoader = false;
      }),
      builder.addCase(getProductDetails.rejected, (state, action) => {
        state.status = 'rejected';
        state.isLoader = false;
      });
    builder.addCase(addToCart.pending, state => {
      state.status = 'pending';
      state.isAddToCart = false;
      state.isLoader = true;
    }),
      builder.addCase(addToCart.fulfilled, state => {
        state.status = 'fulfilled';
        state.isAddToCart = true;
        state.isLoader = false;
      });
    builder.addCase(addToCart.rejected, state => {
      state.status = 'rejected';
      state.isAddToCart = true;
      state.isLoader = false;
    });
    builder.addCase(getCartItem.pending, state => {
      state.status = 'pending';
      state.isLoader = true;
    }),
      builder.addCase(getCartItem.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.isLoader = false;
        state.cartItem = action.payload;
      });
    builder.addCase(getCartItem.rejected, state => {
      state.status = 'rejected';
      state.isLoader = false;
    });
  },
});

export const {productReset,setIsAddToCartFalse,setIsAddToCartTrue} = productSlice.actions;
export default productSlice.reducer;
