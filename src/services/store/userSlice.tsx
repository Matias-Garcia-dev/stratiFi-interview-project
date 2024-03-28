// In your store file (userSlice.ts)
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: number;
  password: string;
  email: string;
}

interface UserState {
  user: User | null;
  accessToken: string | null;
  clientName: string | null; // Add clientName to the state
}

const initialState: UserState = {
  user: null,
  accessToken: null,
  clientName: null, // Initialize clientName to null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser(state, action: PayloadAction<{ user: User; accessToken: string }>) {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      const userAuthData = {
        accessToken: state.accessToken,
        userId: state.user.id
      };
      localStorage.setItem('userData', JSON.stringify(userAuthData));
    },
    logoutUser(state) {
      state.user = null;
      state.accessToken = null;
      localStorage.removeItem('userData');
    },

  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
