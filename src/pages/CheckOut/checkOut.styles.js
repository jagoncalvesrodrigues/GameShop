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
`;
const StyledBoxTotal = styled.div`
    color: white;
    text-align: center;
    background-color: ${({$color})=>$color};
    border-radius: 16px;
    padding: 0 10px;
`;

export {StyledBoxTotal,StyledCheckOutBox,StyledTitleCO,StyledBoxText}