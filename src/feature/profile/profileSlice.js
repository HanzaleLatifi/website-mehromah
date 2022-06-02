import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getToken = () => {
  const tokenString = sessionStorage.getItem("user");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
};
const config = {
  headers: {
    Authorization: `Token ${getToken()}`,
  },
};
//action creator
export const getAysncProfile = createAsyncThunk(
  "profile/getProfile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/accounts/profile/",
        config
      );
      return response.data; //action payload
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

const initialState = {
  id:0,
  email: "",
  name: "", 
  last_name: "",
  phone: "",
  phone2: "",
  province: "",
  address: "",
};

const profileSlice = createSlice({
  name: "profile", //state name
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getAysncProfile.fulfilled, (state, action) => {
      state.id=action.payload.user.id
      state.email = action.payload.user.email;
      state.name = action.payload.name;
      state.last_name = action.payload.last_name;
      state.phone = action.payload.user.phone;
      state.phone2 = action.payload.phone2;
      state.province = action.payload.province;
      state.address = action.payload.address;
    });
   
  },
});
export default profileSlice.reducer;
