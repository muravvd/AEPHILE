import {
    ModelTitle,
    ModelDataCellName,
    ModelDataCellWrapper,
    ModelWrapperPage,
    ModelDataCellValue,
    ModelWrapper,
    StyledApplyButton, ButtonWrapper, StyledModalTitle
} from './styled'
import React, {useEffect, useMemo, useState} from "react";
import {useLocation} from "react-router-dom";
import {useQuery} from "react-query";
import {ENV} from "../App";
import {assocPath, update} from "ramda";

export type ModelCardProps = {
    params: Record<string, string>
    onParamsChange: (params: any) => void
    onApplyParams: () => void
}

const ModelDataCell = ({name, value, onChange}: { name: string, value: string, onChange: (value: string) => void}) => {
    // eslint-disable-next-line react/jsx-no-undef
    return <ModelDataCellWrapper>
        <ModelDataCellName>{name}</ModelDataCellName>
        <ModelDataCellValue onChange={(e) => onChange(e.target.value)} value={value}/>
    </ModelDataCellWrapper>
}

const loadData = (model: string) => {
    return fetch(`${ENV.API_URL}/ticket-data?model=${model}`).then((res) => res.json())
}




export const ModelCard = ({onParamsChange, onApplyParams, params}: ModelCardProps) => {

    const location = useLocation();

    const queryParams = useMemo(() => {
        return new URLSearchParams(location.search)
    }, [location]);


    const model = useMemo(() => {
        return queryParams.get('model') ?? ''
    }, [queryParams]);

    const {isLoading} = useQuery({
        queryKey: ['ticker-data', 'query', model],
        queryFn: () => loadData(model),
        refetchOnMount: false,
        onSuccess: (items: {data: string[]}) => {
            const data = items?.data ?? []
            const values = data.map((title) => [title,''])
            onParamsChange((paramsPrev: any) => ({...Object.fromEntries(values), ...paramsPrev}))
    }
    })


    const onChange = (index: number) => (value: string) => {
        const data = Object.entries(params)
        const title = data[index][0] ?? ''
        const updated = assocPath([title], value, params)
        onParamsChange(updated)
    }

    if(isLoading){
        return <ModelWrapperPage>
        </ModelWrapperPage>
    }

    return <ModelWrapperPage>
        <StyledModalTitle>{model}</StyledModalTitle>
        <ModelWrapper>
            {Object.entries(params).map(([name, value], index) => <ModelDataCell onChange={onChange(index)} name={name} value={value}/>)}
            <ButtonWrapper><StyledApplyButton onClick={onApplyParams}>Ввод</StyledApplyButton></ButtonWrapper>
        </ModelWrapper>
    </ModelWrapperPage>
}