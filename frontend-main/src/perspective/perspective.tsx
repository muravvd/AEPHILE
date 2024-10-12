import {Rectangle, Mailbox, StyledLine, SubTitle, Title, Wrapper, MailboxWrap, SendButton} from "./styled";
import React from "react";

export const Perspective = () => {
    return <Wrapper>
        <div/>
        <Title>ПЕРСПЕКТИВЫ</Title>
        <StyledLine/>
        <Rectangle>
            <SubTitle>
                Наши будущие проекты будут позволять клиентам получать более глубокое понимание рынка, ценовые модели, а
                также автоматизированный менеджмент риска текущих позиций.
            </SubTitle>
            <MailboxWrap>
                <Mailbox/>
                <SendButton onClick={() => {}}>ЗАЯВКА</SendButton>
            </MailboxWrap>
        </Rectangle>
        <div/>
    </Wrapper>
}