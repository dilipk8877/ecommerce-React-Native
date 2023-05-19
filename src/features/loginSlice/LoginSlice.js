import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {axiosInstance} from '../../utils/AxiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getLogin = createAsyncThunk(
  'login/getLogin',
  async (data, thunkAPI) => {
    try {
      const res = await axiosInstance.post('/users/login', data);
      // if(res && res.data && res.data.token){
      // }
     await AsyncStorage.setItem('token', res.data.token);
      return res.dara;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = {
  status: null,
  isLogin: AsyncStorage.getItem('token') ? true : false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logOutUser: state => {
      AsyncStorage.clear();
      state.isLogin = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(getLogin.pending, state => {
      state.status = 'pending';
    }),
      builder.addCase(getLogin.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.isLogin = true;
      }),
      builder.addCase(getLogin.rejected, (state, action) => {
        state.status = 'rejected';
      });
  },
});
export const {logOutUser} = loginSlice.actions
export default loginSlice.reducer;
