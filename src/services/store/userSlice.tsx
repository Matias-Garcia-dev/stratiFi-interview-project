import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: number;
  password: string;
  email: string;
}

interface UserState {
  user: User | null;
  accessToken: string | null;
}

const initialState: UserState = {
  user: null,
  accessToken: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser(state, action: PayloadAction<{ user: User; accessToken: string }>) {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      localStorage.setItem('accessToken', state.accessToken)
    },
    logoutUser(state) {
      state.user = null;
      state.accessToken = null;
      localStorage.removeItem('accessToken');

    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
