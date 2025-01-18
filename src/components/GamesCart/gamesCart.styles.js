import styled from "styled-components";

const StyledInfoGame = styled.div`
    display: flex;
    justify-content: space-between;
    height: 29px;
    align-items: center;
    gap:20px;

`;
const StyledImageCart = styled.img`
    border-radius: 16px;
    @media screen and (width>=768px){
        
    }
`;

const StylexBoxGameCart = styled.div`
    padding: 16px 10px;
    background-color: #161A1E;
    border-radius: 16px;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 18px;

    @media screen and (width>=768px){
        width: 100%;
        height: 252px;
        flex-direction: row;
    }
`;

export {StyledImageCart,StyledInfoGame,StylexBoxGameCart}