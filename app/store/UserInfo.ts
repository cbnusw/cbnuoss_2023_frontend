import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const initialState = {
  no: '',
  name: '',
  email: '',
  university: '',
  department: '',
  role: '',
  isAuth: false,
};

export const userInfoStore = create(
  devtools((set) => ({
    userInfo: initialState,
    updateUserInfo: (newUserInfo: any) =>
      set((state: any) => ({
        userInfo: { ...state.userInfo, ...newUserInfo },
      })),
    removeUserInfo: () =>
      set(() => ({
        userInfo: initialState,
      })),
  })),
);
