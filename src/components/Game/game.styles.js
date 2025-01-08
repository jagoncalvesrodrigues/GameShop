import styled from "styled-components";

const StylexBoxGame = styled.div`
    padding: 16px 10px;
    background-color: #161A1E;
    border-radius: 16px;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 18px;
`;
const StyledImage = styled.img`
    border-radius: 16px;
`;
const StyledName = styled.p`
    font-size: 16px;
    margin: 0;
`;
const StyledButtonBuy = styled.button`
    background-color: ${({$color})=>$color};
    border-style: none;
    color:white;
    font-weight: 700;
    font-size: 18px;
    width: 100%;
    border-radius: 16px;
    padding: 9px;

`;

export {StyledButtonBuy,StyledName,StylexBoxGame,StyledImage}