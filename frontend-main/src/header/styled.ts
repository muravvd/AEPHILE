import styled from "styled-components";
import Select from "react-select";

export const StyledHeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 9999999;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 45px;
  background-color: #ECEDEE;


  color: black;
  padding: 18px 0 18px 0;
  //box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  //box-shadow: 0 5px 5px #878787;
  font-family: monospace;
  font-size: 18px;
  //font-weight: bold;
  line-height: 40px;
  text-align: center;

`

export const StyledHeaderButtons = styled.div`
  display: grid;
  grid-template-columns: 1em 1em 1em 25em;
  //flex-direction: row;
  gap: 61px;
  place-items: center;

`

export const SeparateButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`


export const StyledButton = styled.button<{ isSelected?: boolean }>`
  cursor: pointer;
  width: max-content;
  background-color: transparent;
  border: none;

  transition: transform 1s ease; /* Smooth transition */

  &:hover {
    //transform: scale(1.2);
    font-weight: bold;
  }

  border-bottom: ${({isSelected}) => isSelected ? `2px solid transparent` : undefined};
  border-image: ${({isSelected}) => isSelected ? `linear-gradient(0.25turn, #38438C, #5FACE4, #2E3582)` : undefined};
  border-image-slice: ${({isSelected}) => isSelected ? 1 : undefined};

  color: black;
  font-family: monospace;
  font-size: 14px;
  //font-weight: bold;
  line-height: 25px;
  text-align: left;

`

export const StyledRegisterButton = styled.button<{ isSelected?: boolean }>`
  cursor: pointer;
  width: max-content;
  background-color: #171718;
  border: none;
  border-radius: 15em;
  padding: 0 17px 0;

  //transition: transform 2s ease;

  &:hover {
    //transform: scale(1.2);
    font-weight: bold;
  }

  border-bottom: ${({isSelected}) => isSelected ? `3px #A45710 solid` : undefined};

  color: #FFFFFF;
  font-family: monospace;
  font-size: 14px;
  line-height: 25px;
  text-align: left;

`

export const StyledTitle = styled.div`
  cursor: pointer;
  margin-left: 10%;
`


export const StyledSelect = styled(Select)<{ isSelected?: boolean }>`

  cursor: pointer;

  border-bottom: ${({isSelected}) => isSelected ? `2px solid transparent` : undefined};
  border-image: ${({isSelected}) => isSelected ? `linear-gradient(0.25turn, #38438C, #5FACE4, #2E3582)` : undefined};
  border-image-slice: ${({isSelected}) => isSelected ? 1 : undefined};


  //transition: transform 1s ease; /* Smooth transition */

  &:hover {
    //transform: scale(1.2);
    font-weight: bold;
  }

  .react-select__placeholder {
    color: black;
    font-family: monospace;
    font-size: 14px;
    //font-weight: bold;
    line-height: 25px;
    text-align: left;
  }

  .react-select__control {
    cursor: pointer;
  }

  .react-select__single-value {
    cursor: pointer;
  }

  .react-select__single-value {
    color: black;
    font-family: monospace;
    font-size: 20px;
    font-weight: bold;
    line-height: 25px;
    text-align: left;
  }

  .react-select__indicators {
    display: none;
  }

  .react-select__control--is-focused {
    box-shadow: none;
  }

  .react-select__option {
    cursor: pointer;
    color: black;
    font-family: monospace;
    font-size: 20px;
    font-weight: bold;
    line-height: 25px;
    text-align: left;
  }

  .react-select__menu {
    min-width: 200px;
    background-color: #ECEDEE;
  }

  & > div {
    background-color: transparent;
    border: none;
  }
`