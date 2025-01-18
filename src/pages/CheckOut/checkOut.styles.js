import styled from "styled-components";

const StyledCheckOutBox = styled.div``;
const StyledTitleCO = styled.h2`
    color: white;
`;
const StyledBoxText = styled.div`
    color: white;
    text-align: center;
    background-color: ${({$color})=>$color};
    border-radius: 16px;
    padding: 0 10px;
    display: flex;
`;
const StyledBoxTotal = styled.div`
    color: white;
    text-align: center;
    background-color: ${({$color})=>$color};
    border-radius: 16px;
    padding: 0 10px;
`;
const StyledBoxCheckout = styled.div`
    background-color: ${({$color})=>$color};
    width: 100%;
    height: 100%;
    border-radius: 16px;
    color: white;
    text-align: center;
    padding: 32px 29px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap:32px;
`;
const StyledBoxEmptyCart = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    @media screen and (width>=768px){
        flex-direction: row;
    }
`;
const StyledImg = styled.img`
    width: 200px;
`;
const StyledImgGift = styled.img`
    display: none;
    @media screen and (width>=768px){
        display: block;
    }
`;
const StylesListGamesCheckOut = styled.div`
    @media screen and (width>=768px){
        display: flex;
        justify-content: space-between;
    }

    div {
        margin-bottom: 32px;
    }
`;

export {StyledImgGift,StylesListGamesCheckOut,StyledImg,StyledBoxCheckout,StyledBoxEmptyCart,StyledBoxTotal,StyledCheckOutBox,StyledTitleCO,StyledBoxText}