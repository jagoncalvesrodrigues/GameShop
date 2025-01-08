import styled from "styled-components";

const StyledHamburguer = styled.img`
    display: ${({$isVisible})=>($isVisible ? "none":"flex")}
`;
const StyledClose = styled.img`
    display: ${({$isVisible})=>($isVisible ? "flez":"none")}
`;
const StyledBoxImgs = styled.div`
    @media screen and (width>=768px) {
        display:none;
    }
`;

export {StyledBoxImgs,StyledClose,StyledHamburguer}