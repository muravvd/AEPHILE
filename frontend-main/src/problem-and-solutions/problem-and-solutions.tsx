import styled from "styled-components";
import {Arrow} from "../icons/arrow";
import React, {memo, PropsWithChildren, useCallback, useMemo, useState} from "react";
import {TextField} from "../common/text-area";
import {useLoadTextData} from "../common/useLoadTextData";
import {update} from "ramda";
import {getSize} from "../common/utils";
import {CardWrapper, StyledCard, StyledCardText, StyledLine, StyledTitle, StyledWrapper} from "./styled";

export const StyledDocumentationButton = styled.button`

  transition: transform 2s ease; /* Smooth transition */

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: 5px 5px 10px rgba(167, 89, 18, 0.5)
  }

  background: linear-gradient(rgba(23, 23, 24, 1), rgba(23, 23, 24, 1)) padding-box,
  linear-gradient(to right, #8EC2E8, #6177C3, #23346C, #252B46) border-box;
  border-radius: 1em;
  border: 3px solid transparent;

  margin-top: 60px;
  padding: 10px 30px;
  font-size: 20px;
  font-weight: bold;
  color: white;
`;


type CartPropsT = {
    card: DataT;
    updateContext: (index: number, data: DataT) => void;
    index: number,
    onMutate: () => void;
};


const Card = ({card, onMutate, updateContext, index}: CartPropsT) => {

    const updateMeasure = useCallback(({w, h}: {w: string, h: string}) => {
        updateContext(index, {...card, h, w})
    }, [index, card])

    const styles = useMemo(() => ({width: getSize(card.w), height: getSize(card.h)}), [card])
    const onChange = useCallback((e: any) => updateContext(index, {...card, data: e.target.value}), [updateContext, card, index])

    return <StyledCard>
        <StyledCardText style={styles}
                        updateMeasure={updateMeasure}
                        onBlur={onMutate}
                        value={card.data}
                        onChange={onChange}
        />
    </StyledCard>
}

type DataT = {
    w: string, h: string, data: string
}

type ResponseDataT = {
    title: DataT
    content: DataT[]
}

export const ProblemAndSolutions = memo(() => {

    const [content, setContent] = useState<DataT[]>([])
    const [title, setTitle] = useState<DataT>({w: 'auto', h: 'auto', data: ''})

    const {isLoading, mutate} = useLoadTextData<ResponseDataT>({
        onSuccess: (data) => {
            setContent(data.content)
            setTitle(data?.title)
        },
        page: 'problem-and-solutions',
        key: 'problem-and-solutions-data'
    })

    const updateContent = useCallback((index: number, data: DataT) => {
        setContent(update(index, data, content))
    }, [content])


    const onMutate = useCallback(() => {
        mutate({
            page: 'problem-and-solutions', data: {title, content}
        })
    }, [mutate, title, content])


    const titleStyles = useMemo(() => ({width: getSize(title.w), height: getSize(title.h)}), [title])

    const onTitleChange = useCallback((e: any) => setTitle({...title, data: e.target.value}), [title, setTitle])

    const updateTitleMeasure = useCallback(({w, h}: {w: string, h: string}) => {
        setTitle({...title, w, h})
    }, [title])

    if (isLoading) return <>Loading...</>

    return <StyledWrapper>
        <StyledTitle style={titleStyles} updateMeasure={updateTitleMeasure} onChange={onTitleChange} onBlur={onMutate} value={title.data}/>
        <StyledLine/>
        <CardWrapper>
            {content.map((card, index) => <Card onMutate={onMutate} index={index} card={card} updateContext={updateContent}/>)}
        </CardWrapper>
        <StyledDocumentationButton>Документация</StyledDocumentationButton>
    </StyledWrapper>
})