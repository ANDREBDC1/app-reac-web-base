import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    position: relative;

    span{
        width: 160px;
        background: #00b0ff;
        color: #fff;
        padding: 8px;
        font-size: 14px;
        position: absolute;
        border-radius: 4px;
        font-weight: 500;
        visibility: hidden;

        opacity: 0;
        transform: opacity 0.4s;

        bottom:  calc(100% + 12px);
        left: 50%;
        transform: translateX(-50%);

        &::before{
            content: '';
            border-style: solid;
            border-color: #00b0ff transparent;
            border-width: 6px 6px 0 6px;
            top: 100%;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }

    }

    &:hover span {
        opacity: 1;
        visibility: visible;

    }
`;
