import styled, { keyframes } from 'styled-components';

interface ContainerProps {
    type: 'success' | 'error' | 'info';
}

export const Container = styled.div<ContainerProps>`
    height: 100vh;
    width: 100vh;
    align-items: center;
    place-content: center;
`;
