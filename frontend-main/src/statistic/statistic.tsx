import {
    ItemWrapper,
    StatisticWrapper,
    Title,
    ContentWrapper,
    StyledTextField,
    ContentItemsWrapper, ModelCartsWrapper, StyledIconHwess, StyledIconGarch, DetailsButton, StyledLine
} from './styled'
import React, {useCallback, useState} from "react";
import {useLoadTextData} from "../common/useLoadTextData";
import {update} from 'ramda'
import {getSize} from "../common/utils";
import {FirstItecIcon, BookIcon, ClockIcon, HwessIcon, GarchIcon} from "./iconst";

const IconList = [FirstItecIcon, BookIcon, ClockIcon]

const ContentItem = ({onMutate, value, updateContext, index}: {
    index: number,
    onMutate: () => void;
    value: DataT;
    updateContext: (index: number, data: DataT) => void
}) => {
    return <ItemWrapper>
        {IconList[index]}
        <StyledTextField style={{width: getSize(value.w), height: getSize(value.h)}} updateMeasure={({w, h}) => {
            updateContext(index, {...value, h, w})
        }} onBlur={onMutate} value={value.data}
                         onChange={(e) => updateContext(index, {...value, data: e.target.value})}/>
    </ItemWrapper>
}


const Content = ({content, title, onMutate, setTitle, updateContext}: {
    content: DataT[],
    title: DataT;
    onMutate: () => void;
    setTitle: (title: DataT) => void;
    updateContext: (index: number, data: DataT) => void;
}) => {

    return <ContentWrapper>
        <Title style={{width: getSize(title.w), height: getSize(title.h)}} updateMeasure={({w, h}) => {
            setTitle({...title, w, h})
        }} onChange={(e) => setTitle({...title, data: e.target.value})} onBlur={onMutate} value={title.data}/>
        <StyledLine/>
        <ContentItemsWrapper>
            {content.map((value, index) => <ContentItem updateContext={updateContext} onMutate={onMutate}
                                                        key={`${index}`} index={index} value={value}/>)}
        </ContentItemsWrapper>
        <ModelCartsWrapper>
            <StyledIconHwess/>
            <StyledIconGarch/>
        </ModelCartsWrapper>
        <DetailsButton>Узнать подробности</DetailsButton>
    </ContentWrapper>
}


type DataT = {
    w: string, h: string, data: string
}

type ResponseDataT = {
    title: DataT
    content: DataT[]
}


export const Statistic = () => {

    const [content, setContent] = useState<DataT[]>([])
    const [title, setTitle] = useState<DataT>({w: 'auto', h: 'auto', data: ''})

    const {isLoading, mutate} = useLoadTextData<ResponseDataT>({
        onSuccess: (data) => {
            setContent(data.content)
            setTitle(data?.title)
        },
        page: 'statistic',
        key: 'statistic-data'
    })

    const updateContent = (index: number, data: DataT) => {
        setContent(update(index, data, content))
    }


    const onMutate = useCallback(() => {
        mutate({
            page: 'statistic', data: {title, content}
        })
    }, [mutate, title, content])

    if (isLoading) return <>Loading...</>

    return (
        <StatisticWrapper>
            <Content updateContext={updateContent} setTitle={setTitle} onMutate={onMutate} title={title}
                     content={content}/>
        </StatisticWrapper>
    )
}