import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    firstName: "Sreekar",
    lastName: "Anne",
    handle: "@sreekaranne",
    profilePicture: "/images/react.png",
    bannerPicture: "/images/myuniverse.jpg",
    bio: "Student, Software Engineer, AI, Space, and renewable enthusiast.Retuits and likes are not endorsements.",
    website: "youtube.com/webdevtv",
    location: "Hyderabad, TS",
    dateOfBirth: "June 10, 2000",
    dateJoined: "5/2009",
    followingCount: 340,
    followersCount: 223,
  },
  reducers: {
    editProfile(state, action) {
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        bio: action.payload.bio,
        location: action.payload.location,
        dateOfBirth: action.payload.dob,
      };
    },
  },
});
export const { editProfile } = profileSlice.actions;
export default profileSlice.reducer;
