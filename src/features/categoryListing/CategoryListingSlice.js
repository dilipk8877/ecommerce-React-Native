
import {axiosInstance} from '../../utils/AxiosInstance';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const getCategory = createAsyncThunk(
  'category/getCategory',
  async (_, thunkAPI) => {
    try {
      const res = await axiosInstance.get('/categoryList');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = {
  category: [],
  status: null,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers:{
    [getCategory.pending]:(state)=>{
        state.status = 'loading';
    },
    [getCategory.fulfilled]:(state,action)=>{
        state.status ='succeeded';
        state.category = action.payload;
    },
    [getCategory.rejected]:(state,action)=>{
        state.status = 'failed';
    }
  }
});

export default categorySlice.reducer;
