import styled from "styled-components";

export const ModelWrapperPage = styled.div`
    display: flex;
    place-items: center;
    flex-direction: column;
    place-content: center;
    gap: 50px;
`


export const StyledModalTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
    border-bottom: 2px solid #38438C;
    color: #FFFFFF;
    padding-bottom: 8px;
`

export const StyledApplyButton = styled.button`
    padding: 10px 20px;
    border: 2px solid rgba(35, 52, 108, 1);
    background-color: transparent;
    color: white;
    font-size: 14px;
    border-radius: 12px;
    cursor: pointer;
`

export const ButtonWrapper = styled.div`
    display: flex;
    place-items: center;
    place-content: center;
`

export const ModelWrapper = styled.div`

    border: 3px solid rgba(142, 194, 232, 1);
    
    border-radius: 40px;
    padding: 30px 40px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    width: 50%;
`
export const ModelTitle = styled.div`
    font-size: 75px;
    font-weight: bold;
    color: white;
    border-bottom: 4px solid #A45710;
`


export const ModelDataCellWrapper = styled.div`
    font-size: 11px;
    color: #B9B9B9;
    display: flex;
    flex-direction: row;
    place-content: center;
    place-items: center;
`

export const ModelDataCellName = styled.div`
`

export const ModelDataCellValue = styled.textarea`
    background-color: transparent;
    border: none;
    margin-left: 20px;
    border-bottom: 2px solid rgba(46, 53, 130, 1);
    flex: 1;
    color: white;
    font-size: 45px;
    height: 5px;
    overflow: hidden;
    resize: none;
    
    
    &:focus{
        border: none;
        outline: none;
        border-bottom: 2px solid rgba(143, 196, 234, 1);
    }
`
