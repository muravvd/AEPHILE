import styled, {css} from "styled-components";

export const NonExpandedWrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr  1fr;
    height: 100%;
    gap: 50px;
    //align-items: center;
    //justify-items: center;
    //padding: 0 185px ;
`

export const ItemWrapper = styled.div<{isSubItem?: boolean; url?: string}>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: ${({url}) => url ? 'pointer' : 'auto'};
  width: max-content;
`

export const ItemTitleWrapper = styled.div<{isSubItem?: boolean}>`
    font-weight: bold;
    font-size: ${({isSubItem}) => isSubItem ? `17px` : '20px'};;
    color: ${({isSubItem}) => isSubItem ? `#A6A6A6` : 'white'};
`

export const Disclaimer = styled.div`
  font-weight: bold;
  font-size: 12px;
  color: #FFFFFF;
  text-align: center;
  place-self: center;
  width: 80%;
`

export const ListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 150px;
`

export const LinksWrapper = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 150px;
  color: #FFFFFF;
  justify-items: center;
  justify-self: center;
`

export const LinksBigWrapper = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr 1fr;
  width: max-content;
`

export const LinksSmallWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`

export const LinksTextBig = styled.div`
  font-size: 30px;
  font-family: monospace;
  height: max-content;
`

export const LinksTextSmall = styled.div`
  display: flex;
  align-items: flex-start;
  font-weight: bold;
  font-size: 20px;
  height: max-content;
`

export const LinksSubText = styled.div`
  color: #A6A6A6;
  font-size: 17px;
`

export const IconsLine = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 10px;
`

export const IconsCircle = styled.div`
  display: flex;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #D9D9D9;
  color: #3E3E3E;
  place-content: center;
  align-items: center;
  cursor: pointer;
`

const TextStyle = css`
  padding: 0 16px;
  color: #ffffff;
  font-size: 13px;
  font-weight: 230;
  line-height: 25px;
  text-align: left;
`;

export const MailboxWrap = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: row;
  align-self: center;
  place-self: center;
`

export const Mailbox = styled.input`
  ${TextStyle};
  width: 100%;
  background: transparent;
  height: 26px;
  border: none;
  border-bottom: #2B3053 5px solid;
  outline: none;
`

export const RArrow = styled.div`
  cursor: pointer;
  height: 26px;
  width: 26px;
  place-content: center;
  border-bottom: #2B3053 5px solid;
`