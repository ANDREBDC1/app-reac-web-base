import React from 'react';
import { Container } from './styled';

interface MenssageProps {
    title: string
    description?: string
    type: 'success' | 'error' | 'info'
}

const Message: React.FC<MenssageProps> = ({title, description, type}) => {
    return (
        <Container type={type}>
            <h1>{title}</h1>
            {description && <h6>{description}</h6>}
        </Container>
    );
};

export default Message;
