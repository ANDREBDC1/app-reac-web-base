import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    place-content: center;
    align-items: center;

`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    max-width: 400px;
    height: 100%;
    max-height: 400px;

    form{
        width: 100%;
        height: 100%;
    }

    h2{
        margin-bottom: 8px;
    }

`;

