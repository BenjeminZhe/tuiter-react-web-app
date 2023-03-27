import { createSlice } from "@reduxjs/toolkit";

const initialProfile = {
  firstName: 'Jose',
  lastName: 'Annunziato',
  handle: '@jannunzi',
  profilePicture: 'react-white.png',
  bannerPicture: 'work-life-balance.jpeg',
  bio: "Faculty, Software Engineer, AI, Space, and renewable enthusiast.Retuits and likes are not endorsements.",
  website: 'youtube.com/webdevtv',
  location: 'Boston, MA',
  dateOfBirth: '7/7/1968',
  dateJoined: '4/2009',
  followingCount: 340,
  followersCount: 223,
  tuits: 6234
};

const profileSlice = createSlice({
  name: "profile",
  initialState: initialProfile,
  reducers: {
    saveProfile(state, action) {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.handle = action.payload.handle;
      state.bio = action.payload.bio;
      state.location = action.payload.location;
      state.website = action.payload.website;
      state.dateOfBirth = action.payload.dateOfBirth;
    }
  }
});

export const {saveProfile} = profileSlice.actions;
export default profileSlice.reducer;


