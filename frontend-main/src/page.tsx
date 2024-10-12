import {memo, PropsWithChildren} from "react";
import styled from "styled-components";

export type PageProsT = PropsWithChildren<{ backgroundHref: string; short?: boolean }>

export const Wrapper = styled.div<PageProsT>`
  display: flex;
  width: 100%;
  //height: ${({short}) => short ? '50%' : '100%'};
  height: 120%;
  background-image: ${({backgroundHref}) => `url("${backgroundHref}")`};
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
`

export const Wrapper2 = styled.div<PageProsT>`
  width: 100%;
    //height: ${({short}) => short ? '50%' : '100%'};
  height: 421px;
  background-image: ${({backgroundHref}) => `url("${backgroundHref}")`};
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
`

export const Wrapper3 = styled.div<PageProsT>`
  width: 100%;
    //height: ${({short}) => short ? '50%' : '100%'};
  height: 534px;
  background-image: ${({backgroundHref}) => `url("${backgroundHref}")`};
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
`
///images/first-back.png
export const Page = memo( ({children, backgroundHref, short}: PageProsT) => {
    return <Wrapper short={short} backgroundHref={backgroundHref}>{children}</Wrapper>
})

export const Page2 = ({children, backgroundHref, short}: PageProsT) => {
    return <Wrapper2 short={short} backgroundHref={backgroundHref}>{children}</Wrapper2>
}

export const Page3 = ({children, backgroundHref, short}: PageProsT) => {
    return <Wrapper3 short={short} backgroundHref={backgroundHref}>{children}</Wrapper3>
}