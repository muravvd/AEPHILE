import React, {useMemo} from 'react';
import {utils, write} from 'xlsx';
import {Exel} from "../../icons/exel";
import styled from "styled-components";
import {useLocation} from "react-router-dom";

const ExelIconWrapper = styled.div`
    flex: 0.2;
    cursor: pointer;
    position: relative;
    scale: 0.5;
    right: 20%;
    display: contents;
`

export function ExcelDownload({data}: {data: { x: number, y: number }[] }) {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const model = queryParams.get('model') ?? '';

    const dataToExport = useMemo<[string, string][]>(() => {
        return data.map(({x, y}) => [String(x), String(y)])
    }, [data])

    const handleDownload = () => {
        const wb = utils.book_new();

        const ws = utils.aoa_to_sheet([
            ['Дата', 'Цена'],
            ...dataToExport
        ]);

        // Add the worksheet to the workbook
        utils.book_append_sheet(wb, ws, 'Sheet1');

        // Generate a blob from the workbook
        // Generate a blob from the workbook
        const wbBlob = write(wb, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([wbBlob], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

        // Create a download link
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${model}-model-data.xlsx`;

        // Trigger a click event to prompt the user to download the file
        document.body.appendChild(a);
        a.click();

        // Clean up
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <ExelIconWrapper onClick={handleDownload}>
            <Exel/>
        </ExelIconWrapper>
);
}

