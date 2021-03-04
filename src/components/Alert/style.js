import styled from 'styled-components';

export const Container = styled.div`
    width: 239px;
    height: 48px;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(2px);
    border-radius: 4px;
    margin-top: 15px;
    &:before {
        border: 10px solid transparent;
        border-bottom-color: rgba(255,255,255,0.4);
        content: "";
        top: -20px;
        left: 23px;
        position: absolute;
    }
`;

export const TextAlert = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 15px;
`;