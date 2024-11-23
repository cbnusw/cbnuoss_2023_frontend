import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface Toast {
  id: string;
  message: string;
}

export interface ToastInfoStoreState {
  toasts: Toast[];
  addToast: (message: string) => void;
  removeToast: (id: string) => void;
}

export const ToastInfoStore = create<ToastInfoStoreState>()(
  devtools((set) => ({
    toasts: [],
    addToast: (message: string) =>
      set((state) => ({
        toasts: [{ id: Date.now().toString(), message }, ...state.toasts],
      })),
    removeToast: (id: string) =>
      set((state) => ({
        toasts: state.toasts.filter((toast) => toast.id !== id),
      })),
  })),
);
