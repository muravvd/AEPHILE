import styled from "styled-components";
import {TextField} from "../common/text-area";

export const StyledTitle = styled(TextField)`
  font-size: 27px;
  color: white;
  text-align: center;
  font-family: sans-serif;
`

export const CardWrapper = styled.div`
  display: flex;
  grid-gap: 112px;
  padding: 0 100px;
  flex-wrap: wrap;
  margin-top: 60px;
`

export const StyledWrapper = styled.div`
  /*height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  place-items: center;*/

  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const StyledCard = styled.div`
    //justify-items: center;

    transition: transform 2s ease; /* Smooth transition */

    &:hover {
        //transform: scale(1.2);
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    }

    background: linear-gradient(#FFFFFF, #FFFFFF) padding-box,
    linear-gradient(to right, #8EC2E8, #6177C3, #23346C, #252B46) border-box;
    border-radius: 20px;
    border: 3px solid transparent;

    display: grid;
    grid-template-rows: 1fr;

    //padding: 65px;
    font-size: 20px;
    color: black;
  overflow: hidden;
`

export const StyledCardText = styled(TextField)`
  overflow: hidden;
  text-overflow: ellipsis;
  //font-weight: 500;
  text-align: center;
  color: #000000;
  font-size: 13px;
  width: 161px;
  font-family: Lexend Deca;
  place-content: center;
`

export const StyledLine = styled.div`
  width: 350px;
  background-image: linear-gradient(0.25turn, #2E3582, #8FC4EA);
  height: 4px;
  border-radius: 2em;
  margin-top: 20px;
`