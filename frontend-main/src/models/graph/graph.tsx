import React, {memo, PureComponent, useCallback, useEffect, useMemo, useState} from 'react';
import {LineChart, Line, XAxis, YAxis, ResponsiveContainer} from 'recharts';
import styled from "styled-components";
import {ExcelDownload} from "./exec-export";
import {ModelCard} from "../model-card";
import {useMutation, useQuery} from "react-query";
import {ENV} from "../../App";
import {useLocation} from "react-router-dom";
import {is} from "ramda";
import {useLatest} from "react-use";

export const StyledWrapper = styled.div`
    display: flex;
    place-items: center;
    height: 100%;
    width: 100%;
    flex-direction: column;
    place-content: center;
    gap: 40px;
`

const StyledContainer = styled(ResponsiveContainer)`
    border-radius: 40px;
    background: linear-gradient(to right, rgba(23, 23, 23, 1), rgba(23, 23, 23, 0.04));
    border: 8px solid rgba(35, 52, 108, 1);
`

const ChartWrapper = styled.div`
    place-content: center;
    place-items: start;
    display: flex;
    aspect-ratio: 1/1;
    height: 50%;
    width: 50%;
`

const getChartData = async (data: {model: string, params: any}) => {
    const response = await fetch(`${ENV.API_URL}/model`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Failed to load chart data');
    }

    return response.json();
}

export const Chart = ({ data, prediction }: {data: any, prediction: any}) => {


    const calcDomain = useMemo(() => {
        if (data?.length && data?.length > 0){

        }
        return undefined
    }, [data])

    return (
        <ChartWrapper>
            <StyledContainer>
                <LineChart
                    layout="vertical"
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 50,
                        right: 150,
                        left: 100,
                        bottom: 50,
                    }}
                >
                    <XAxis stroke="white" strokeWidth={3} fontSize={20}
                           fontWeight={'bold'} hide/>
                    <YAxis  dataKey="y" reversed={true} strokeWidth={0} fontSize={20}
                            fontWeight={'bold'} stroke={'white'}/>
                    <Line dataKey="x" stroke="#A45710" strokeWidth={3} data={data}
                          dot={{stroke: 'none', strokeWidth: 2, r: 5, fill: 'transparent'}}/>
                    <Line dataKey="x" stroke="orange" strokeWidth={3} data={prediction}
                          dot={{stroke: 'none', strokeWidth: 2, r: 5, fill: 'transparent'}}/>
                </LineChart>
            </StyledContainer>
            <ExcelDownload data={data ?? []}/>
        </ChartWrapper>
    );
}


function removeEmptyKeys(obj: { [key: string]: any }): { [key: string]: any } {
    const newObj: { [key: string]: any } = {};
    Object.keys(obj).forEach(key => {
        const value = obj[key];
        if (value !== undefined && value !== null && value !== '') {
            newObj[key] = value;
        }
    });
    return newObj;
}

export const Graph = memo(() => {
    const location = useLocation();
    const queryParams = useMemo(() => new URLSearchParams(location.search), [location]);
    const model = useMemo(() => queryParams.get('model') ?? '', [queryParams]);

    const [params, setParams] = useState({})
    const onParamsChange = useCallback((params: any) => setParams(params), [setParams])

    const [data, setData] = useState<any>([])
    const [predict, setPredict] = useState<any>([])

    const {mutate, } = useMutation(getChartData, {onSuccess: (data: {data: any[], predict: any[]})=> {
            setData(data?.data ?? [])
            setPredict(data.predict ?? [])
        }})
    const applyParams = useCallback(() => mutate({model, params: removeEmptyKeys(params)}), [model, params])

    useEffect(() => {
        setData([])
        setPredict([])
    }, [model])

    return <StyledWrapper>
        <ModelCard params={params} onParamsChange={onParamsChange} onApplyParams={applyParams}/>
        <Chart prediction={predict} data={data ?? []}/>
    </StyledWrapper>
})