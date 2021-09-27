import React, { createContext, useContext, useCallback, useState } from 'react';
import { uuid } from 'uuidv4';
import ToastContainer from '../components/ToastContainer';

interface ToastContextData {
    addToast(message: Omit<ToastMessageData, 'id'>): void;
    removeToast(id: string): void;
}

export interface ToastMessageData {
    id: string;
    type?: 'success' | 'error' | 'info';
    title: string;
    description?: string;
    duration?: number;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
    const [messages, setMessages] = useState<ToastMessageData[]>([]);

    const addToast = useCallback(
        (message: Omit<ToastMessageData, 'id'>) => {
            const id = uuid();

            const toast = {
                id,
                ...message,
            };

            setMessages([...messages, toast]);
        },
        [messages],
    );

    const removeToast = useCallback((id: string) => {
        setMessages((state) => state.filter((message) => message.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            {children}
            <ToastContainer messages={messages} />
        </ToastContext.Provider>
    );
};

function useToast(): ToastContextData {
    const context = useContext(ToastContext);

    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }

    return context;
}

export { ToastProvider, useToast };
