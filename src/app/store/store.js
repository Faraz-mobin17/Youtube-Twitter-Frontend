import { configureStore } from "@reduxjs/toolkit";
import {
  authSliceReducer,
  userSliceReducer,
  videoSliceReducer,
  subscriptionSlice,
  likeSlice,
  tweetSlice,
  commentSlice,
  dashboardSlice,
  playlistSlice,
} from "../../features/slices/index";

const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    user: userSliceReducer,
    video: videoSliceReducer,
    subscription: subscriptionSlice,
    like: likeSlice,
    tweet: tweetSlice,
    comment: commentSlice,
    dashboard: dashboardSlice,
    playlist: playlistSlice,
  },
});

export default store;
