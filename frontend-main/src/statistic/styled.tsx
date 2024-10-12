import styled from "styled-components";
import {TextField} from "../common/text-area";
import {GarchIcon, HwessIcon} from "./iconst";


export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
  flex: auto 0 1;
  //gap: 50px;
`

export const StatisticWrapper = styled.div`
  display: flex;
  gap: 5%;
  justify-content: center;
  align-items: center;
  //height: 100%;
  width: 100%;
  position: relative;
`

export const Title = styled(TextField)`
  font-size: 27px;
  font-family: sans-serif;
  color: white;
  text-align: center;
`;

export const StyledLine = styled.div`
    width: 260px;
    background-image: linear-gradient(0.25turn, #8FC4EA, #2E3582);
    height: 4px;
    border-radius: 2em;
`

export const ContentItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;
  padding-top: 50px;
`

export const ModelCartsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;
  height: 100%;
  width: 100%;
  //justify-content: space-around;
  place-content: center;
  padding-top: 100px;
  //scale: 75%;
`

export const StyledIconHwess = styled(HwessIcon)`
  height: 150px;
  width: 300px;
`

export const StyledIconGarch = styled(GarchIcon)`
  height: 150px;
  width: 300px;
`


export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 30px;
  font-weight: bold;
  color: white;
`

export const StyledTextField = styled(TextField)`
  text-align: center;
  font-weight: bold;
  color: white;
  font-size: 20px;
  font-weight: bold;
`
export const DetailsButton = styled.button`
  transition: transform 2s ease; /* Smooth transition */

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  cursor: pointer;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 15px;
  padding: 12px 20px;
  font-size: 20px;
  font-weight: 500;
  color: white;
  margin-top: 70px;
`