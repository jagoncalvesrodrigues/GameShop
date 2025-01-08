import styled from "styled-components";

const StyledBoxHome = styled.div`
    width: 100%;
    height:100%;
    background-color: ${({$color})=>$color};
    border-radius: 16px;
    text-align: center;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 20px;
    justify-content: space-between;
    gap: 32px;

    @media screen and (width>=768px){
        align-items: flex-start;
        text-align: left;
    }
`;
const StyledText = styled.p`
    font-size: 16px;
    line-height: 32px;
`;
const StyledButtonHome = styled.button`
    border-style: none;
    background-color: ${({$colorb})=>$colorb};
    color: white;
    font-size: 18px;
    padding: 14px 21px;
    border-radius: 16px;
    margin-bottom: 100px;
`;

export {StyledButtonHome,StyledText,StyledBoxHome}