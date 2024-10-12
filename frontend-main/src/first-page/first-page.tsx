import React, {useCallback, useState} from "react";
import {StyledSubTitle, StyledTitle, ContentWrapper, TextWrapper, FatButton1} from "./styled";
import {AFP} from "../icons/afp";
import {useLoadTextData} from "../common/useLoadTextData";
import {getSize} from "../common/utils";


type DataT = {
    w: string, h: string, data: string
}

type ResponseDataT = {
    title: DataT
    content: DataT
}

const Content = () => {
    const [text, setText] = useState<DataT>({w: 'auto', h: 'auto', data: ''})
    const [title, setTitle] = useState<DataT>({w: 'auto', h: 'auto', data: ''})


    const {mutate, isLoading} = useLoadTextData<ResponseDataT>({
        onSuccess: (data) => {
            setText(data?.content)
            setTitle(data?.title)
        }, page: 'first_page', key: 'first-page-data'
    })

    const onSubmit = () => {
        mutate({
            page: 'first_page', data: {
                content: text, title: title
            }
        })
    }


    const handleTextChange = (e: any) => {
        setText({...title, data: e?.target.value})
    }

    const handleTitleChange = useCallback((e: any) => {
        setTitle({...title, data: e?.target.value})
    }, [])


    const updateTitleMeasure = useCallback(({w, h}: {w: string, h: string}) => {
        setTitle({...title, w, h})
    }, [title])

    const updateTextMeasure = useCallback(({w, h}: {w: string, h: string}) => {
        setText({...text, w, h})
    }, [text])

    return <ContentWrapper>
        <TextWrapper>
            <StyledTitle style={{width: getSize(title.w), height: getSize(title.h)}}
                         updateMeasure={updateTitleMeasure}
                         onChange={handleTitleChange}
                         onBlur={onSubmit}
                         value={title.data}
            />
            <StyledSubTitle style={{width: getSize(text.w), height: getSize(text.h)}}
                            updateMeasure={updateTextMeasure}
                            onChange={handleTextChange}
                            onBlur={onSubmit}
                            value={text.data}
            />
            <FatButton1>Смотреть опции</FatButton1>
        </TextWrapper>
    </ContentWrapper>
}

export const FirstPage = () => {
    return (
        <Content/>
    )
}