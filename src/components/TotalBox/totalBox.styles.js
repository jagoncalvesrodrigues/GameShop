import styled from "styled-components";

const StyledOrderSummary = styled.div`
    background-color: ${({$color})=>$color};
    padding: 10px;
    border-radius: 10px;
    color:white;
    font-weight: 700; 
`;
const StyledRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;
const StyledConfirmOrder = styled.button`
    margin-top: 20px;
    width: 100%;
    padding: 13px;
    border: none;
    border-radius: 16px;
    background-color: #007bff;
    color: white;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`;

export {StyledConfirmOrder,StyledOrderSummary,StyledRow}