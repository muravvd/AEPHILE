import styled from "styled-components";
import {TextField} from "../common/text-area";

export const ContentWrapper = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: row;
  place-items: center;
  //padding: 0 0 0 28.5%;
  position: relative;
  //gap: 100px;
  top: 20%;
  left: 28.5%;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-self: baseline;
  //margin-top: 10%;
  //position: absolute;
`


export const StyledTitle = styled(TextField)`
  min-height: 20px;
  min-width: 280px;
  //width: max-content;
  //height: max-content;
  font-weight: bold;
  font-size: 32px;
  color: black;
  background: transparent;
  border: none;
  z-index: 9999;
`;

export const StyledSubTitle = styled(TextField)`
  min-height: 130px;
  min-width: 380px;
  //width: max-content;
  //height: max-content;
  //font-weight: bold;
  font-size: 14px;
  color: black;
  background: transparent;
  border: none;
  z-index: 9999;
`

export const FatButton1 = styled.div`
  width: 145px;
  height: 37px;
  background-color: black;
  border-radius: 20em;
  color: white;
  font-size: 12px;
  font-weight: bold;
  line-height: 15px;
  
  display: grid;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  box-sizing: border-box;
  font-family: system-ui;
  margin-top: 10%;
`