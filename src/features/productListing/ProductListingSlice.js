
import {axiosInstance} from '../../utils/AxiosInstance';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const getProduct = createAsyncThunk(
  'product/getProduct',
  async (id, thunkAPI) => {
    try {
      const res = await axiosInstance.get(`/user/productList/?category_id=63b1ddf2053993212589f6a7`);
      return res.data;
    } catch (error) {
        console.log("fgdf")
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = {
  product: [],
  status: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers:{
    [getProduct.pending]:(state)=>{
        state.status = 'loading';
    },
    [getProduct.fulfilled]:(state,action)=>{
        state.status ='succeeded';
        state.product = action.payload;
    },
    [getProduct.rejected]:(state,action)=>{
        state.status = 'failed';
    }
  }
});

export default productSlice.reducer;
