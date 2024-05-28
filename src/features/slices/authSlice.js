import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { build } from "vite";

const initialState = {
  loading: false,
  status: false,
  user: null,
};

export const register = createAsyncThunk("register", async (data) => {
  const formData = new FormData();
  formData.append("avatar", data.avatar[0]);
  formData.append("username", data.username);
  formData.append("email", data.email);
  formData.append("password", data.password);
  formData.append("fullName", data.fullName);
  if (data.coverImage) {
    formData.append("coverImage", data.coverImage[0]);
  }

  try {
    const response = await axios.post("/users/register", formData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const login = createAsyncThunk("login", async (data) => {
  try {
    const response = await axios.post("/users/login", data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const logout = createAsyncThunk("logout", async () => {
  try {
    const response = await axios.get("/users/logout");
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const changeCurrentPassword = createAsyncThunk(
  "changeCurrentPassword",
  async (data) => {
    try {
      const response = await axios.put("/users/change-current-password", data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const getUser = createAsyncThunk("getUser", async () => {
  try {
    const response = await axios.get("/users/current-user");
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const updateAvatar = createAsyncThunk("updateAvatar", async (data) => {
  const formData = new FormData();
  formData.append("avatar", data.avatar[0]);
  try {
    const response = await axios.put("/users/avatar", formData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const updateCoverImage = createAsyncThunk(
  "updateCoverImage",
  async (data) => {
    const formData = new FormData();
    formData.append("coverImage", data.coverImage[0]);
    try {
      const response = await axios.put("/users/cover-image", formData);
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const updateUser = createAsyncThunk("updateUser", async (data) => {
  try {
    const response = await axios.put("/users/update-account", data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const deleteUser = createAsyncThunk("deleteUser", async () => {
  try {
    const response = await axios.delete("/users/delete-account");
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const getWatchHistory = createAsyncThunk(
  "getUserWatchHistory",
  async () => {
    try {
      const response = await axios.get("/users/history");
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(register.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(login.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(logout.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.loading = false;
      state.user = null;
    });
    builder.addCase(logout.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(changeCurrentPassword.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(changeCurrentPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(changeCurrentPassword.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(getUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(getUser.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(updateAvatar.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateAvatar.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(updateAvatar.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(updateCoverImage.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateCoverImage.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(updateCoverImage.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(updateUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(updateUser.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(deleteUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteUser.fulfilled, (state) => {
      state.loading = false;
      state.user = null;
    });
    builder.addCase(deleteUser.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getWatchHistory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getWatchHistory.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(getWatchHistory.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default authSlice.reducer;
