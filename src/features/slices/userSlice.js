import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  loading: false,
  userData: [],
};

export const userChannelProfile = createAsyncThunk(
  "getUserChannelProfile",
  async (username) => {
    try {
      const response = await axios.get(`/users/channel/${username}`);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userChannelProfile.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(userChannelProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      });
    builder.addCase(userChannelProfile.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default userSlice.reducer;
