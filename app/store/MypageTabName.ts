import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const mypageTabNameStore = create(
  devtools((set) => ({
    tabName: 'profile',
    updateTabName: (newTabName: string) =>
      set(() => ({
        tabName: newTabName,
      })),
  })),
);
