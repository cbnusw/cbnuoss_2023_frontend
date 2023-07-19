import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthState = {
  isAuth: boolean;
  username: string;
  uid: string;
  isModerator: boolean;
};

type initialState = {
  value: AuthState;
};

const initialState = {
  value: {
    isAuth: false,
    username: '',
    uid: '',
    isModerator: false,
  } as AuthState,
} as initialState;

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<object>) => {
      return {
        value: {
          isAuth: true,
          username: '홍길동',
          uid: '8s7f8d7f8d',
          isModerator: false,
        },
      };
    },

    signOut: () => {
      return initialState;
    },
  },
});

export const { signIn, signOut } = auth.actions;
export default auth.reducer;
