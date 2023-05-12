import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {axiosInstance} from '../../utils/AxiosInstance';

export const getSignup = createAsyncThunk(
  'signup/getSignup',
  async (data, thunkAPI) => {
    console.log('sdgdyrty', data);
    try {
      const res = await axiosInstance.post(
        '/users/register',
        data
      );
      console.log('response', res.data);
      return res.data;
    } catch (e) {
      console('error', e);
      return thunkAPI.rejectWithValue(e);
    }
  },
);
const initialState = {
  status: null,
};
const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {},
  extraReducers: {
    [getSignup.pending]: state => {
      state.status = 'loading';
    },
    [getSignup.fulfilled]: (state, action) => {
      state.status = 'success';
    },
    [getSignup.rejected]: (state, action) => {
      state.status = "error";
      console.log("rghfgjhfj",action)
    },
  },
});

export default signupSlice.reducer;
