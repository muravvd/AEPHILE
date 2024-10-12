import styled, {css} from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 10fr 1fr 0.5fr 5fr 10fr;
  place-items: center;
`

export const Title = styled.div`
    font-size: 27px;
    color: white;
`

export const SubTitle = styled.div`
  font-size: 13px;
  color: #000000;
  align-self: center;
  place-self: center;
  font-family: Lexend Deca;
  margin-left: 20px;
`

export const StyledLine = styled.div`
  width: 200px;
  background-image: linear-gradient(0.25turn, #8FC4EA, #2E3582);
  height: 4px;
  border-radius: 2em;
`

export const Rectangle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 700px;
  height: 115px;
  background: #ffffff;
  border-radius: 1em;
`

const TextStyle = css`
  padding: 0 16px;
  color: #ffffff;
  font-size: 13px;
  font-weight: 230;
  line-height: 25px;
  text-align: left;
`;

const FieldStyle = css`
  margin: 0;
`;

export const LoginBox = styled.div`
  width: 230px;
  height: 22px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(0.25turn, #7090DF, #3D4E79);
  color: crimson;
  place-self: center;
  border-radius: 5em;

  fieldset {
    .field {
      ${FieldStyle}
    }

    .control-label {
      display: none;
    }

    border: none;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-block-start: 0;
    padding-inline-start: 0;
    padding-inline-end: 0;
    padding-block-end: 0;
  }
`;

export const StyledTextInputWrapper = styled.div`
  display: flex;
`;

export const StyledInput = styled.input`
  ${TextStyle};
  width: 100%;
  height: 56px;
  background-color: crimson;
  box-shadow: 10px 0 0 rgba(0, 0, 0, 0.25);
  border: crimson;
  border-radius: 14px;

  &:focus {
    outline: none;
    border: none;
        box-shadow: 10px 0 0 rgba(0, 0, 0, 0.25);
  }
`;

export const MailboxWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  place-self: center;
`

export const Mailbox = styled.input`
  ${TextStyle};
  width: 150px;
  height: 26px;
  background-image: linear-gradient(0.25turn, #7090DF, #3D4E79);
  border-radius: 0.9em 0 0 0.9em;
  border: none;
  outline: none;
`

export const SendButton = styled.div`
  display: flex;
  flex-direction: row;
  width: 85px;
  height: 22px;
  color: #ffffff;
  cursor: pointer;

  background:
          linear-gradient(#000000 0 0) padding-box,
          linear-gradient(to right, #8EC2E8, #252B46) border-box;
  border: 2px solid transparent;
  
  border-radius: 0 0.9em 0.9em 0;
  //border-radius: 0.9em;
  
  //border-image-source: linear-gradient(to-right, #7090DF, #3D4E79);
  font-size: 12px;
  place-items: center;
  place-content: center;
  align-self: center;

  transition: transform 1s ease;

  &:hover {
    transform: scale(1.2);
  }
`