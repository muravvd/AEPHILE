import styled from "styled-components";
import {TextareaHTMLAttributes, useEffect, useRef} from "react";
import {isRoot} from "../App";
import {useMeasure} from "react-use";

export const StyledTextField = styled.textarea`
    background: transparent;
    border: none;
    width: auto;
    height: auto;
`
export const TextField = (props: TextareaHTMLAttributes<any> & {updateMeasure?: ({w, h}: {w: string, h: string}) => void}) => {

    const [ref, { width, height }] = useMeasure();

    useEffect(() => {
        if (isRoot){
            const w = width > 0 ? String(width) : 'auto'
            const h = height > 0 ? String(height) : 'auto'
            props?.updateMeasure?.({w, h})
        }
    }, [width, height])

    const onChange = (e: any) => {
        props?.onChange?.(e)
    }

    const style: any = isRoot ? props.style : {resize: 'none', ...props.style}
    return <StyledTextField ref={ref as any} {...props} onChange={onChange} style={style} disabled={!isRoot}/>
}