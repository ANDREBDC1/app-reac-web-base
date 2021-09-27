import React from 'react';
import { useTransition } from 'react-spring';
import Toast from './Toast';
import { ToastMessageData } from '../../Contexts/ToastContext';
import { Container } from './styles';

interface ToastContenerProps {
    messages: ToastMessageData[];
}

const ToastContainer: React.FC<ToastContenerProps> = ({ messages }) => {
    const messagesWithTrasitions = useTransition(
        messages,
        (message) => message.id,
        {
            from: { right: '-120%' },
            enter: { right: '0%' },
            leave: { right: '-120%' },
        },
    );

    return (
        <Container>
            {messagesWithTrasitions.map(({ item, key, props }) => (
                <Toast key={key} message={item} style={props} />
            ))}
        </Container>
    );
};

export default ToastContainer;
