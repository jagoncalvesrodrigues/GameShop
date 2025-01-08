import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledBoxHeader = styled.div`
    width:100%;
    height: ${({$isVisible})=>($isVisible ? '309px':'100%')};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: ${({$color})=>$color};
    border-radius: 16px;
    padding: 19px 32px;
    margin-bottom: 32px;

    @media screen and (width>=768px) {
        height:200px;
        flex-direction: row;
    }

`;
const StyledBoxMobile = styled.div`
    width: 100%;
    height: 62px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const StyledListMenu = styled.ul`
    height: 100%;
    display: ${({$isVisible})=>($isVisible ? 'flex':'none')};
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    font-size: 24px;

    @media screen and (width>=768px) {
        display:flex;
        flex-direction: row;
        gap: 70px;
        align-items: center;
        white-space: nowrap; /* Evita saltos de línea */
    }
`;
const StyledLink = styled(NavLink)`
    width: 100%;
    color: ${({$isActive, $red, $blue}) => ($isActive ? $blue : $red)};
`;
const StyledLogo = styled.img`
    width: 100%;
`;

export {StyledLink,StyledListMenu,StyledBoxMobile,StyledBoxHeader,StyledLogo}