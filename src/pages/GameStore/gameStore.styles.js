import styled from "styled-components";

const StyledBoxGS = styled.div`
    background-color: ${({$color})=>$color};
    width: 100%;
    height: 100%;
    border-radius: 16px;
    text-align: center;
    color: white;
    padding: 32px 29px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap:32px;

    @media screen and (width>=768px){
        text-align: left;
    }
`;
const StyledFilterGames = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap:32px;
    @media screen and (width>=768px){
        flex-direction: row;
        gap: 16px;
    }
`;
const StyledFilters = styled.div`
    text-align: left;
    font-size: 24px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background-color: ${({$colorb})=>$colorb};
    border-radius: 16px;
    padding: 20px;
    gap:32px;

    @media screen and (width>=768px){
        justify-content: left;
    }
`;
const StyledGames = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap:32px;

    @media screen and (width>=768px){
        width: 100%;
        display: grid;
        gap: 16px; 
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        
    }
    
`;
const StyledSearchBox = styled.div`
    display: flex;
    width: 100%;
    background-color: #161A1E;
    padding: 9px 16px;
    border-radius: 16px;
    @media screen and (width>=768px){
        height: 100px;
    }
`;
const StyledTitle = styled.h2`
    font-size: 32px;
`;
const StyledSecondTitleBox = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (width>=768px){
        width:226px;
    }
`;
const StyledParam = styled.input`
    background-color: transparent;
    border-style: none;
    color: white;
`;
const StyledPlattformInput = styled.input`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    accent-color: white;
    width: 1.5rem;
    height: 1.5rem;
    border: 1px solid black;
    border-radius:0.25rem;
    -webkit-appearance:none;
    -moz-appearance:none;
    appearance: none;
    margin-right: 10px;

    &:checked{
        background-color: black;
        border:none;
    }

    &:checked::after{
        position: absolute;
        content: '※';
        color: white;
    }
`;
const StyledTitleP = styled.h3`
    margin: 0;
`;
const StyledChevronDown = styled.img`
    display: ${({$togglePlat})=>($togglePlat ? 'flex':'none')};
    @media screen and (width>=768px){
        display: none;
    }
`;
const StyledChevronUp = styled.img`
    display: ${({$togglePlat})=>($togglePlat ? 'none':'flex')};
    @media screen and (width>=768px){
        display: none;
    }
`;
const StyledBoxP = styled.div`
    display: flex;
    justify-content: space-between;
`;
const StyledCheckboxLabel = styled.label`
    display: ${({$togglePlat})=>($togglePlat ? 'none':'flex')};
    align-items: center;
    margin-bottom: 8px;
    cursor: pointer;
    font-size: 16px;

    @media screen and (width>=768px){
        display: flex;
    }
`;


export {StyledChevronDown,StyledChevronUp,StyledCheckboxLabel,StyledPlattformInput,StyledBoxP,StyledTitleP,StyledSecondTitleBox,StyledParam,StyledSearchBox,StyledTitle,StyledGames,StyledFilters,StyledFilterGames,StyledBoxGS}