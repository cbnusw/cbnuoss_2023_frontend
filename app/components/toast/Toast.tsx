'use client';

import React, { useEffect } from 'react';
import { ToastInfoStore } from '@/store/ToastInfo';

// Toast 타입 정의
export interface Toast {
  id: string;
  message: string;
}

export default function Toast() {
  const toasts = ToastInfoStore((state) => state.toasts); // Toast[] 배열
  const removeToast = ToastInfoStore((state) => state.removeToast);

  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50">
      <div className="toast-container">
        {toasts.map((toast, index) => (
          <ToastItem
            key={toast.id}
            toast={toast}
            index={index}
            removeToast={removeToast}
          />
        ))}
      </div>
    </div>
  );
}

// ToastItem 컴포넌트에 타입 지정
interface ToastItemProps {
  toast: Toast; // 각 Toast 객체
  index: number; // 배열에서의 인덱스
  removeToast: (id: string) => void; // 토스트 제거 함수
}

function ToastItem({ toast, index, removeToast }: ToastItemProps) {
  useEffect(() => {
    const timer = setTimeout(() => removeToast(toast.id), 3000);
    return () => clearTimeout(timer); // 타이머 클린업
  }, [toast, removeToast]);

  return (
    <div
      className="toast"
      style={{
        position: 'absolute',
        top: `${index * 3.9}rem`,
        transition: 'top 0.3s ease',
      }}
    >
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="11"></circle>
          <path d="M12 15.29c-.66 0-1.2.54-1.2 1.2 0 .66.54 1.2 1.2 1.2s1.2-.54 1.2-1.2c0-.66-.54-1.2-1.2-1.2zM12 13.61c-.5 0-.9-.4-.9-.9v-5c0-.5.4-.9.9-.9s.9.4.9.9v5c0 .5-.4.9-.9.9z"></path>
        </svg>
      </span>
      <span>{toast.message}</span>
    </div>
  );
}
