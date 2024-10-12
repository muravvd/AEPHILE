import {DisclaimerText, ListProps} from "../perspective/constants";
import {LinkListPropsT, ListItemT} from "../perspective/types";
import {useHistory, useLocation} from "react-router-dom";
import {
    Disclaimer, IconsCircle, IconsLine,
    ItemTitleWrapper,
    ItemWrapper, LinksBigWrapper, LinksSmallWrapper, LinksSubText,
    LinksTextBig, LinksTextSmall,
    LinksWrapper,
    ListWrapper, Mailbox, MailboxWrap,
    NonExpandedWrapper, RArrow
} from "./styled";
import {FaInstagram, FaTwitter, FaYoutube, FaArrowRight} from "react-icons/fa";
import React from "react";

export const BottomLinks = () => {
    return <NonExpandedWrapper id={'links'}>
        <LinksWrapper>
            <LinksBigWrapper>
                <LinksTextBig>AEPHILE</LinksTextBig>
                <LinksTextSmall>Подписка на рассылку</LinksTextSmall>
                <MailboxWrap>
                    <Mailbox/>
                    <RArrow>
                        <FaArrowRight onClick={() => {}}/>
                    </RArrow>
                </MailboxWrap>
            </LinksBigWrapper>
            <LinkList {...ListProps}/>
            <LinksSmallWrapper>
                <LinksTextSmall>
                    Контакты
                </LinksTextSmall>
                <LinksSubText>
                    aephilestart@gmail.com
                </LinksSubText>
                <IconsLine>
                    <IconsCircle>
                        <FaInstagram/>
                    </IconsCircle>
                    <IconsCircle>
                        <FaYoutube/>
                    </IconsCircle>
                    <IconsCircle>
                        <FaTwitter/>
                    </IconsCircle>
                </IconsLine>
            </LinksSmallWrapper>
        </LinksWrapper>
        <Disclaimer>{DisclaimerText}</Disclaimer>
    </NonExpandedWrapper>
}

const ListItem = ({title, url, subLinks, isSubLink}: ListItemT & { isSubLink?: boolean }) => {

    const history = useHistory();
    const {pathname} = useLocation()
    const moveTo = (to: string) => {
        history?.push(to);
        if (pathname !== to) {
            window.location.reload();
        }
    };

    return <ItemWrapper isSubItem={isSubLink} url={url} onClick={() => url && moveTo(url)}>
        <ItemTitleWrapper isSubItem={isSubLink}>{title}</ItemTitleWrapper>
        {subLinks?.map((item) => <ListItem {...item} isSubLink/>)}
    </ItemWrapper>
}


const LinkList = ({items}: LinkListPropsT) => {
    return <ListWrapper>{items.map(ListItem)}</ListWrapper>
}

